let interval = 60 * 1000;
let intervalFunc = () => {
    interval = localStorage.getItem('USER_CONFIG_INTERVAL') || interval;
    let uri = localStorage.getItem('REQUEST_WEATHER_URI');
    console.log('[定时器] 发送请求', uri);
    if (!!uri) {
        GET(`http://api.caiyunapp.com${uri}`, (data) => {
            let result = JSON.parse(data || '{}');
            if (result.status === 'ok') {
                updateBadge(result.result);
            }
        });
    }

    window.setTimeout(intervalFunc, interval * 1);
};
intervalFunc();


// JS 原生网络请求
function GET(url, callback) {
    var request = new XMLHttpRequest();
    var timeout = false;
    var timer = setTimeout(function () {
        timeout = true;
        request.abort();
    }, 2000);
    request.open("GET", url);
    request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if (timeout) return;
        clearTimeout(timer);
        if (request.status === 200) {
            callback(request.responseText);
        }
    };
    request.send(null);
}


// 更新角标
function updateBadge(payload) {
    // 更新面板
    let {realtime: {temperature, skycon, aqi}} = payload;
    let badge = localStorage.getItem('USER_CONFIG_BADGE') || 1;

    let text = '';
    switch (badge * 1) {
        // 温度
        case 1: {
            text = `${Formatter.temperature(temperature)}°`;
            break;
        }
        // 天气描述
        case 2: {
            text = `${Formatter.toWeatherText(skycon)}`;
            break;
        }
        // 空气质量
        case 3: {
            text = `${Formatter.toAirText(aqi).text}°`;
            break;
        }
        // AQI 指数
        case 4: {
            text = `${aqi}`;
            break;
        }
        default:
    }

    window.chrome.browserAction.setBadgeText({
        text
    });
    window.chrome.browserAction.setIcon({path: `/static/${skycon}.png`});
}

// -----------
class Formatter {
    static temperature(v) {
        return Math.round(v);
    }

    static latitude(v) {
        return parseFloat(v).toFixed(6);
    }

    static longitude(v) {
        return parseFloat(v).toFixed(6);
    }

    /**
     * AQI 转 文字描述
     * @param aqi
     * @returns {{backgroundColor: string, text: string}}
     */
    static toAirText(aqi) {
        let backgroundColor = 'rgba(93, 0, 32, .8)';
        let airQualityText = '严重';
        if (aqi <= 50) {
            airQualityText = '优';
            backgroundColor = 'rgba(116, 208, 0, .8)';
        } else if (aqi <= 100) {
            airQualityText = '良';
            backgroundColor = 'rgba(244, 211, 32, .8)';
        } else if (aqi <= 150) {
            airQualityText = '轻度';
            backgroundColor = 'rgba(243, 137, 43, .8)';
        } else if (aqi <= 200) {
            airQualityText = '中度';
            backgroundColor = 'rgba(241, 0, 29, .8)';
        } else if (aqi <= 300) {
            airQualityText = '重度';
            backgroundColor = 'rgba(144, 0, 86, .8)';
        }
        return {
            backgroundColor,
            text: airQualityText
        };
    }

    static hpa(pa) {
        return parseFloat(pa / 1000).toFixed(1)
    }

    static cloudrate(v) {
        return v * 100;
    }

    /**
     * 彩云天气码转文字
     */
    static toWeatherText(skycon) {
        switch (skycon) {
            // 晴（白天）
            case 'CLEAR_DAY': {
                return '晴';
            }
            // 晴（夜间）
            case 'CLEAR_NIGHT': {
                return '晴';
            }
            // 多云（白天）
            case 'PARTLY_CLOUDY_DAY': {
                return '多云';
            }
            // 多云（夜间）
            case 'PARTLY_CLOUDY_NIGHT': {
                return '多云';
            }
            // 阴
            case 'CLOUDY': {
                return '阴';
            }
            // 大风
            case 'WIND': {
                return '大风'
            }
            // 雾霾
            case 'HAZE': {
                return '雾霾';
            }
            // 雨
            case 'RAIN': {
                return '雨';
            }
            // 雪
            case 'SNOW': {
                return '雪';
            }
            default: {
                return '未知';
            }
        }
    }
}