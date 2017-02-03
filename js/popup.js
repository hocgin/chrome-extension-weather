/**
 * Created by hocgin on 2017/2/3.
 */
(function ($) {
    var icon = {
        "01d": "f00d",
        "01n": "f02e",
        "02d": "f002",
        "02n": "f086",
        "03d": "f07d",
        "03n": "f07e",
        "04d": "f013",
        "04n": "f013",
        "09d": "f006",
        "09n": "f029",
        "10d": "f00b",
        "10n": "f02b",
        "11d": "f005",
        "11n": "f025",
        "13d": "f00a",
        "13n": "f067",
        "50d": "f003",
        "50n": "f04a"
    };
    var $temp = $('#weather_wrapper .temp');
    var $location = $('#weather_wrapper .location');
    var $conditions = $('#weather_wrapper .conditions');
    var $rain = $('#weather_wrapper .info .rain-text');
    var $wind = $('#weather_wrapper .info .wind-text');
    var $windDegIcon = $('#weather_wrapper .info .wind-deg-icon');
    var $lon_lat = $('#weather_wrapper .lon-lat');
    var $sunrise = $('#weather_wrapper .sun .sunrise-text');
    var $sunset = $('#weather_wrapper .sun .sunset-text');

    /**
     * 温度
     * 天气图标
     * 位置 坐标+文字
     * 湿度
     * 风力
     */
    chrome.storage.sync.get(['nowWeather'], function (result) {
        if (!!result.nowWeather) {
            var json = JSON.parse(result.nowWeather);
            $temp.text(json.main.temp + "°");
            $lon_lat.text('(' + json.coord.lon + ', ' + json.coord.lat + ')');
            $rain.text(json.main.humidity + "%");
            $location.text(json.name);
            $conditions.html("&#x" + icon[json.weather[0].icon] + ";");
            $windDegIcon.addClass('towards-' + json.wind.deg + '-deg');
            $wind.text(json.wind.speed + "m/s");
            var sunriseTime = new Date(json.sys.sunrise* 1000);
            $sunrise.text(sunriseTime.getHours()
                +':' +sunriseTime.getSeconds());
            var sunsetTime = new Date(json.sys.sunset* 1000);
            $sunset.text(sunsetTime.getHours()
                +':' +sunsetTime.getSeconds());
        }
    });
})(jQuery);
