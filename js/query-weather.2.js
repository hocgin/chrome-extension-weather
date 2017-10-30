/**
 * Created by hocgin on 2017/1/31.
 * todo 请求url失败需通知提示。
 */
/**
 *      _      _
 *   __| | ___| |__  _   _  __ _
 *  / _` |/ _ \ '_ \| | | |/ _` |
 * | (_| |  __/ |_) | |_| | (_| |
 * \__,_|\___|_.__/ \__,_|\__, |
 *                        |___/
 **/
var DEBUG = false;
if (DEBUG) {
    chrome.storage.sync.clear(function () {
        console.log("清除成功");
    });
}

/********************************/
var interval; // setInterval
var option;   // 所有设置信息
chrome.storage.sync.get([
    'count',
    'appid',
    'lang',
    'badge',
    'optionStyle', // 风格
    'latitude',
    'longitude',
    'dashboardLeft', // 仪表盘 左侧
    'dashboardRight', // 仪表盘 右侧
    'tempUnit',
    'refreshTime',
    'nowWeather',
    'updateTime',
    'currentAirQuality', // 当前空气质量, JSON
    'aqicnToken' // 空气质量网 http://aqicn.org/ 的Token
], function (result) {
    console.log("[普通日志] 获取存储变量成功 -> ", result);
    result.appid = result.appid || '5cc4a35dddbcda5e26e06a47868d7291';
    result.aqicnToken = result.aqicnToken || 'd91d61c238c5f91703ecf3927dcefc2643cc32ba';
    result.lang = result.lang || 'zh';
    result.refreshTime = result.refreshTime || 30 * 60 * 10000;
    result.tempUnit = result.tempUnit || 'metric';
    result.badge = result.badge || 'temp';
    result.optionStyle = result.optionStyle || 'style2';
    result.dashboardLeft = result.dashboardLeft || 'cloudsAll';
    result.dashboardRight = result.dashboardRight || 'barometer';
    result.count = result.count || 1;
    option = result;

    if (result.count === 1) { // 初始化设置
        notification("为了不影响您的使用，请及时更换APP ID");
        result.count++;
        chrome.storage.sync.set(result, function () {
            console.log("[普通日志] 初始化设置成功", result);
        });
    }

    refresh(result);
    interval = window.setInterval(function () {
        refresh(result);
    }, result.refreshTime);
});

/**
 * HTTP GET
 * @param url 请求地址
 * @param callback 成功回调
 * @param error 错误回调
 */
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
 * 获取定位
 * @param callback 回调
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
        notification("当前浏览器不支持自动定位");
        console.log('[错误日志] 该用户无法进行定位必须手动输入位置');
    }
}

/**
 * 获取天气状况
 * @param result
 *        result.latitude
 *        result.longitude
 *        result.appid
 *        result.lang
 *        result.tempUnit
 */
function refreshWeather(result) {
    var url = 'http://api.openweathermap.org/data/2.5/weather'
        + '?lat=' + result.latitude
        + '&lon=' + result.longitude
        + '&appid=' + result.appid
        + '&lang=' + result.lang
        + '&units=' + result.tempUnit;
    get(url, function (result) {
        // 设置图片 http://openweathermap.org/img/w/10d.png
        var data = JSON.parse(result);
        console.log('[普通日志] 请求 ' + url + ' 结果为 ', data);
        if (data.cod !== 200) { // 请求失败
            notification("连接 openweathermap.org 被拒绝(" + data.cod + "), 请检查 APP ID");
            return;
        }
        var updateTime = Date.parse(new Date());
        chrome.storage.sync.set({
            "nowWeather": result,
            "updateTime": updateTime
        }, function () {
            option.nowWeather = result;
            option.updateTime = updateTime;
        });
        // 实时天气状况JSON
        chrome.browserAction.setIcon({path: {'19': 'weather-icon/' + data.weather[0].icon + '.png'}});
        refreshBadge();
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
 * 查询空气质量
 * @param result
 *        result.latitude
 *        result.longitude
 *        result.aqicnToken
 */
function refreshAirQuality(result) {
    var url = 'http://api.waqi.info/feed/'
        + 'geo:' + result.latitude
        + ';' + result.longitude
        + '/?token=' + result.aqicnToken;
    get(url, function (result) {
        var data = JSON.parse(result);
        console.log('[普通日志] 请求 ' + url + ' 结果为 \n', data);
        if (data.status === "ok") {
            chrome.storage.sync.set({
                "currentAirQuality": result
            }, function () {
                option.currentAirQuality = result
            });
            refreshBadge();
        } else {
            notification("连接 aqicn.org 被拒绝(" + data.status + "), 请检查 APP ID");
        }
    }, function () { // 请求发生错误
        console.log('[错误日志] 请求 ' + url + ' 发生错误');
    });
}

/**
 * 刷新请求
 * @param result
 */
function refresh(result) {
    if (!!result.latitude
        && !!result.longitude) {
        console.log("[普通日志] 已经拥有地址 (" + result.latitude + "," + result.longitude + ")");
        refreshWeather(result);
        refreshAirQuality(result);
    } else {
        console.log("[普通日志] 正在请求地址");
        getLocation(function (latitude, longitude) {
            result.latitude = latitude;
            result.longitude = longitude;
            refreshWeather(result);
            refreshAirQuality(result);
        });
    }
}

/**
 * 刷新 Badge
 * - 只支持 3个字符 或者 两个汉字
 */
function refreshBadge() {
    if (!!option.nowWeather && !!option.currentAirQuality) {
        var text = '';
        var currentWeatherObject = JSON.parse(option.nowWeather);
        var currentAirQualityObject = JSON.parse(option.currentAirQuality);
        if (option.badge === "temp") {
            // 显示温度
            text = currentWeatherObject.main.temp + "°";
        } else if (option.badge === "description") {
            // 显示天气描述
            text = currentWeatherObject.weather[0].description;
        } else if (option.badge === "airQuality") {
            // 空气质量
            var aqi = currentAirQualityObject.data.aqi;
            var airQualityText = '严重污染';
            if (aqi <= 50) {
                airQualityText = '优';
            } else if (aqi <= 100) {
                airQualityText = '良';
            } else if (aqi <= 150) {
                airQualityText = '轻度';
            } else if (aqi <= 200) {
                airQualityText = '中度';
            } else if (aqi <= 300) {
                airQualityText = '重度';
            }
            text = airQualityText;
        } else if (option.badge === "aqi") {
            // AQI 指数
            text = currentAirQualityObject.data.aqi + '';
        }
        chrome.browserAction.setBadgeText({text: text});
    }
}

/**
 * 通知
 * @param title
 */
function notification(title) {
    var notification = new Notification(title, {
        dir: "ltr",  //控制方向，据说目前浏览器还不支持
        lang: "utf-8",
        icon: "http://7xs6lq.com1.z0.glb.clouddn.com/LOGO_48.png",
        body: "点击进行设置"
    });
    notification.onclick = function () {
        chrome.tabs.create({url: "options.html"});
    };
}

/**
 * 通信监听
 */
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
                    option.aqicnToken = request.option.aqicnToken;
                    option.optionStyle = request.option.optionStyle;
                    option.dashboardRight = request.option.dashboardRight;
                    option.dashboardLeft = request.option.dashboardLeft;
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

