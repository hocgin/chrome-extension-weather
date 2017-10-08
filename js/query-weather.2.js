/**
 * Created by hocgin on 2017/1/31.
 *
 */
var interval; // setInterval
var option;   // 所有设置信息
chrome.storage.sync.get([
    'appid',
    'lang',
    'badge',
    'latitude',
    'longitude',
    'tempUnit',
    'refreshTime',
    'nowWeather',
    'updateTime'
], function (result) {
    console.log("[普通日志] 获取存储变量成功 -> ", result);
    result.appid = result.appid || '5cc4a35dddbcda5e26e06a47868d7291';
    result.lang = result.lang || 'zh';
    result.refreshTime = 30 * 60 * 10000;
    result.tempUnit = result.tempUnit || 'metric';
    result.badge = result.badge || 'none';
    option = result;

    // 初始化设置
    chrome.storage.sync.set(result, function () {
        console.log("[普通日志] 初始化设置成功", result);
        refresh(result);
        interval = window.setInterval(function () {
            refresh(result);
        }, result.refreshTime);
    });
});

// -----------------
// HTTP GET
function get(url, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        } else {
            error();
        }
    };
    xhr.send();
}

/**
 * 刷新定位
 */
function getLocation(callback) {
    if (navigator.geolocation) { // 支持定位
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            callback(latitude, longitude);
            /**
             * 存储经纬度
             */
            chrome.storage.sync.set({
                "latitude": latitude,
                "longitude": longitude
            }, function () {
                option.latitude = latitude;
                option.longitude = longitude;
                console.log("[普通日志] 获取位置并存储完毕")
            });
        }, function (error) {
            console.log('[错误日志] Error occurred. Error code: ' + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from locaton provider)
            //   3: timed out
        });
    } else {
        console.log('[错误日志] 该用户无法进行定位必须手动输入位置');
    }
}

/**
 * 获取天气状况
 "latitude",
 "longitude",
 "appid",
 "lang",
 "tempUnit"
 */
function refreshWeather(result) {
    var url = 'http://api.openweathermap.org/data/2.5/weather'
        + '?lat=' + result.latitude
        + '&lon=' + result.longitude
        + '&appid=' + result.appid
        + '&lang=' + result.lang
        + '&units=' + result.tempUnit;
    get(url, function (result) {
        console.log('[普通日志] 请求 ' + url + ' 结果为 ', result);
        // 设置图片 http://openweathermap.org/img/w/10d.png
        var data = JSON.parse(result);
        if (data.cod !== 200) { // 请求失败
            chrome.browserAction.setIcon({path: {'19': 'i/404.png'}});
            return;
        }
        var updateTime = Date.parse(new Date());
        chrome.storage.sync.set({
            "nowWeather": result,
            "updateTime": updateTime
        }, function () {
            option.nowWeather = result;
            option.updateTime = updateTime;
        }); // 实时天气状况JSON
        chrome.browserAction.setIcon({path: {'19': 'weather-icon/' + data.weather[0].icon + '.png'}});
        chrome.storage.sync.get(["badge"], function (result) {
            if (result.badge === "temp") {
                // 显示温度
                chrome.browserAction.setBadgeText({text: data.main.temp + "°"});
            } else if (result.badge === "description") {
                // 显示天气描述
                chrome.browserAction.setBadgeText({text: data.weather[0].description});
            } else {
                // 关闭Badge显示
                chrome.browserAction.setBadgeText({text: ''});
            }
        });

        // 给 option 发送信息
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                cmd: "from-background-to-option.setLastUpdateTime",
                lastUpdateTime: option.updateTime
            }, function (response) {
                console.log('[普通日志] 实时更新时间反馈', response);
            });
        });
    }, function () { // 请求发生错误
        console.log('[错误日志] 请求 ' + url + ' 发生错误');
        chrome.browserAction.setIcon({path: {'19': 'i/404.png'}});
    });
}

/**
 * 刷新
 */
function refresh(result) {
    if (!!result.latitude
        && !!result.longitude) {
        console.log("[普通日志] 已经拥有地址 (" + result.latitude + "," + result.longitude + ")");
        refreshWeather(result);
    } else {
        console.log("[普通日志] 正在请求地址");
        getLocation(function (latitude, longitude) {
            result.latitude = latitude;
            result.longitude = longitude;
            refreshWeather(result)
        });
    }
}

// 通信监听
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.cmd) {
            case 'from-option-to-background.refresh':
                refresh(option);
                break;
            case 'from-option-to-background.save':
                chrome.storage.sync.set(request.option, function () {
                    option.latitude = request.option.latitude;
                    option.longitude = request.option.longitude;
                    option.appid = request.option.appid;
                    option.badge = request.option.badge;
                    option.tempUnit = request.option.tempUnit;
                    option.lang = request.option.lang;
                    option.refreshTime = request.option.refreshTime;
                    console.log('[普通日志] 保存配置完毕, 刷新中 ', option);
                    // 重启刷新器
                    window.clearInterval(interval);
                    refresh(option);
                    interval = window.setInterval(function () {
                        refresh(option);
                    }, option.refreshTime);
                });
                break;
        }

        console.log('[普通日志] 接收到请求信息 ', request, sender, sendResponse);

    }
);