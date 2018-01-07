/**
 * Created by hocgin on 2017/2/3.
 */
var BG = chrome.extension.getBackgroundPage();
(function ($) {
    console.log('[普通日志] 读取配置信息 %o', BG.iConfiguration);
    console.log('[普通日志] 当前天气数据 %o', BG.iResponse.Weather.RealTime);
    console.log('[普通日志] 当前天气预报数据 %o', BG.iResponse.Weather.Forecast);
    console.log('[普通日志] 当前空气质量数据 %o', BG.iResponse.AirQuality.RealTime);

    var $temp = $('#weather_wrapper .temp');
    var $location = $('#weather_wrapper .location');
    var $conditions = $('#weather_wrapper .conditions');

    var $info = $('#weather_wrapper .info');

    var $sunrise = $('#weather_wrapper .sun .sunrise-text');
    var $sunset = $('#weather_wrapper .sun .sunset-text');
    var $forecast = $('#forecast');
    var $actionRefresh = $('.action-refresh');
    var $aqi = $('#weather_wrapper .currentWeather .aqi');

    var iPopup = {
        init: function () {
            if (!!BG.iResponse.Weather.RealTime) {
                this.realTimeWeather();
            }
            if (!!BG.iResponse.AirQuality.RealTime) {
                this.realTimeAirQuality();
            }
            if (!!BG.iResponse.Weather.Forecast) {
                this.forecastWeather();
            }
            this.dashboard();
            this.other();
        },
        /**
         * 实时天气界面
         */
        realTimeWeather: function () {
            var realTimeWeather = BG.iResponse.Weather.RealTime;
            var tempString = Math.round(realTimeWeather.main.temp) + '°';
            $temp.text(tempString);
            $temp.attr('data-hint', Math.round(realTimeWeather.main.temp_min) + '° ~ ' + Math.round(realTimeWeather.main.temp_max) + '°');

            $location.text(realTimeWeather.name);
            var style = '';
            switch (BG.iConfiguration.optionStyle) {
                case 'style2':
                    style += iTheme.style2(realTimeWeather.weather[0].icon);
                    break;
                default:
                    style += iTheme.style1(realTimeWeather.weather[0].icon);
                    break;
            }
            $conditions.html(style);

            var sunriseTime = new Date(realTimeWeather.sys.sunrise * 1000);
            $sunrise.text(' ' + formatTime(sunriseTime.getHours())
                + ':' + formatTime(sunriseTime.getSeconds()));
            var sunsetTime = new Date(realTimeWeather.sys.sunset * 1000);
            $sunset.text(' ' + formatTime(sunsetTime.getHours())
                + ':' + formatTime(sunsetTime.getSeconds()));
            $conditions.attr('data-hint', realTimeWeather.weather[0].description);
        },
        /**
         * 实时空气质量界面
         */
        realTimeAirQuality: function () {
            var realTimeAirQuality = BG.iResponse.AirQuality.RealTime;
            var aqi = realTimeAirQuality.data.aqi;
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
                "PM2.5: " + realTimeAirQuality.data.iaqi.pm25.v + "μg/m³ "
                + "PM10: " + realTimeAirQuality.data.iaqi.pm10.v + "μg/m³ \n"
                + "AQI 指数: " + aqi
            );
        },
        /**
         * 天气预报界面
         */
        forecastWeather: function () {
            $forecast.html(forecastHtml(BG.iResponse.Weather.Forecast.list));
        },
        /**
         * 仪表盘界面
         */
        dashboard: function () {
            var html = '';
            html += iDashboard.get(BG.iConfiguration.dashboardLeft);
            html += iDashboard.get(BG.iConfiguration.dashboardRight);
            $info.html(html);
        },
        /**
         * 其他内容
         */
        other: function () {
            $actionRefresh.attr('data-hint', new Date(BG.iResponse.UpdateAt).toLocaleString());
        }
    };

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
     * 主题
     * @type {{style1: style1, style2: style2}}
     */
    var iTheme = {
        /**
         * 静态风格
         * @param code
         * @returns {string}
         */
        style1: function (code) {
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
            return "&#x" + icon[code] + ";";
        },
        /**
         * 动态风格
         * @param code
         * @returns {string}
         */
        style2: function(code) {
            var html = '';
            switch (code) {
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
                    html += style1(code);
            }
            return html;
        }
    };

    /**
     * 左右面板内容
     * > 返回 HTML
     * @type {{wind: wind, humidity: humidity, pm25: pm25, pm10: pm10, barometer: barometer, cloudsAll: cloudsAll, visibility: visibility, get: get}}
     */
    var iDashboard = {
        wind: function () {
            var deg = Math.round(BG.iResponse.Weather.RealTime.wind.deg || 0);
            var speed = BG.iResponse.Weather.RealTime.wind.speed || 0;
            return '<span class="wind hint--top" data-hint="风向和风速">\n' +
                '                    <i class="info-icon wi wi-wind towards-' + deg + '-deg"></i>\n' +
                '                    <span>' + speed + 'm/s</span>\n' +
                '                </span>';
        },
        humidity: function () {
            var humidity = BG.iResponse.Weather.RealTime.main.humidity;
            return '<span class="humidity hint--top" data-hint="湿度">\n' +
                '                    <i class="info-icon wi wi-humidity"></i>\n' +
                '                    <span>' + humidity + '%</span>\n' +
                '                </span>';
        },
        pm25: function () {
            var pm25 = BG.iResponse.AirQuality.RealTime.data.iaqi.pm25.v || 0;
            return '<span class="pm25 hint--top" data-hint="PM2.5">\n' +
                '                    <i class="text-icon">PM2.5</i>\n' +
                '                    <span>' + pm25 + 'μg/m³</span>\n' +
                '                </span>';
        },
        pm10: function () {
            var pm10 = BG.iResponse.AirQuality.RealTime.data.iaqi.pm10.v || 0;
            return '<span class="pm10 hint--top" data-hint="PM10">\n' +
                '                    <i class="text-icon">PM10</i>\n' +
                '                    <span>' + pm10 + 'μg/m³</span>\n' +
                '                </span>';
        },
        barometer: function () {
            var pressure = Math.round(BG.iResponse.Weather.RealTime.main.pressure || 0);
            return '<span class="barometer hint--top" data-hint="气压">\n' +
                '                    <i class="info-icon wi wi-barometer"></i>\n' +
                '                    <span>' + pressure + 'hpa</span>\n' +
                '                </span>';
        },
        cloudsAll: function () {
            var cloudsAll = BG.iResponse.Weather.RealTime.clouds.all || 0;
            return '<span class="cloudsAll hint--top" data-hint="云量">\n' +
                '                    <i class="info-icon wi wi-cloud"></i>\n' +
                '                    <span>' + cloudsAll + '%</span>\n' +
                '                </span>';
        },
        visibility: function () {
            var visibility = (BG.iResponse.Weather.RealTime.visibility + '').length - 1;
            return '<span class="visibility hint--top" data-hint="能见度">\n' +
                '                    <i class="info-icon wi wi-windy"></i>\n' +
                '                    <span>10<sup>' + visibility + '</sup>m</span>\n' +
                '                </span>';
        },
        get: function (type) {
            switch (type) {
                case 'wind':
                    return this.wind();
                case 'humidity':
                    return this.humidity();
                case 'pm25':
                    return this.pm25();
                case 'pm10':
                    return this.pm10();
                case 'barometer':
                    return this.barometer();
                case 'cloudsAll':
                    return this.cloudsAll();
                case 'visibility':
                    return this.visibility();
            }
        }
    };

    /**
     * 天气预报内容
     * @param listData
     * @returns {string}
     */
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
                '      <td><i class="i-weather">' + iTheme.style1(data.weather[0].icon) + '</i><span class="float-right">' + description + '</span></td>' +
                // '      <td>' + description + '</td>\n' +
                '      <td class="center">' + data.dt_txt.substr('2017-11-07'.length, "03:00:".length) + '</td>\n' +
                '      <td class="center">' + Math.round(data.main.temp_min) + '°/' + Math.round(data.main.temp_max) + '°</td>\n' +
                '      <td class="center">' + data.main.humidity + '%</td>\n' +
                '      <td class="center">' + data.clouds.all + '%</td>\n' +
                '      <td class="center">' + data.wind.speed.toFixed(1) + '&nbsp;m/s</td>\n' +
                '  </tr>';
        });
        return html;
    }

    /**
     * 换屏监听
     */
    $('.nav li').on('mouseover', function () {
        var $this = $(this);
        var index = $this.data('index');
        $('.weatherCardGroup').animate({'left': (-index * 400) + 'px'});
    });

    /**
     * 刷新监听
     */
    $actionRefresh.on('click', function () {
        var $this = $(this);
        $this.children('.wi-refresh')
            .removeClass('action').addClass('action');
        BG.iRefresh.all();
        $actionRefresh.attr('data-hint', new Date().toLocaleString());
    });

    iPopup.init();
})(jQuery);
