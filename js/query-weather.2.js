/**
 * Created by hocgin on 2017/1/31.
 */
const VERSION = '0.0.7';
/**
 *      _      _
 *   __| | ___| |__  _   _  __ _
 *  / _` |/ _ \ '_ \| | | |/ _` |
 * | (_| |  __/ |_) | |_| | (_| |
 * \__,_|\___|_.__/ \__,_|\__, |
 *                        |___/
 **/
var iDEBUG = false;
if (iDEBUG) {
    chrome.storage.sync.clear(function () {
        console.log("清除成功");
    });
}

// 常量
var iCONST = {
    OPEN_WEATHER_API: '5cc4a35dddbcda5e26e06a47868d7291',
    OPEN_AQICN_API: 'd91d61c238c5f91703ecf3927dcefc2643cc32ba'
};

// 所有配置信息
var iConfiguration = {};

// 请求响应的数据
var iResponse = {
    Weather: {
        RealTime: null, // JSON 对象
        Forecast: null // JSON 对象
    },
    AirQuality: {
        RealTime: null // JSON 对象
    },
    UpdateAt: null
};

// setInterval
var iInterval;

/********************************/
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
    'nowWeather',  // JSON
    'weatherForecast', // 5 天的天气预报 JSON
    'updateTime',     // 更新时间
    'currentAirQuality', // 当前空气质量, JSON
    'aqicnToken' // 空气质量网 http://aqicn.org/ 的Token
], function (result) {
    console.log("[普通日志] 获取配置信息成功 %o", result);

    result.appid = result.appid || iCONST.OPEN_WEATHER_API;
    result.aqicnToken = result.aqicnToken || iCONST.OPEN_AQICN_API;
    result.lang = result.lang || 'zh';
    result.refreshTime = result.refreshTime || 30 * 60 * 10000;
    result.tempUnit = result.tempUnit || 'metric';
    result.badge = result.badge || 'temp';
    result.optionStyle = result.optionStyle || 'style2';
    result.dashboardLeft = result.dashboardLeft || 'cloudsAll';
    result.dashboardRight = result.dashboardRight || 'barometer';
    result.count = result.count || 1;
    iConfiguration = result;

    if (result.count === 1) { // 初始化设置
        iUtils.notification("为了不影响您的使用，请及时更换APP ID");
        result.count++;
        chrome.storage.sync.set(result, function () {
            console.log("[普通日志] 初始化设置成功", result);
        });
    }

    iRefresh.all();
    iInterval = window.setInterval(function () {
        iRefresh.all();
    }, iConfiguration.refreshTime);
});

var iRefresh = {
    /**
     * 刷新请求
     */
    all: function () {
        var that = this;
        if (!!iConfiguration.latitude
            && !!iConfiguration.longitude) {
            console.log("[普通日志] 已经拥有地址 (" + iConfiguration.latitude + "," + iConfiguration.longitude + ")");
            this.realTimeWeather();
            this.forecastWeather();
            this.realTimeAirQuality();
        } else {
            console.log("[普通日志] 正在请求地址");
            iUtils.getLocation(function () {
                that.realTimeWeather();
                that.forecastWeather();
                that.realTimeAirQuality();
            });
        }

    },
    /**
     * 获取当前天气状况
     * @param Configuration
     *        Configuration.latitude
     *        Configuration.longitude
     *        Configuration.appid
     *        Configuration.lang
     *        Configuration.tempUnit
     */
    realTimeWeather: function () {
        var url = 'http://api.openweathermap.org/data/2.5/weather'
            + '?lat=' + iConfiguration.latitude
            + '&lon=' + iConfiguration.longitude
            + '&appid=' + iConfiguration.appid
            + '&lang=' + iConfiguration.lang
            + '&units=' + iConfiguration.tempUnit;
        iUtils.get(url, function (result) {
            // 设置图片 http://openweathermap.org/img/w/10d.png
            var data = JSON.parse(result);
            console.log('[普通日志] 请求 %s 结果为 %o', url, data);
            if (data.cod !== 200) { // 请求失败
                iUtils.notification("连接 openweathermap.org 被拒绝(" + data.cod + "), 请检查 APP ID");
                return;
            }

            iResponse.Weather.RealTime = data;
            iResponse.UpdateAt = Date.parse(new Date());

            // 实时天气状况JSON
            chrome.browserAction.setIcon({path: {'19': 'weather-icon/' + data.weather[0].icon + '.png'}});
            iRefresh.badgeText();
            // 给 option 发送信息
            iUtils.sendMessageToOption({
                cmd: "from-background-to-option.setLastUpdateTime",
                lastUpdateTime: iResponse.UpdateAt
            }, function (response) {
                console.log('[普通日志] 实时更新时间, 反馈: %o', response);
            });
        }, function () {
            console.log('[错误日志] 请求 %s 发生错误', url);
        });
    },
    /**
     * 获取预报天气状况
     * @param Configuration
     *        Configuration.latitude
     *        Configuration.longitude
     *        Configuration.appid
     *        Configuration.lang
     *        Configuration.tempUnit
     */
    forecastWeather: function () {
        var url = 'http://api.openweathermap.org/data/2.5/forecast'
            + '?lat=' + iConfiguration.latitude
            + '&lon=' + iConfiguration.longitude
            + '&appid=' + iConfiguration.appid
            + '&lang=' + iConfiguration.lang
            + '&units=' + iConfiguration.tempUnit;
        iUtils.get(url, function (result) {
            // 设置图片 http://openweathermap.org/img/w/10d.png
            var data = JSON.parse(result);
            console.log('[普通日志] 请求 %s 结果为 %o', url, data);
            if (data.cod !== '200') { // 请求失败
                iUtils.notification('连接 openweathermap.org 被拒绝(' + data.cod + '), 请检查 APP ID');
                return;
            }

            iResponse.Weather.Forecast = data;
        }, function () {
            console.log('[错误日志] 请求 %s 发生错误', url);
        });
    },
    /**
     * 查询空气质量
     * @param Configuration
     *        Configuration.latitude
     *        Configuration.longitude
     *        Configuration.aqicnToken
     */
    realTimeAirQuality: function () {
        var url = 'http://api.waqi.info/feed/'
            + 'geo:' + iConfiguration.latitude
            + ';' + iConfiguration.longitude
            + '/?token=' + iConfiguration.aqicnToken;
        iUtils.get(url, function (result) {
            var data = JSON.parse(result);
            console.log('[普通日志] 请求 %s 结果为 %o', url, data);
            if (data.status === "ok") {
                iResponse.AirQuality.RealTime = data;
                iRefresh.badgeText();
            } else {
                iUtils.notification("连接 aqicn.org 被拒绝(" + data.status + "), 请检查 APP ID");
            }
        }, function () {
            console.log('[错误日志] 请求 %s 发生错误', url);
        });
    },
    /**
     * 刷新 Badge
     * - 只支持 3个字符 或者 两个汉字
     */
    badgeText: function () {
        if (!!iResponse.Weather.RealTime
            && !!iResponse.AirQuality.RealTime) {
            var text = '';
            if (iConfiguration.badge === "temp") {
                // 显示温度
                text = Math.round(iResponse.Weather.RealTime.main.temp) + "°";
            } else if (iConfiguration.badge === "description") {
                // 显示天气描述
                text = iResponse.Weather.RealTime.weather[0].description;
            } else if (iConfiguration.badge === "airQuality") {
                // 空气质量
                text = iUtils.aqiText(iResponse.AirQuality.RealTime.data.aqi);
            } else if (iConfiguration.badge === "aqi") {
                // AQI 指数
                text = iResponse.AirQuality.RealTime.data.aqi + '';
            }
            chrome.browserAction.setBadgeText({text: text});
        }
    }
};

