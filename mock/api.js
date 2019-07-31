import {success} from './utils/result';

export default {
    'GET /all': (req, res) => {
        let data = [];
        return res.json(success([
                ...data,
            ]),
        );
    },


    'GET /v2/UR8ASaplvIwavDfR/:latlng/weather': (req, res) => {
        return res.json({
            "status": "ok",
            "lang": "zh_CN",
            "result": {
                "hourly": {
                    "status": "ok",
                    "description": "多云转晴，今天晚间22点钟后转多云",
                },
                "realtime": {
                    "status": "ok",
                    "o3": 83,
                    "co": 0.5,
                    "temperature": 26,
                    "pm10": 29,
                    "skycon": "PARTLY_CLOUDY_DAY",
                    "cloudrate": 0.3,
                    "precipitation": {
                        "nearest": {
                            "status": "ok",
                            "distance": 44.25,
                            "intensity": 0.1875
                        },
                        "local": {
                            "status": "ok",
                            "intensity": 0,
                            "datasource": "radar"
                        }
                    },
                    "dswrf": 778.5,
                    "visibility": 9.17,
                    "humidity": 0.65,
                    "so2": 4,
                    "ultraviolet": {
                        "index": 7,
                        "desc": "强"
                    },
                    "pres": 101294.08,
                    "aqi": 29,
                    "pm25": 11,
                    "no2": 16,
                    "apparent_temperature": 23.1,
                    "comfort": {
                        "index": 4,
                        "desc": "温暖"
                    },
                    "wind": {
                        "direction": 222,
                        "speed": 7.2
                    }
                },
                "forecast_keypoint": "最近的降雨带在北边44公里外呢",
                "primary": 0,
                "daily": {},
                "alert": {
                    "status": "ok",
                    "content": []
                },
                "minutely": {},
            },
            "server_time": 1556427355,
            "api_status": "active",
            "tzshift": 28800,
            "api_version": "v2.2",
            "unit": "metric",
            "location": [
                24.487104,
                118.157177
            ]
        });
    },

    'GET /v3/ip': (req, res) => {
        return res.json({
            "status": "1",
            "info": "OK",
            "infocode": "10000",
            "province": "福建省",
            "city": "泉州市",
            "adcode": "350500",
            "rectangle": "118.4247422,24.78335456;118.7353957,25.00952156"
        })
    }
};