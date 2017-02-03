/**
 * Created by hocgin on 2017/1/31.
 *
 */
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
    console.log(result);
});

// -----------------
// HTTP GET
function get(url, callback, error) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }else {
            error();
        }
    };
    xhr.send();
}

/**
 * 刷新定位
 */
function refreshLocation() {
    if (navigator.geolocation) { // 支持定位
        navigator.geolocation.getCurrentPosition(function (position) {
            /**
             * 存储经纬度
             */
            chrome.storage.sync.set({
                "latitude": position.coords.latitude,
                "longitude": position.coords.longitude
            }, null);
        }, function (error) {
            console.log('Error occurred. Error code: ' + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from locaton provider)
            //   3: timed out
        });
    } else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
}

/**
 * 获取天气状况
 */
function refreshWeather() {
    chrome.storage.sync.get([
        "latitude",
        "longitude",
        "appid",
        "lang",
        "tempUnit"
    ], function (result) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + result.latitude
            + '&lon=' + result.longitude
            + '&appid=' + result.appid
            + '&lang=' + result.lang
            + '&units=' + result.tempUnit
            ;
      console.log(url);
        get(url, function (result) {
            console.log(result);
            // 设置图片 http://openweathermap.org/img/w/10d.png
            var data = JSON.parse(result);
            if (data.cod !== 200) { // 请求失败
                chrome.browserAction.setIcon({path: {'19': 'i/404.png'}});
                return;
            }
            chrome.storage.sync.set({
                "nowWeather": result,
                "updateTime": Date.parse(new Date())
            }, null); // 实时天气状况JSON
            chrome.browserAction.setIcon({path: {'19': 'weather-icon/' + data.weather[0].icon + '.png'}});
            chrome.storage.sync.get(["badge"], function (result) {
                if (result.badge == "temp") { // 显示温度
                    chrome.browserAction.setBadgeText({text: data.main.temp + "°"});
                }else if(result.badge == "description") { // 显示天气描述
                    chrome.browserAction.setBadgeText({text: data.weather[0].description});
                }else { // 关闭Badge显示
                    chrome.browserAction.setBadgeText({text: ''});
                }
            });
        }, function () { // 请求发生错误
            chrome.browserAction.setIcon({path: {'19': 'i/404.png'}});
        });

    });
}

/**
 * 刷新天气
 */
function refresh() {
    refreshLocation();
    chrome.storage.sync.get(['latitude', 'longitude'], function (result) {
        if (!!result.latitude && !!result.longitude) {
            refreshWeather();
        }
    });
}

window.onload = refresh();

// 初始化设置
chrome.storage.sync.get(['appid', 'lang', 'refreshTime'], function (result) {
  chrome.storage.sync.set({
    "appid": result.appid || '5cc4a35dddbcda5e26e06a47868d7291',
    "lang": result.lang ||'zh',
    'refreshTime': result.refreshTime || 30 * 60 * 1000,
    'tempUnit': "metric",
    "badge": "none"
  }, function () {
    console.log("设置 APP ID 成功");
    chrome.storage.sync.get(['refreshTime'], function (result) {
      window.setInterval(refresh, result.refreshTime);
    });
  });
});