var iUtils = {
    /**
     * GET 请求
     * @param url
     * @param callback
     * @param error
     */
    get: function (url, callback, error) {
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
    },
    /**
     * Chrome 通知
     * @param title
     */
    notification: function (title) {
        var notification = new Notification(title, {
            dir: "ltr",  //控制方向，据说目前浏览器还不支持
            lang: "utf-8",
            icon: "http://7xs6lq.com1.z0.glb.clouddn.com/LOGO_48.png",
            body: "点击进行设置"
        });
        notification.onclick = function () {
            chrome.tabs.create({url: "options.html"});
        };
    },
    /**
     * AQI 值对应的描述
     * @param aqi
     * @returns {string}
     */
    aqiText: function (aqi) {
        var airQualityText = '严重';
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
        return airQualityText;
    },
    /**
     * 发送广播到 Option 页面
     * @param message
     * @param callback
     */
    sendMessageToOption: function (message, callback) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            if (!!tabs
                && tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, message, callback);
            }
        });
    },
    /**
     * 浏览器获取经纬度
     * @param callback
     */
    getLocation: function(callback) {
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
                    iConfiguration.latitude = latitude;
                    iConfiguration.longitude = longitude;
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
            iUtils.notification("当前浏览器不支持自动定位");
            console.log('[错误日志] 该用户无法进行定位必须手动输入位置');
        }
    }
};

/**
 * 通信监听
 */
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.cmd) {
            case 'from-option-to-background.refresh':
                iRefresh.all();
                console.log('[普通日志] 来着(option.html) 刷新请求');
                break;
            case 'from-option-to-background.save':
                chrome.storage.sync.set(request.option, function () {
                    iConfiguration.latitude = request.option.latitude;
                    iConfiguration.longitude = request.option.longitude;
                    iConfiguration.appid = request.option.appid;
                    iConfiguration.badge = request.option.badge;
                    iConfiguration.tempUnit = request.option.tempUnit;
                    iConfiguration.lang = request.option.lang;
                    iConfiguration.refreshTime = request.option.refreshTime;
                    iConfiguration.aqicnToken = request.option.aqicnToken;
                    iConfiguration.optionStyle = request.option.optionStyle;
                    iConfiguration.dashboardRight = request.option.dashboardRight;
                    iConfiguration.dashboardLeft = request.option.dashboardLeft;
                    console.log('[普通日志] 来着(option.html) 保存配置请求, 配置信息 %o', iConfiguration);

                    // 重刷新
                    window.clearInterval(iInterval);
                    iRefresh.all();
                    iInterval = window.setInterval(function () {
                        iRefresh.all();
                    }, iConfiguration.refreshTime);
                });
                break;
        }

    }
);

