/**
 * Created by hocgin on 2017/2/3.
 */
(function ($) {
    var LOCAL_STORAGE = {
        Version: 'Version', // 版本信息 0.0.7
        Weather: {
            Current: 'Weather.Current', // JSON 字符串
            Forecast: 'Weather.Forecast' // JSON 字符串
        },
        AirQuality: {
            Current: 'AirQuality.Current' // JSON 字符串
        },
        UpdateAt: 'UpdateAt' // 时间戳Date.parse(new Date())
    };

    var $temp = $('#weather_wrapper .temp');
    var $location = $('#weather_wrapper .location');
    var $conditions = $('#weather_wrapper .conditions');

    var $info = $('#weather_wrapper .info');

    var $sunrise = $('#weather_wrapper .sun .sunrise-text');
    var $sunset = $('#weather_wrapper .sun .sunset-text');
    var $aqi = $('#weather_wrapper .currentWeather .aqi');
    var $forecast = $('#forecast');

    /**
     * 温度
     * 天气图标
     * 位置 坐标+文字
     * 湿度
     * 风力
     */
    chrome.storage.sync.get([
        'dashboardLeft',
        'dashboardRight',
        'optionStyle',
        'tempUnit'
    ], function (result) {
        console.log('[普通日志] 读取 storage ', result);
        var currentWeather = localStorage.getItem(LOCAL_STORAGE.Weather.Current);
        var forecastWeather = localStorage.getItem(LOCAL_STORAGE.Weather.Forecast);
        var currentAirQuality = localStorage.getItem(LOCAL_STORAGE.AirQuality.Current);

        console.log(currentAirQuality);
        console.log(forecastWeather);
        console.log(currentAirQuality);

        if (!!currentWeather &&
            !!forecastWeather &&
            !!currentAirQuality) {
            // 设置 天气相关
            var currentWeatherObject = JSON.parse(currentWeather);

            var tempString = Math.round(currentWeatherObject.main.temp) + '°';
            $temp.text(tempString);
            $temp.attr('data-hint', currentWeatherObject.main.temp_min + '° ~ ' + currentWeatherObject.main.temp_max + '°');

            $location.text(currentWeatherObject.name);
            var style = '';
            switch (result.optionStyle) {
                case 'style2':
                    style += style2(currentWeatherObject.weather[0].icon);
                    break;
                default:
                    style += style1(currentWeatherObject.weather[0].icon);
                    break;
            }
            $conditions.html(style);

            var sunriseTime = new Date(currentWeatherObject.sys.sunrise * 1000);
            $sunrise.text(' ' + formatTime(sunriseTime.getHours())
                + ':' + formatTime(sunriseTime.getSeconds()));
            var sunsetTime = new Date(currentWeatherObject.sys.sunset * 1000);
            $sunset.text(' ' + formatTime(sunsetTime.getHours())
                + ':' + formatTime(sunsetTime.getSeconds()));
            $conditions.attr('data-hint', currentWeatherObject.weather[0].description);


            // 设置 空气质量相关
            var currentAirQualityObject = JSON.parse(currentAirQuality);
            var aqi = currentAirQualityObject.data.aqi;
            var backgroundColor = 'rgba(93, 0, 32, .8)';
            var airQualityText = '严重';
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
            $aqi.css('background-color', backgroundColor);
            $aqi.text(airQualityText);
            $aqi.attr('data-hint',
                "PM2.5: " + currentAirQualityObject.data.iaqi.pm25.v + "μg/m³ "
                + "PM10: " + currentAirQualityObject.data.iaqi.pm10.v + "μg/m³ \n"
                + "AQI 指数: " + aqi
            );

            // 设置 五天的天气预报
            var forecastWeatherObject = JSON.parse(forecastWeather);
            $forecast.html(forecastHtml(forecastWeatherObject.list));

            // 设置 仪表盘
            var html = '';
            html += dashboardBox(result.dashboardLeft, currentWeatherObject, currentAirQualityObject);
            html += dashboardBox(result.dashboardRight, currentWeatherObject, currentAirQualityObject);
            $info.html(html);
        }
    });

    /**
     * 格式化2位数时间
     * @param number
     */
    function formatTime(number) {
        if ((number + "").length < 2) {
            return '0' + number;
        }
        return number;
    }

    /**
     * 动态风格
     * @param iconCode
     * @returns {string}
     */
    function style2(iconCode) {
        var html = '';
        switch (iconCode) {
            case '01d':
            case '01n':
                html += '<div class="a-icon a-sunny">\n' +
                    '                    <div class="a-sun">\n' +
                    '                        <div class="a-rays"></div>\n' +
                    '                    </div>\n' +
                    '                </div>';
                break;
            case '02d':
            case '02n':
            case '04d':
            case '04n':
            case '03d':
            case '03n':
                html += '<div class="a-icon a-cloudy">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                </div>';
                break;
            case '09d':
            case '09n':
                html += '<div class="a-icon a-rainy">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-rain"></div>\n' +
                    '                </div>';
                break;
            case '10d':
            case '10n':
                html += '<div class="a-icon a-sun-shower">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-sun">\n' +
                    '                        <div class="a-rays"></div>\n' +
                    '                    </div>\n' +
                    '                    <div class="a-rain"></div>\n' +
                    '                </div>';
                break;
            case '11d':
            case '11n':
                html += '<div class="a-icon a-thunder-storm">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-lightning">\n' +
                    '                        <div class="a-bolt"></div>\n' +
                    '                        <div class="a-bolt"></div>\n' +
                    '                    </div>\n' +
                    '                </div>';
                break;
            case '13d':
            case '13n':
                html += '<div class="a-icon a-flurries">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-snow">\n' +
                    '                        <div class="a-flake"></div>\n' +
                    '                        <div class="a-flake"></div>\n' +
                    '                    </div>\n' +
                    '                </div>';
                break;
            case '50d':
            case '50n':
                html += '<div class="a-icon">\n' +
                    '                    <div class="a-cloud"></div>\n' +
                    '                    <div class="a-fog">\n' +
                    '                        <div class="a-mist"></div>\n' +
                    '                        <div class="a-mist"></div>\n' +
                    '                    </div>\n' +
                    '                </div>';
                break;
            default:
                html += style1(iconCode);
        }
        return html;
    }

    /**
     * 静态风格
     * @param iconCode
     * @returns {string}
     */
    function style1(iconCode) {
        var icon = {
            // 晴天 [clear sky]
            "01d": "f00d",
            "01n": "f02e",
            // 少云 [few clouds]
            "02d": "f002",
            "02n": "f086",
            // 少云 [scattered clouds]
            "03d": "f07d",
            "03n": "f07e",
            // 多云 [broken clouds]
            "04d": "f013",
            "04n": "f013",
            // 小雨 [shower rain]
            "09d": "f006",
            "09n": "f029",
            // 雨 [rain]
            "10d": "f00b",
            "10n": "f02b",
            // 雷雨 [thunderstorm]
            "11d": "f005",
            "11n": "f025",
            // 雪 [snow]
            "13d": "f00a",
            "13n": "f067",
            // 雾 [mist]
            "50d": "f003",
            "50n": "f04a"
        };
        return "&#x" + icon[iconCode] + ";";
    }

    function dashboardBox(type, currentWeatherObject, currentAirQualityObject) {
        var html = '';
        switch (type) {
            case 'wind':
                html += '<span class="wind hint--top" data-hint="风向和风速">\n' +
                    '                    <i class="info-icon wi wi-wind towards-' + currentWeatherObject.wind.deg + '-deg"></i>\n' +
                    '                    <span>' + currentWeatherObject.wind.speed + 'm/s</span>\n' +
                    '                </span>';
                break;
            case 'humidity':
                html += '<span class="humidity hint--top" data-hint="湿度">\n' +
                    '                    <i class="info-icon wi wi-humidity"></i>\n' +
                    '                    <span>' + currentWeatherObject.main.humidity + '%</span>\n' +
                    '                </span>';
                break;
            case 'pm25':
                html += '<span class="pm25 hint--top" data-hint="PM2.5">\n' +
                    '                    <i class="text-icon">PM2.5</i>\n' +
                    '                    <span>' + currentAirQualityObject.data.iaqi.pm25.v + 'μg/m³</span>\n' +
                    '                </span>';
                break;
            case 'pm10':
                html += '<span class="pm10 hint--top" data-hint="PM10">\n' +
                    '                    <i class="text-icon">PM10</i>\n' +
                    '                    <span>' + currentAirQualityObject.data.iaqi.pm10.v + 'μg/m³</span>\n' +
                    '                </span>';
                break;
            case 'barometer':
                html += '<span class="barometer hint--top" data-hint="气压">\n' +
                    '                    <i class="info-icon wi wi-barometer"></i>\n' +
                    '                    <span>' + currentWeatherObject.main.pressure + 'hpa</span>\n' +
                    '                </span>';
                break;
            case 'cloudsAll':
                html += '<span class="cloudsAll hint--top" data-hint="云量">\n' +
                    '                    <i class="info-icon wi wi-cloud"></i>\n' +
                    '                    <span>' + currentWeatherObject.clouds.all + '%</span>\n' +
                    '                </span>';
                break;
            case 'visibility':
                var count = (currentWeatherObject.visibility + '').length - 1;
                html += '<span class="visibility hint--top" data-hint="能见度">\n' +
                    '                    <i class="info-icon wi wi-windy"></i>\n' +
                    '                    <span>10<sup>' + count + '</sup>m</span>\n' +
                    '                </span>';
                break;
        }
        return html;
    }

    function forecastHtml(listData) {
        var html = '';
        var currentData; // 当前记录的日期
        $.each(listData, function (i, data) {
            var date = data.dt_txt.substr(0, '2017-11-07'.length);
            if (!currentData
                || date !== currentData) {
                html += '<tr>\n' +
                    '            <td class="i-date" colspan="4">\n' +
                    '             ' + date +
                    '            </td>\n' +
                    '        </tr>';
                currentData = date;
            }
            var description = data.weather[0].description;
            var indexOf = description.indexOf('，');
            if (indexOf !== -1) {
                description = description.substr(0, indexOf);
            }

            html += '<tr>\n' +
                '      <td><i class="i-weather">' + style1(data.weather[0].icon) + '</i><span class="float-right">' + description + '</span></td>' +
                // '      <td>' + description + '</td>\n' +
                '      <td>' + data.dt_txt.substr('2017-11-07'.length, "03:00:".length) + '</td>\n' +
                '      <td>' + Math.round(data.main.temp_min) + '°/' + Math.round(data.main.temp_max) + '°</td>\n' +
                '      <td>' + data.main.humidity + '%</td>\n' +
                '      <td>' + data.clouds.all + '%</td>\n' +
                '      <td class="float-right">' + data.wind.speed + ' m/s</td>\n' +
                '  </tr>';
        });
        return html;
    }

    $('.nav li').on('mouseover', function () {
        var $this = $(this);
        var index = $this.data('index');
        $('.weatherCardGroup').animate({'left': (-index * 400) + 'px'});
    });
})(jQuery);
