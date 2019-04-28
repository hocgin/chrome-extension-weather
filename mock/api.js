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
                    "skycon": [
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": "WIND",
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": "CLOUDY",
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": "RAIN",
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": "CLEAR_DAY",
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": "CLEAR_NIGHT",
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_NIGHT",
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": "PARTLY_CLOUDY_DAY",
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "cloudrate": [
                        {
                            "value": 0.3,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 0.42,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 0.02,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 0.07,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 0.12,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 0.18,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 0.26,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 0.95,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 0.95,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 0.19,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 0.17,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 0.27,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 0.27,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 0.21,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 0.18,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 0.15,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 0.22,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 0.16,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 0.13,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 0.17,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 0.95,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 0.04,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 0.07,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 0.06,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 0.22,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 0.42,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 0.94,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 0.96,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 0.94,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 0.29,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 0.16,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 0.11,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 0.08,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 0.08,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 0.4,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 0.51,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 0.62,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 0.64,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 0.56,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 0.34,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 0.51,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 0.39,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 0.25,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 0.01,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 0.05,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 0.11,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 0.08,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 0.07,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 0.06,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 0.94,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 0.94,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 0.94,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 0.31,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 0.27,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 0.27,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 0.27,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 0.41,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 0.41,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 0.41,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 0.6,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 0.6,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 0.6,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 0.37,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 0.37,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 0.37,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 0.98,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 0.98,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 0.98,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 1,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 0.43,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 0.23,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 0.2,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 0.99,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 0.3,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 0.09,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 0.5,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "aqi": [
                        {
                            "value": 29,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 41,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 43,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 41,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 40,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 40,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 37,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 32,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 50,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 51,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 50,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 41,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 42,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 34,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 43,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 33,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 41,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 44,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 43,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 41,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 40,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 40,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 39,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "dswrf": [
                        {
                            "value": 778.5265236736,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 824.1511309389,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 840.4399520246,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 793.71292,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 703.71292,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 600.1915272653,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 490.1915272653,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 400,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 332.0383054531,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 28.628708,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 84.5904025469,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 579.8084727347,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 679.8084727347,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 750,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 809.5388185469,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 844.5579712735,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 856.9616945469,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 793.71292,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 700.1915272653,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 600.1915272653,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 493.71292,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 400,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 332.1330287265,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 23.4361545469,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 77.2244483674,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 590,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 680.3243127347,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 760.3243127347,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 816.4786072653,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 849.7535992735,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 854.6214000082,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 790,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 700,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 599.8084727347,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 480,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 389.8084727347,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 321.0972938204,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 5.206336,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 11.1381374612,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 114.0906109389,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 155.3844655514,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 124.766909143,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 126.3731709389,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 153.5963302697,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 178.5942786371,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 102.8987963264,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 78.7234145306,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 79.6223090611,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 70.9783017958,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 58.2126145306,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 50.554045804,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 86.4285251103,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 496.2875854694,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 529.7298945306,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 536.5969199181,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 532.7120795343,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 507.7102697139,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 475.8432613629,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 324.221429143,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 270.5342146125,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 240.1254546125,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 215.6794618778,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 178.9352836736,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 146.3070796736,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 33.577124,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 92.5579712735,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 221.1487607839,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 296.9203295186,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 339.4541964083,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 228.1361600654,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 251.3923974858,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 256.6819058532,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 658.2103513964,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 587.9335535841,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 521.2889964902,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 407.0895831615,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 342.3684151615,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 293.3763924329,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": -18.06490637,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 6.1019245372,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 52.319204,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 424.1792371103,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 499.950805845,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 542.4846727347,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 701.8091602205,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 724.9309513226,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 730.45756369,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 743.0449039672,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 672.768106155,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 606.1235490611,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 449.9537038061,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 385.2325358061,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 336.2405130775,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": -32.9496827374,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": -8.7828835013,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 37.4344276326,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": -13.4506828897,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 62.320885845,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 104.8547527347,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 49.6228763387,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 72.8438423612,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 78.1942865469,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 303.3469075589,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 233.0701097467,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 166.4255526528,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 218.8419108703,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 154.1219399157,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 105.1632912325,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 14.2565213976,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 38.4231650257,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 84.6452901796,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 444.3597136005,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 520.1312823352,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 562.665149225,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 720.1028035432,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 743.2245946452,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 748.7512070126,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 591.4467549061,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 521.1699570939,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 454.5254,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 350.059906002,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 285.338738002,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 236.3467152735,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": -59.8481158028,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": -35.6856238479,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 10.5362938286,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": -37.3657156245,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 38.4058531103,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 80.93972,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 98.6082029496,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 121.8448257562,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 127.1912160328,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 373.3182640492,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 303.0414662369,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 236.396909143,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 247.8428226654,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 183.1176007562,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 134.1601491185,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": -42.1332874639,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": -17.9664882278,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 28.2508229061,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 750.0518272776,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 825.8233960123,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 868.357262902,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 903.138434706,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 926.4362954449,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 931.4886998122,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 851.3001538081,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 781.0233559959,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 714.378798902,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 640.503382902,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 575.782214902,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 526.7854039918,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": -55.607327811,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": -31.4453425948,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 14.7770818204,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 712.4358723633,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 788.207441098,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 830.7413079877,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 865.5224797917,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 888.8203405306,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 893.8727448979,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 813.6841988938,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 743.4074010816,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 676.7628439877,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 602.8874279877,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 538.1662599877,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 489.1694490775,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": -23.38411037,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 0.781847085,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 47,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 829.2339920123,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 905.005560747,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 947.5394276367,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 982.3205994408,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 1005.6184601796,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 1010.6708645469,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 930.4823185428,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 860.2055207306,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 793.5609636367,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 719.6855476367,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 654.9643796367,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 605.9675687265,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 183.371292,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": -228.2544053665,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": -228.2544053665,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": -228.2544053665,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": -228.2544053665,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": -205.8107660032,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 423.6635470898,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 813.0019101919,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 888.7734789266,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 931.3073458163,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 966.0885176204,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 989.3863783592,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 994.4387827265,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 914.2502367224,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 843.9734389102,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 777.3288818163,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 703.4534658163,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 638.7322978163,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 589.7354869061,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": -38.3844096314,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": -14.2172592646,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 32,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 678.2040989266,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 753.9756676613,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 796.509534551,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 831.2907063551,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 854.5885670939,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 859.6409714612,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 779.4524254572,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 709.1756276449,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 642.531070551,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 568.655654551,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 503.9296983694,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 454.9376756408,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 1.7815559342,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 48,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 830.3828698327,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 906.1544385674,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 948.6883054572,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 983.4694772612,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 1006.767338,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 1011.8197423674,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 931.6311963633,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 861.354398551,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 794.7098414572,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 720.8344254572,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 656.1132574572,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 607.1164465469,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": -22.38411037,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 1.7815559342,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 48,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 105.3909956047,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 163.0743165259,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 210.1697365411,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "visibility": [
                        {
                            "value": 9.17,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 8.06,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 7.22,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 6.77,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 6.63,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 6.01,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 5.39,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 4.84,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 4.55,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 4.36,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 4.29,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 4.13,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 3.98,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 3.98,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 3.93,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 3.88,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 3.8,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 3.8,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 3.67,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 4.18,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 4.82,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 5.97,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 7.31,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 8.02,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 7.85,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 7.19,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 6.43,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 5.65,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 4.95,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 4.38,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 4.04,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 3.79,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 3.75,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 3.62,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 3.53,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 3.42,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 3.42,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 3.42,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 3.42,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 3.39,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 3.45,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 3.45,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 3.65,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 4.2,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 6.81,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 8.46,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 9.74,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 9.5,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 8.45,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 7.7,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 6.74,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 5.66,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 4.85,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 4.83,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 4.68,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 4.88,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 4.52,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 4.75,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 4.67,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 5.17,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 5.05,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 4.83,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 4.03,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 3.82,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 3.83,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 3.77,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 3.89,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 4.32,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 4.53,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 4.8,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 5.1,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 5.25,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 5.51,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 5.84,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 6.41,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 6.69,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 7.28,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 8.43,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 9.17,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 9.72,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 9.66,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 9.66,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 10.66,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 10.08,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 10.08,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 10.08,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 4.78,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 4.78,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 4.78,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 4.61,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 4.61,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 4.61,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 6.32,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 6.32,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 6.32,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 5.58,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 5.58,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 5.58,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 5.3,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 5.3,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 5.3,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 5.96,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 7.59,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 7.59,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 7.59,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 8.97,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 8.97,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 8.97,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 8.73,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 8.73,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 8.73,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 5.91,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 5.91,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 5.91,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 4.2,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 4.2,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 4.2,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 3.64,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 3.64,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 3.64,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 3.49,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 3.49,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 3.49,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 3.34,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 3.34,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 3.34,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 3.25,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 3.25,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 3.25,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 3.29,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 3.29,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 3.29,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 3.63,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 3.63,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 3.63,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 4.21,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 4.21,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 4.21,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 3.83,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 3.83,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 3.83,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 3.77,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 3.77,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 3.77,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 4,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 4,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 4,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 4.16,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 4.16,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 4.16,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 4.31,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 4.31,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 4.31,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 3.6,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 4.39,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 6.8,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 5.09,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 10.69,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 4.45,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 3.9,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 3.91,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 5.31,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 8.62,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 9.18,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "humidity": [
                        {
                            "value": 0.65,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 0.75,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 0.75,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 0.74,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 0.75,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 0.92,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 0.74,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 0.75,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 0.73,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 0.69,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 0.63,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 0.6,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 0.59,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 0.58,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 0.56,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 0.56,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 0.56,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 0.55,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 0.54,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 0.54,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 0.53,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 0.52,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 0.51,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 0.54,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 0.54,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 0.54,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 0.58,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 0.58,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 0.58,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 0.57,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 0.61,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 0.63,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 0.63,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 0.63,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 0.64,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 0.64,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 0.64,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 0.65,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 0.66,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 0.7,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 0.71,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 0.82,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 0.83,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 0.77,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 0.79,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 0.74,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 0.74,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 0.74,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 0.78,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 0.91,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 0.92,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 0.92,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 0.92,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 0.93,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 0.89,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 0.88,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 0.86,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 0.85,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 0.9,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 0.76,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 0.68,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 0.81,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 0.67,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 0.49,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 0.49,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 0.49,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 0.49,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 0.49,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 0.84,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 0.87,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 0.8,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 0.72,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "pres": [
                        {
                            "value": 101294.0777018778,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 101214.0777018778,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 101134.0777018778,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 101054.0777018778,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 101049.9509818778,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 100974.0777018778,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 100974.0777018778,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 100974.0777018778,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 101049.9509818777,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 101082.2488437555,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 101134.0777018778,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 101162.2488437555,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 101162.2488437555,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 101129.9509818778,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 101082.2488437555,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 101052.5454837555,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 101049.9509818778,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 101049.9509818778,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 101052.5454837555,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 101082.2488437555,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 101129.9509818778,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 101132.5454837555,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 101132.5454837555,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 101132.5454837555,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 101054.0777018778,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 100974.0777018778,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 100894.0777018778,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 100812.5454837555,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 100732.5454837555,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 100654.0777018778,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 100682.2488437555,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 100729.9509818778,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 100762.2488437555,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 100842.2488437555,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 100814.0777018778,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 100762.2488437555,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 100682.2488437555,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 100649.9509818778,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 100602.2488437555,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 100602.2488437555,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 100652.5454837555,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 100682.2488437555,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 100732.5454837555,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 100734.0777018778,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 100734.0777018778,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 100732.5454837555,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 100652.5454837555,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 100544.3743418777,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 100414.0777018778,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 100332.5454837555,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 100254.0777018778,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 100254.0777018778,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 100332.5454837555,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 100362.2488437555,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 100572.5454837555,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 100414.0777018778,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 100414.0777018778,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 100414.0777018778,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 100489.9509818778,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 100569.9509818778,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 100649.9509818778,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 100780.2476218778,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 100889.9509818777,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 100840.7166256333,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 100838.1221237555,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 100922.2488437555,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 101002.2488437555,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 101082.2488437555,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 101162.2488437555,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 101209.9509818778,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 101209.9509818778,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 101162.2488437555,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 101129.9509818778,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 101049.9509818778,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 100998.1221237555,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 101002.2488437555,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 101078.1221237555,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 101129.9509818777,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 101209.9509818777,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 101320.7166256333,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 101322.2488437555,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 101322.2488437555,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 101209.9509818778,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 101134.0777018778,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 101129.9509818778,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 101082.2488437555,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 101129.9509818778,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 101209.9509818778,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 101369.9509818778,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 101449.9509818778,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 101478.1221237555,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 101449.9509818777,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 101369.9509818778,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 101318.1221237555,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 101242.2488437555,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 101242.2488437555,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 101242.2488437555,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 101369.9509818778,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 101449.9509818778,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 101529.9509818778,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 101532.5454837555,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 101532.5454837555,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 101532.5454837555,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 101562.2488437555,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 101478.1221237555,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 101478.1221237555,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 101478.1221237555,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 101479.6543418778,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 101479.6543418778,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 101479.6543418778,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 101642.2488437555,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 101372.5454837555,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 101289.9509818777,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 101402.2488437555,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 101449.9509818778,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 101449.9509818778,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 101449.9509818778,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 101289.9509818778,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 101289.9509818777,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 101238.1221237555,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 101238.1221237555,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 101238.1221237555,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 101322.2488437555,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 101322.2488437555,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 101322.2488437555,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 101369.9509818778,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 101369.9509818777,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 101369.9509818778,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 101160.7166256333,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 101160.7166256333,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 101160.7166256333,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 101002.2488437555,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 101002.2488437555,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 101002.2488437555,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 101080.7166256333,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 100809.9509818777,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 100809.9509818778,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 100889.9509818778,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 100602.2488437555,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 100602.2488437555,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 100602.2488437555,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 100494.0777018778,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 100494.0777018778,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 100494.0777018778,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 100572.5454837555,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 100572.5454837556,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 100572.5454837555,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 100522.2488437555,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 100282.2488437555,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 100282.2488437555,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 100282.2488437555,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 100169.9509818778,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 100169.9509818778,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 100169.9509818777,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 100089.9509818778,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 100089.9509818778,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 100089.9509818778,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 100012.5454837555,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 100012.5454837555,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 100012.5454837555,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 100202.2488437555,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 100329.9509818778,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 100329.9509818778,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 100329.9509818778,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 100249.9509818777,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 100249.9509818778,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 100249.9509818778,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 100252.5454837555,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 100252.5454837555,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 100252.5454837555,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 100442.2488437555,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 100179.73664,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 100423.86336,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 100932.0345018777,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 100932.0345018778,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 100932.0345018777,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 100932.0345018778,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 100932.0345018777,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 100932.0345018777,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 100852.0345018777,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 100852.0345018778,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 100852.0345018778,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 100852.0345018778,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 100852.0345018778,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 100263.86336,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 100372.0345018777,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 100372.0345018778,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 100292.0345018777,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 100292.0345018777,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 100292.0345018778,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 100532.0345018777,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 100532.0345018777,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 100532.0345018777,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 100532.0345018777,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 100532.0345018778,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 100583.86336,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 100741.2688581223,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 100741.2688581222,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 100741.2665735886,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 100741.2597199876,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 100741.2460127855,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "pm25": [
                        {
                            "value": 11,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 5,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 5,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 5,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 4,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 5,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 6,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 8,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 36,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 35,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 19,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 10,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 9,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 7,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 11,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 12,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 13,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 14,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 15,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 17,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 31,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 30,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 29,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "precipitation": [
                        {
                            "value": 0,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 0.319,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 0.5685,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 0.6415,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 0.1028,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 0.0967,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 0.0773,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 0.0652,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 0.1646,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 0.1819,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 0.7524,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 0.9467,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 1.0597,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 1.1095,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 1.2646,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 1.4041,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 2.1331,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 2.2979,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 1.7309,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 1.4119,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 1.121,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 0.9489,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 0.2541,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 0.1925,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 0.1179,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 0.0928,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 0.091,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 0.0765,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 1.7917,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 1.7917,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 1.7917,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 1.6825,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 1.6825,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 1.6825,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 0.0653,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 0.0653,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 0.0653,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 0.1963,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 0.1963,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 0.1963,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 1.9109,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 1.9109,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 1.9109,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 1.1774,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 1.1774,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 1.1774,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 0.178,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 0.178,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 0.178,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 0.3739,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 0.3739,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 0.3739,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 1.7275,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 1.7275,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 1.7275,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 1.0224,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 1.0224,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 1.0224,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 0.0471,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 0.0471,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 0.0471,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 0.36,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 0.36,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 0.36,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 0.4552,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 0.4552,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 0.4552,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 0.2529,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 0.2529,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 0.2529,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 0.2105,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 0.4994,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 0,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "wind": [
                        {
                            "direction": 222,
                            "speed": 7.2,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "direction": 154.71,
                            "speed": 15.21,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "direction": 153.88,
                            "speed": 15.8,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "direction": 154.89,
                            "speed": 15.68,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "direction": 155.39,
                            "speed": 15.07,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "direction": 155.4,
                            "speed": 13.67,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "direction": 157.03,
                            "speed": 11.97,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "direction": 159.14,
                            "speed": 10.37,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "direction": 166.61,
                            "speed": 8.1,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "direction": 168.1,
                            "speed": 6.14,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "direction": 172.83,
                            "speed": 5.56,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "direction": 195.75,
                            "speed": 4.01,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "direction": 203.62,
                            "speed": 2.69,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "direction": 187.75,
                            "speed": 2.86,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "direction": 195.78,
                            "speed": 3.17,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "direction": 212.79,
                            "speed": 3.08,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "direction": 198.69,
                            "speed": 2.83,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "direction": 188.76,
                            "speed": 2.7,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "direction": 173.71,
                            "speed": 2.73,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "direction": 154.91,
                            "speed": 3.08,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "direction": 149.68,
                            "speed": 3.04,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "direction": 165.87,
                            "speed": 3.49,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "direction": 175.59,
                            "speed": 6.11,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "direction": 174.55,
                            "speed": 9.25,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "direction": 169.61,
                            "speed": 12.85,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "direction": 165.89,
                            "speed": 16.31,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "direction": 165.49,
                            "speed": 18.08,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "direction": 164.48,
                            "speed": 19.85,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "direction": 163.57,
                            "speed": 20.46,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "direction": 163.64,
                            "speed": 19.85,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "direction": 166.81,
                            "speed": 17.27,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "direction": 168.55,
                            "speed": 13.77,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "direction": 168.91,
                            "speed": 11.01,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "direction": 173.58,
                            "speed": 9.63,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "direction": 181.19,
                            "speed": 9.03,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "direction": 189.44,
                            "speed": 8.83,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "direction": 198.67,
                            "speed": 8.73,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "direction": 206.63,
                            "speed": 8.43,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "direction": 211.21,
                            "speed": 8.23,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "direction": 216.95,
                            "speed": 8.51,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "direction": 213.41,
                            "speed": 8.7,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "direction": 212.81,
                            "speed": 9.03,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "direction": 215.09,
                            "speed": 9.05,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "direction": 214.38,
                            "speed": 9.79,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "direction": 214.27,
                            "speed": 12.07,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "direction": 210.27,
                            "speed": 14.12,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "direction": 205.17,
                            "speed": 16.21,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "direction": 199.63,
                            "speed": 17.77,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "direction": 192.28,
                            "speed": 19.6,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "direction": 187.24,
                            "speed": 22.18,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "direction": 186.13,
                            "speed": 24.44,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "direction": 186.4,
                            "speed": 25.76,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "direction": 186.91,
                            "speed": 27.02,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "direction": 191.09,
                            "speed": 27.09,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "direction": 199.43,
                            "speed": 23.49,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "direction": 203.86,
                            "speed": 19.37,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "direction": 203.69,
                            "speed": 17.46,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "direction": 206.91,
                            "speed": 18.85,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "direction": 211.03,
                            "speed": 17.84,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "direction": 217.57,
                            "speed": 17.41,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "direction": 224.42,
                            "speed": 17.04,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "direction": 237.91,
                            "speed": 18.58,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "direction": 242.8,
                            "speed": 15.45,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "direction": 249.59,
                            "speed": 13.03,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "direction": 246.63,
                            "speed": 9.37,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "direction": 237.58,
                            "speed": 5.88,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "direction": 217.15,
                            "speed": 3.01,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "direction": 127.01,
                            "speed": 1.77,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "direction": 89.63,
                            "speed": 6.63,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "direction": 73.61,
                            "speed": 21.61,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "direction": 68.25,
                            "speed": 40.32,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "direction": 62.95,
                            "speed": 37.34,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "direction": 57.61,
                            "speed": 36.9,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "direction": 56.14,
                            "speed": 38.75,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "direction": 52.68,
                            "speed": 38.13,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "direction": 51.51,
                            "speed": 36.84,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "direction": 52.43,
                            "speed": 36.11,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "direction": 51.32,
                            "speed": 36.19,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "direction": 51.02,
                            "speed": 35.03,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "direction": 50.58,
                            "speed": 32.89,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "direction": 47.06,
                            "speed": 31.31,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "direction": 45.06,
                            "speed": 29.41,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "direction": 43.42,
                            "speed": 28.32,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "direction": 41.32,
                            "speed": 26.99,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "direction": 38.94,
                            "speed": 25.61,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "direction": 36.54,
                            "speed": 23.88,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "direction": 37.51,
                            "speed": 23.21,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "direction": 38.46,
                            "speed": 24.67,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "direction": 33.4,
                            "speed": 22.61,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "direction": 30.93,
                            "speed": 20.29,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "direction": 35.96,
                            "speed": 20.59,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "direction": 41.62,
                            "speed": 23.73,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "direction": 44.99,
                            "speed": 27.17,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "direction": 46.75,
                            "speed": 28.64,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "direction": 50.23,
                            "speed": 27.87,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "direction": 55.83,
                            "speed": 26.67,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "direction": 62.08,
                            "speed": 27.25,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "direction": 65.95,
                            "speed": 28.64,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "direction": 67.9,
                            "speed": 29.79,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "direction": 67.3,
                            "speed": 31.96,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "direction": 64.53,
                            "speed": 34.87,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "direction": 60.89,
                            "speed": 36.69,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "direction": 57.8,
                            "speed": 36.5,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "direction": 56.73,
                            "speed": 36.23,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "direction": 53.79,
                            "speed": 35.31,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "direction": 48.64,
                            "speed": 34.58,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "direction": 44.69,
                            "speed": 33.28,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "direction": 42.35,
                            "speed": 31.49,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "direction": 41.02,
                            "speed": 29.83,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "direction": 39.65,
                            "speed": 29.07,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "direction": 37.82,
                            "speed": 28.6,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "direction": 36.78,
                            "speed": 27.89,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "direction": 36.11,
                            "speed": 27.23,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "direction": 37.21,
                            "speed": 26.74,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "direction": 39.84,
                            "speed": 26.72,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "direction": 40.41,
                            "speed": 26.75,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "direction": 41.75,
                            "speed": 28,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "direction": 46.47,
                            "speed": 29.03,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "direction": 46.47,
                            "speed": 29.03,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "direction": 46.47,
                            "speed": 29.03,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "direction": 49.07,
                            "speed": 32.47,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "direction": 49.07,
                            "speed": 32.47,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "direction": 49.07,
                            "speed": 32.47,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "direction": 51.86,
                            "speed": 33.92,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "direction": 51.86,
                            "speed": 33.92,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "direction": 51.86,
                            "speed": 33.92,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "direction": 51.28,
                            "speed": 31.85,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "direction": 51.28,
                            "speed": 31.85,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "direction": 51.28,
                            "speed": 31.85,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "direction": 42.99,
                            "speed": 29.94,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "direction": 42.99,
                            "speed": 29.94,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "direction": 42.99,
                            "speed": 29.94,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "direction": 28.51,
                            "speed": 27.48,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "direction": 28.51,
                            "speed": 27.48,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "direction": 28.51,
                            "speed": 27.48,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "direction": 29.22,
                            "speed": 26.95,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "direction": 29.22,
                            "speed": 26.95,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "direction": 29.22,
                            "speed": 26.95,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "direction": 30.01,
                            "speed": 25.76,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "direction": 30.01,
                            "speed": 25.76,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "direction": 30.01,
                            "speed": 25.76,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "direction": 39.45,
                            "speed": 27.26,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "direction": 39.45,
                            "speed": 27.26,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "direction": 39.45,
                            "speed": 27.26,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "direction": 54.38,
                            "speed": 26.99,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "direction": 54.38,
                            "speed": 26.99,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "direction": 54.38,
                            "speed": 26.99,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "direction": 52.35,
                            "speed": 27.84,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "direction": 52.35,
                            "speed": 27.84,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "direction": 52.35,
                            "speed": 27.84,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "direction": 42.6,
                            "speed": 28.43,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "direction": 42.6,
                            "speed": 28.43,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "direction": 42.6,
                            "speed": 28.43,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "direction": 34.46,
                            "speed": 22.57,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "direction": 34.46,
                            "speed": 22.57,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "direction": 34.46,
                            "speed": 22.57,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "direction": 29.05,
                            "speed": 19.31,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "direction": 29.05,
                            "speed": 19.31,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "direction": 29.05,
                            "speed": 19.31,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "direction": 30.55,
                            "speed": 16.95,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "direction": 30.55,
                            "speed": 16.95,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "direction": 30.55,
                            "speed": 16.95,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "direction": 18.03,
                            "speed": 16.96,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "direction": 18.03,
                            "speed": 16.96,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "direction": 18.03,
                            "speed": 16.96,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "direction": 2.47,
                            "speed": 11,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "direction": 2.47,
                            "speed": 11,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "direction": 2.47,
                            "speed": 11,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "direction": 9.23,
                            "speed": 9.21,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "direction": 9.23,
                            "speed": 9.21,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "direction": 9.23,
                            "speed": 9.21,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "direction": 39.25,
                            "speed": 8,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "direction": 39.25,
                            "speed": 8,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "direction": 39.25,
                            "speed": 8,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "direction": 51.6,
                            "speed": 10.55,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "direction": 51.6,
                            "speed": 10.55,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "direction": 51.6,
                            "speed": 10.55,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "direction": 36.71,
                            "speed": 12.96,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "direction": 36.71,
                            "speed": 12.96,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "direction": 36.71,
                            "speed": 12.96,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "direction": 39.23,
                            "speed": 10.39,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "direction": 57.52,
                            "speed": 10.76,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "direction": 57.52,
                            "speed": 10.76,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "direction": 57.52,
                            "speed": 10.76,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "direction": 78.88,
                            "speed": 12.09,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "direction": 78.88,
                            "speed": 12.09,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "direction": 78.88,
                            "speed": 12.09,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "direction": 120.75,
                            "speed": 13.62,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "direction": 120.75,
                            "speed": 13.62,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "direction": 120.75,
                            "speed": 13.62,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "direction": 120.17,
                            "speed": 12.66,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "direction": 120.17,
                            "speed": 12.66,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "direction": 120.17,
                            "speed": 12.66,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "direction": 93.1,
                            "speed": 13.5,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "direction": 93.1,
                            "speed": 13.5,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "direction": 93.1,
                            "speed": 13.5,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "direction": 97.58,
                            "speed": 12.66,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "direction": 97.58,
                            "speed": 12.66,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "direction": 97.58,
                            "speed": 12.66,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "direction": 129.69,
                            "speed": 10.49,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "direction": 129.69,
                            "speed": 10.49,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "direction": 129.69,
                            "speed": 10.49,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "direction": 191.7,
                            "speed": 13.95,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "direction": 191.7,
                            "speed": 13.95,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "direction": 191.7,
                            "speed": 13.95,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "direction": 208.79,
                            "speed": 13.95,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "direction": 208.79,
                            "speed": 13.95,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "direction": 208.79,
                            "speed": 13.95,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "direction": 276.74,
                            "speed": 3.65,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "direction": 276.74,
                            "speed": 3.65,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "direction": 276.74,
                            "speed": 3.65,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "direction": 286.12,
                            "speed": 6.39,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "direction": 286.12,
                            "speed": 6.39,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "direction": 286.12,
                            "speed": 6.39,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "direction": 316.03,
                            "speed": 6.09,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "direction": 316.03,
                            "speed": 6.09,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "direction": 316.03,
                            "speed": 6.09,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "direction": 283.84,
                            "speed": 4.63,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "direction": 283.84,
                            "speed": 4.63,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "direction": 283.84,
                            "speed": 4.63,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "direction": 294.56,
                            "speed": 6.39,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "direction": 294.56,
                            "speed": 6.39,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "direction": 294.56,
                            "speed": 6.39,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "direction": 320.01,
                            "speed": 8.97,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "direction": 320.01,
                            "speed": 8.97,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "direction": 320.01,
                            "speed": 8.97,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "direction": 331.27,
                            "speed": 7.6,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "direction": 331.27,
                            "speed": 7.6,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "direction": 331.27,
                            "speed": 7.6,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "direction": 343.98,
                            "speed": 3.73,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "direction": 343.98,
                            "speed": 3.73,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "direction": 343.98,
                            "speed": 3.73,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "direction": 70.96,
                            "speed": 15.92,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "direction": 44.43,
                            "speed": 19.95,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "direction": 51.25,
                            "speed": 21.68,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "direction": 44.81,
                            "speed": 14.12,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "direction": 93.09,
                            "speed": 9.58,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "direction": 13.73,
                            "speed": 16.44,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "direction": 70.19,
                            "speed": 20.81,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "direction": 70.19,
                            "speed": 20.81,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "direction": 70.19,
                            "speed": 20.81,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "direction": 70.19,
                            "speed": 20.81,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "direction": 70.19,
                            "speed": 20.81,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "direction": 156.38,
                            "speed": 7.51,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "direction": 106.81,
                            "speed": 3.18,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "direction": 213.42,
                            "speed": 8.87,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "direction": 64.1,
                            "speed": 26.24,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "direction": 52.47,
                            "speed": 21.55,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "direction": 41.83,
                            "speed": 15.04,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "direction": 41.84,
                            "speed": 15.04,
                            "datetime": "2019-05-14 11:00"
                        }
                    ],
                    "temperature": [
                        {
                            "value": 26,
                            "datetime": "2019-04-28 12:00"
                        },
                        {
                            "value": 26.67,
                            "datetime": "2019-04-28 13:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-28 14:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-04-28 15:00"
                        },
                        {
                            "value": 26.67,
                            "datetime": "2019-04-28 16:00"
                        },
                        {
                            "value": 24.33,
                            "datetime": "2019-04-28 17:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-28 18:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-28 19:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-28 20:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-28 21:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-04-28 22:00"
                        },
                        {
                            "value": 23.11,
                            "datetime": "2019-04-28 23:00"
                        },
                        {
                            "value": 22.22,
                            "datetime": "2019-04-29 00:00"
                        },
                        {
                            "value": 22.33,
                            "datetime": "2019-04-29 01:00"
                        },
                        {
                            "value": 22.44,
                            "datetime": "2019-04-29 02:00"
                        },
                        {
                            "value": 22.72,
                            "datetime": "2019-04-29 03:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-04-29 04:00"
                        },
                        {
                            "value": 22.06,
                            "datetime": "2019-04-29 05:00"
                        },
                        {
                            "value": 24.11,
                            "datetime": "2019-04-29 06:00"
                        },
                        {
                            "value": 26.17,
                            "datetime": "2019-04-29 07:00"
                        },
                        {
                            "value": 28.22,
                            "datetime": "2019-04-29 08:00"
                        },
                        {
                            "value": 27.94,
                            "datetime": "2019-04-29 09:00"
                        },
                        {
                            "value": 27.67,
                            "datetime": "2019-04-29 10:00"
                        },
                        {
                            "value": 27.5,
                            "datetime": "2019-04-29 11:00"
                        },
                        {
                            "value": 27.01,
                            "datetime": "2019-04-29 12:00"
                        },
                        {
                            "value": 27.02,
                            "datetime": "2019-04-29 13:00"
                        },
                        {
                            "value": 26.94,
                            "datetime": "2019-04-29 14:00"
                        },
                        {
                            "value": 26.77,
                            "datetime": "2019-04-29 15:00"
                        },
                        {
                            "value": 26.19,
                            "datetime": "2019-04-29 16:00"
                        },
                        {
                            "value": 25.92,
                            "datetime": "2019-04-29 17:00"
                        },
                        {
                            "value": 25.4,
                            "datetime": "2019-04-29 18:00"
                        },
                        {
                            "value": 24.89,
                            "datetime": "2019-04-29 19:00"
                        },
                        {
                            "value": 24.8,
                            "datetime": "2019-04-29 20:00"
                        },
                        {
                            "value": 24.71,
                            "datetime": "2019-04-29 21:00"
                        },
                        {
                            "value": 24.71,
                            "datetime": "2019-04-29 22:00"
                        },
                        {
                            "value": 24.38,
                            "datetime": "2019-04-29 23:00"
                        },
                        {
                            "value": 23.76,
                            "datetime": "2019-04-30 00:00"
                        },
                        {
                            "value": 23.2,
                            "datetime": "2019-04-30 01:00"
                        },
                        {
                            "value": 22.73,
                            "datetime": "2019-04-30 02:00"
                        },
                        {
                            "value": 22.18,
                            "datetime": "2019-04-30 03:00"
                        },
                        {
                            "value": 21.62,
                            "datetime": "2019-04-30 04:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-04-30 05:00"
                        },
                        {
                            "value": 21.46,
                            "datetime": "2019-04-30 06:00"
                        },
                        {
                            "value": 22.03,
                            "datetime": "2019-04-30 07:00"
                        },
                        {
                            "value": 23.29,
                            "datetime": "2019-04-30 08:00"
                        },
                        {
                            "value": 24.42,
                            "datetime": "2019-04-30 09:00"
                        },
                        {
                            "value": 25.85,
                            "datetime": "2019-04-30 10:00"
                        },
                        {
                            "value": 26.97,
                            "datetime": "2019-04-30 11:00"
                        },
                        {
                            "value": 27.63,
                            "datetime": "2019-04-30 12:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-04-30 13:00"
                        },
                        {
                            "value": 27.7,
                            "datetime": "2019-04-30 14:00"
                        },
                        {
                            "value": 27.66,
                            "datetime": "2019-04-30 15:00"
                        },
                        {
                            "value": 27.36,
                            "datetime": "2019-04-30 16:00"
                        },
                        {
                            "value": 27.04,
                            "datetime": "2019-04-30 17:00"
                        },
                        {
                            "value": 26.45,
                            "datetime": "2019-04-30 18:00"
                        },
                        {
                            "value": 26.14,
                            "datetime": "2019-04-30 19:00"
                        },
                        {
                            "value": 25.85,
                            "datetime": "2019-04-30 20:00"
                        },
                        {
                            "value": 25.81,
                            "datetime": "2019-04-30 21:00"
                        },
                        {
                            "value": 25.35,
                            "datetime": "2019-04-30 22:00"
                        },
                        {
                            "value": 25.26,
                            "datetime": "2019-04-30 23:00"
                        },
                        {
                            "value": 25.05,
                            "datetime": "2019-05-01 00:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-01 01:00"
                        },
                        {
                            "value": 25.01,
                            "datetime": "2019-05-01 02:00"
                        },
                        {
                            "value": 24.64,
                            "datetime": "2019-05-01 03:00"
                        },
                        {
                            "value": 24.51,
                            "datetime": "2019-05-01 04:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-01 05:00"
                        },
                        {
                            "value": 23.96,
                            "datetime": "2019-05-01 06:00"
                        },
                        {
                            "value": 23.99,
                            "datetime": "2019-05-01 07:00"
                        },
                        {
                            "value": 24.07,
                            "datetime": "2019-05-01 08:00"
                        },
                        {
                            "value": 23.61,
                            "datetime": "2019-05-01 09:00"
                        },
                        {
                            "value": 22.15,
                            "datetime": "2019-05-01 10:00"
                        },
                        {
                            "value": 21.43,
                            "datetime": "2019-05-01 11:00"
                        },
                        {
                            "value": 21.42,
                            "datetime": "2019-05-01 12:00"
                        },
                        {
                            "value": 21.15,
                            "datetime": "2019-05-01 13:00"
                        },
                        {
                            "value": 20.93,
                            "datetime": "2019-05-01 14:00"
                        },
                        {
                            "value": 20.48,
                            "datetime": "2019-05-01 15:00"
                        },
                        {
                            "value": 20.35,
                            "datetime": "2019-05-01 16:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-01 17:00"
                        },
                        {
                            "value": 20.27,
                            "datetime": "2019-05-01 18:00"
                        },
                        {
                            "value": 20.3,
                            "datetime": "2019-05-01 19:00"
                        },
                        {
                            "value": 20.43,
                            "datetime": "2019-05-01 20:00"
                        },
                        {
                            "value": 20.69,
                            "datetime": "2019-05-01 21:00"
                        },
                        {
                            "value": 20.91,
                            "datetime": "2019-05-01 22:00"
                        },
                        {
                            "value": 21.02,
                            "datetime": "2019-05-01 23:00"
                        },
                        {
                            "value": 20.72,
                            "datetime": "2019-05-02 00:00"
                        },
                        {
                            "value": 20.28,
                            "datetime": "2019-05-02 01:00"
                        },
                        {
                            "value": 19.68,
                            "datetime": "2019-05-02 02:00"
                        },
                        {
                            "value": 19.23,
                            "datetime": "2019-05-02 03:00"
                        },
                        {
                            "value": 18.46,
                            "datetime": "2019-05-02 04:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-02 05:00"
                        },
                        {
                            "value": 18.45,
                            "datetime": "2019-05-02 06:00"
                        },
                        {
                            "value": 19.17,
                            "datetime": "2019-05-02 07:00"
                        },
                        {
                            "value": 20.57,
                            "datetime": "2019-05-02 08:00"
                        },
                        {
                            "value": 21.83,
                            "datetime": "2019-05-02 09:00"
                        },
                        {
                            "value": 23.39,
                            "datetime": "2019-05-02 10:00"
                        },
                        {
                            "value": 24.72,
                            "datetime": "2019-05-02 11:00"
                        },
                        {
                            "value": 25.45,
                            "datetime": "2019-05-02 12:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-02 13:00"
                        },
                        {
                            "value": 25.37,
                            "datetime": "2019-05-02 14:00"
                        },
                        {
                            "value": 24.83,
                            "datetime": "2019-05-02 15:00"
                        },
                        {
                            "value": 24.02,
                            "datetime": "2019-05-02 16:00"
                        },
                        {
                            "value": 23.62,
                            "datetime": "2019-05-02 17:00"
                        },
                        {
                            "value": 22.91,
                            "datetime": "2019-05-02 18:00"
                        },
                        {
                            "value": 22.1,
                            "datetime": "2019-05-02 19:00"
                        },
                        {
                            "value": 21.86,
                            "datetime": "2019-05-02 20:00"
                        },
                        {
                            "value": 21.85,
                            "datetime": "2019-05-02 21:00"
                        },
                        {
                            "value": 21.61,
                            "datetime": "2019-05-02 22:00"
                        },
                        {
                            "value": 21.36,
                            "datetime": "2019-05-02 23:00"
                        },
                        {
                            "value": 21.17,
                            "datetime": "2019-05-03 00:00"
                        },
                        {
                            "value": 20.49,
                            "datetime": "2019-05-03 01:00"
                        },
                        {
                            "value": 19.98,
                            "datetime": "2019-05-03 02:00"
                        },
                        {
                            "value": 19.39,
                            "datetime": "2019-05-03 03:00"
                        },
                        {
                            "value": 18.95,
                            "datetime": "2019-05-03 04:00"
                        },
                        {
                            "value": 18.52,
                            "datetime": "2019-05-03 05:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-03 06:00"
                        },
                        {
                            "value": 18.7,
                            "datetime": "2019-05-03 07:00"
                        },
                        {
                            "value": 19.64,
                            "datetime": "2019-05-03 08:00"
                        },
                        {
                            "value": 19.57,
                            "datetime": "2019-05-03 09:00"
                        },
                        {
                            "value": 20.63,
                            "datetime": "2019-05-03 10:00"
                        },
                        {
                            "value": 21.91,
                            "datetime": "2019-05-03 11:00"
                        },
                        {
                            "value": 23.12,
                            "datetime": "2019-05-03 12:00"
                        },
                        {
                            "value": 23.67,
                            "datetime": "2019-05-03 13:00"
                        },
                        {
                            "value": 24.12,
                            "datetime": "2019-05-03 14:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-03 15:00"
                        },
                        {
                            "value": 25.3,
                            "datetime": "2019-05-03 16:00"
                        },
                        {
                            "value": 24.67,
                            "datetime": "2019-05-03 17:00"
                        },
                        {
                            "value": 23.7,
                            "datetime": "2019-05-03 18:00"
                        },
                        {
                            "value": 22.83,
                            "datetime": "2019-05-03 19:00"
                        },
                        {
                            "value": 22.28,
                            "datetime": "2019-05-03 20:00"
                        },
                        {
                            "value": 21.33,
                            "datetime": "2019-05-03 21:00"
                        },
                        {
                            "value": 21.18,
                            "datetime": "2019-05-03 22:00"
                        },
                        {
                            "value": 21.1,
                            "datetime": "2019-05-03 23:00"
                        },
                        {
                            "value": 20.77,
                            "datetime": "2019-05-04 00:00"
                        },
                        {
                            "value": 20.58,
                            "datetime": "2019-05-04 01:00"
                        },
                        {
                            "value": 20.48,
                            "datetime": "2019-05-04 02:00"
                        },
                        {
                            "value": 20.63,
                            "datetime": "2019-05-04 03:00"
                        },
                        {
                            "value": 20.53,
                            "datetime": "2019-05-04 04:00"
                        },
                        {
                            "value": 20.19,
                            "datetime": "2019-05-04 05:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-04 06:00"
                        },
                        {
                            "value": 20.19,
                            "datetime": "2019-05-04 07:00"
                        },
                        {
                            "value": 20.8,
                            "datetime": "2019-05-04 08:00"
                        },
                        {
                            "value": 22.42,
                            "datetime": "2019-05-04 09:00"
                        },
                        {
                            "value": 22.88,
                            "datetime": "2019-05-04 10:00"
                        },
                        {
                            "value": 23.54,
                            "datetime": "2019-05-04 11:00"
                        },
                        {
                            "value": 25.12,
                            "datetime": "2019-05-04 12:00"
                        },
                        {
                            "value": 25.39,
                            "datetime": "2019-05-04 13:00"
                        },
                        {
                            "value": 25.56,
                            "datetime": "2019-05-04 14:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-04 15:00"
                        },
                        {
                            "value": 25.58,
                            "datetime": "2019-05-04 16:00"
                        },
                        {
                            "value": 25.23,
                            "datetime": "2019-05-04 17:00"
                        },
                        {
                            "value": 24.21,
                            "datetime": "2019-05-04 18:00"
                        },
                        {
                            "value": 23.62,
                            "datetime": "2019-05-04 19:00"
                        },
                        {
                            "value": 23.35,
                            "datetime": "2019-05-04 20:00"
                        },
                        {
                            "value": 22.83,
                            "datetime": "2019-05-04 21:00"
                        },
                        {
                            "value": 22.68,
                            "datetime": "2019-05-04 22:00"
                        },
                        {
                            "value": 22.59,
                            "datetime": "2019-05-04 23:00"
                        },
                        {
                            "value": 22.44,
                            "datetime": "2019-05-05 00:00"
                        },
                        {
                            "value": 22.34,
                            "datetime": "2019-05-05 01:00"
                        },
                        {
                            "value": 22.34,
                            "datetime": "2019-05-05 02:00"
                        },
                        {
                            "value": 22.25,
                            "datetime": "2019-05-05 03:00"
                        },
                        {
                            "value": 22.22,
                            "datetime": "2019-05-05 04:00"
                        },
                        {
                            "value": 21.94,
                            "datetime": "2019-05-05 05:00"
                        },
                        {
                            "value": 21.4,
                            "datetime": "2019-05-05 06:00"
                        },
                        {
                            "value": 21.46,
                            "datetime": "2019-05-05 07:00"
                        },
                        {
                            "value": 21.94,
                            "datetime": "2019-05-05 08:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-05 09:00"
                        },
                        {
                            "value": 20.21,
                            "datetime": "2019-05-05 10:00"
                        },
                        {
                            "value": 20.63,
                            "datetime": "2019-05-05 11:00"
                        },
                        {
                            "value": 20.32,
                            "datetime": "2019-05-05 12:00"
                        },
                        {
                            "value": 20.42,
                            "datetime": "2019-05-05 13:00"
                        },
                        {
                            "value": 20.43,
                            "datetime": "2019-05-05 14:00"
                        },
                        {
                            "value": 22.94,
                            "datetime": "2019-05-05 15:00"
                        },
                        {
                            "value": 22.68,
                            "datetime": "2019-05-05 16:00"
                        },
                        {
                            "value": 22.47,
                            "datetime": "2019-05-05 17:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-05 18:00"
                        },
                        {
                            "value": 22.6,
                            "datetime": "2019-05-05 19:00"
                        },
                        {
                            "value": 22.54,
                            "datetime": "2019-05-05 20:00"
                        },
                        {
                            "value": 22.48,
                            "datetime": "2019-05-05 21:00"
                        },
                        {
                            "value": 22.36,
                            "datetime": "2019-05-05 22:00"
                        },
                        {
                            "value": 22.29,
                            "datetime": "2019-05-05 23:00"
                        },
                        {
                            "value": 22.27,
                            "datetime": "2019-05-06 00:00"
                        },
                        {
                            "value": 22.04,
                            "datetime": "2019-05-06 01:00"
                        },
                        {
                            "value": 21.9,
                            "datetime": "2019-05-06 02:00"
                        },
                        {
                            "value": 21.52,
                            "datetime": "2019-05-06 03:00"
                        },
                        {
                            "value": 21.38,
                            "datetime": "2019-05-06 04:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-06 05:00"
                        },
                        {
                            "value": 21.48,
                            "datetime": "2019-05-06 06:00"
                        },
                        {
                            "value": 21.71,
                            "datetime": "2019-05-06 07:00"
                        },
                        {
                            "value": 22.22,
                            "datetime": "2019-05-06 08:00"
                        },
                        {
                            "value": 22.77,
                            "datetime": "2019-05-06 09:00"
                        },
                        {
                            "value": 22.94,
                            "datetime": "2019-05-06 10:00"
                        },
                        {
                            "value": 23.32,
                            "datetime": "2019-05-06 11:00"
                        },
                        {
                            "value": 24.05,
                            "datetime": "2019-05-06 12:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-06 13:00"
                        },
                        {
                            "value": 24.14,
                            "datetime": "2019-05-06 14:00"
                        },
                        {
                            "value": 23.84,
                            "datetime": "2019-05-06 15:00"
                        },
                        {
                            "value": 23.73,
                            "datetime": "2019-05-06 16:00"
                        },
                        {
                            "value": 23.7,
                            "datetime": "2019-05-06 17:00"
                        },
                        {
                            "value": 23.21,
                            "datetime": "2019-05-06 18:00"
                        },
                        {
                            "value": 22.93,
                            "datetime": "2019-05-06 19:00"
                        },
                        {
                            "value": 22.84,
                            "datetime": "2019-05-06 20:00"
                        },
                        {
                            "value": 21.62,
                            "datetime": "2019-05-06 21:00"
                        },
                        {
                            "value": 20.34,
                            "datetime": "2019-05-06 22:00"
                        },
                        {
                            "value": 19.13,
                            "datetime": "2019-05-06 23:00"
                        },
                        {
                            "value": 18.36,
                            "datetime": "2019-05-07 00:00"
                        },
                        {
                            "value": 17.13,
                            "datetime": "2019-05-07 01:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-07 02:00"
                        },
                        {
                            "value": 18.04,
                            "datetime": "2019-05-07 03:00"
                        },
                        {
                            "value": 19.17,
                            "datetime": "2019-05-07 04:00"
                        },
                        {
                            "value": 20.05,
                            "datetime": "2019-05-07 05:00"
                        },
                        {
                            "value": 21.17,
                            "datetime": "2019-05-07 06:00"
                        },
                        {
                            "value": 22.4,
                            "datetime": "2019-05-07 07:00"
                        },
                        {
                            "value": 24.04,
                            "datetime": "2019-05-07 08:00"
                        },
                        {
                            "value": 23.8,
                            "datetime": "2019-05-07 09:00"
                        },
                        {
                            "value": 23.85,
                            "datetime": "2019-05-07 10:00"
                        },
                        {
                            "value": 24.11,
                            "datetime": "2019-05-07 11:00"
                        },
                        {
                            "value": 24.36,
                            "datetime": "2019-05-07 12:00"
                        },
                        {
                            "value": 24.33,
                            "datetime": "2019-05-07 13:00"
                        },
                        {
                            "value": 24.2,
                            "datetime": "2019-05-07 14:00"
                        },
                        {
                            "value": 25,
                            "datetime": "2019-05-07 15:00"
                        },
                        {
                            "value": 24.88,
                            "datetime": "2019-05-07 16:00"
                        },
                        {
                            "value": 24.83,
                            "datetime": "2019-05-07 17:00"
                        },
                        {
                            "value": 24.99,
                            "datetime": "2019-05-07 18:00"
                        },
                        {
                            "value": 24.69,
                            "datetime": "2019-05-07 19:00"
                        },
                        {
                            "value": 24.73,
                            "datetime": "2019-05-07 20:00"
                        },
                        {
                            "value": 24.84,
                            "datetime": "2019-05-07 21:00"
                        },
                        {
                            "value": 24.69,
                            "datetime": "2019-05-07 22:00"
                        },
                        {
                            "value": 24.6,
                            "datetime": "2019-05-07 23:00"
                        },
                        {
                            "value": 24.61,
                            "datetime": "2019-05-08 00:00"
                        },
                        {
                            "value": 24.52,
                            "datetime": "2019-05-08 01:00"
                        },
                        {
                            "value": 24.51,
                            "datetime": "2019-05-08 02:00"
                        },
                        {
                            "value": 24.43,
                            "datetime": "2019-05-08 03:00"
                        },
                        {
                            "value": 24.43,
                            "datetime": "2019-05-08 04:00"
                        },
                        {
                            "value": 24.18,
                            "datetime": "2019-05-08 05:00"
                        },
                        {
                            "value": 24.09,
                            "datetime": "2019-05-08 06:00"
                        },
                        {
                            "value": 24.19,
                            "datetime": "2019-05-08 07:00"
                        },
                        {
                            "value": 23.9,
                            "datetime": "2019-05-08 08:00"
                        },
                        {
                            "value": 22.96,
                            "datetime": "2019-05-08 09:00"
                        },
                        {
                            "value": 22.5,
                            "datetime": "2019-05-08 10:00"
                        },
                        {
                            "value": 22.08,
                            "datetime": "2019-05-08 11:00"
                        },
                        {
                            "value": 21.71,
                            "datetime": "2019-05-08 12:00"
                        },
                        {
                            "value": 21,
                            "datetime": "2019-05-08 13:00"
                        },
                        {
                            "value": 21.65,
                            "datetime": "2019-05-08 14:00"
                        },
                        {
                            "value": 22.37,
                            "datetime": "2019-05-08 15:00"
                        },
                        {
                            "value": 22.93,
                            "datetime": "2019-05-08 16:00"
                        },
                        {
                            "value": 23.54,
                            "datetime": "2019-05-08 17:00"
                        },
                        {
                            "value": 22.92,
                            "datetime": "2019-05-08 18:00"
                        },
                        {
                            "value": 21.97,
                            "datetime": "2019-05-08 19:00"
                        },
                        {
                            "value": 20.54,
                            "datetime": "2019-05-08 20:00"
                        },
                        {
                            "value": 18.02,
                            "datetime": "2019-05-08 21:00"
                        },
                        {
                            "value": 16.68,
                            "datetime": "2019-05-08 22:00"
                        },
                        {
                            "value": 15.11,
                            "datetime": "2019-05-08 23:00"
                        },
                        {
                            "value": 16,
                            "datetime": "2019-05-09 00:00"
                        },
                        {
                            "value": 17.24,
                            "datetime": "2019-05-09 01:00"
                        },
                        {
                            "value": 18.56,
                            "datetime": "2019-05-09 02:00"
                        },
                        {
                            "value": 19.66,
                            "datetime": "2019-05-09 03:00"
                        },
                        {
                            "value": 20.98,
                            "datetime": "2019-05-09 04:00"
                        },
                        {
                            "value": 22.07,
                            "datetime": "2019-05-09 05:00"
                        },
                        {
                            "value": 22.25,
                            "datetime": "2019-05-09 06:00"
                        },
                        {
                            "value": 22.35,
                            "datetime": "2019-05-09 07:00"
                        },
                        {
                            "value": 22.88,
                            "datetime": "2019-05-09 08:00"
                        },
                        {
                            "value": 22.67,
                            "datetime": "2019-05-09 09:00"
                        },
                        {
                            "value": 23.03,
                            "datetime": "2019-05-09 10:00"
                        },
                        {
                            "value": 23.44,
                            "datetime": "2019-05-09 11:00"
                        },
                        {
                            "value": 23.89,
                            "datetime": "2019-05-09 12:00"
                        },
                        {
                            "value": 24,
                            "datetime": "2019-05-09 13:00"
                        },
                        {
                            "value": 23.83,
                            "datetime": "2019-05-09 14:00"
                        },
                        {
                            "value": 23.72,
                            "datetime": "2019-05-09 15:00"
                        },
                        {
                            "value": 23.46,
                            "datetime": "2019-05-09 16:00"
                        },
                        {
                            "value": 23.25,
                            "datetime": "2019-05-09 17:00"
                        },
                        {
                            "value": 22.96,
                            "datetime": "2019-05-09 18:00"
                        },
                        {
                            "value": 22.52,
                            "datetime": "2019-05-09 19:00"
                        },
                        {
                            "value": 22.43,
                            "datetime": "2019-05-09 20:00"
                        },
                        {
                            "value": 23.01,
                            "datetime": "2019-05-09 21:00"
                        },
                        {
                            "value": 23,
                            "datetime": "2019-05-09 22:00"
                        },
                        {
                            "value": 22.77,
                            "datetime": "2019-05-09 23:00"
                        },
                        {
                            "value": 22.68,
                            "datetime": "2019-05-10 00:00"
                        },
                        {
                            "value": 22.58,
                            "datetime": "2019-05-10 01:00"
                        },
                        {
                            "value": 22.57,
                            "datetime": "2019-05-10 02:00"
                        },
                        {
                            "value": 22.33,
                            "datetime": "2019-05-10 03:00"
                        },
                        {
                            "value": 22.33,
                            "datetime": "2019-05-10 04:00"
                        },
                        {
                            "value": 22.08,
                            "datetime": "2019-05-10 05:00"
                        },
                        {
                            "value": 22.08,
                            "datetime": "2019-05-10 06:00"
                        },
                        {
                            "value": 22.18,
                            "datetime": "2019-05-10 07:00"
                        },
                        {
                            "value": 22.79,
                            "datetime": "2019-05-10 08:00"
                        },
                        {
                            "value": 24.39,
                            "datetime": "2019-05-10 09:00"
                        },
                        {
                            "value": 24.81,
                            "datetime": "2019-05-10 10:00"
                        },
                        {
                            "value": 25.3,
                            "datetime": "2019-05-10 11:00"
                        },
                        {
                            "value": 25.82,
                            "datetime": "2019-05-10 12:00"
                        },
                        {
                            "value": 26,
                            "datetime": "2019-05-10 13:00"
                        },
                        {
                            "value": 25.76,
                            "datetime": "2019-05-10 14:00"
                        },
                        {
                            "value": 25.58,
                            "datetime": "2019-05-10 15:00"
                        },
                        {
                            "value": 25.25,
                            "datetime": "2019-05-10 16:00"
                        },
                        {
                            "value": 24.97,
                            "datetime": "2019-05-10 17:00"
                        },
                        {
                            "value": 24.04,
                            "datetime": "2019-05-10 18:00"
                        },
                        {
                            "value": 23.05,
                            "datetime": "2019-05-10 19:00"
                        },
                        {
                            "value": 22.48,
                            "datetime": "2019-05-10 20:00"
                        },
                        {
                            "value": 18.49,
                            "datetime": "2019-05-10 21:00"
                        },
                        {
                            "value": 17.92,
                            "datetime": "2019-05-10 22:00"
                        },
                        {
                            "value": 17.43,
                            "datetime": "2019-05-10 23:00"
                        },
                        {
                            "value": 18,
                            "datetime": "2019-05-11 00:00"
                        },
                        {
                            "value": 18.38,
                            "datetime": "2019-05-11 01:00"
                        },
                        {
                            "value": 18.71,
                            "datetime": "2019-05-11 02:00"
                        },
                        {
                            "value": 22.78,
                            "datetime": "2019-05-11 03:00"
                        },
                        {
                            "value": 23.17,
                            "datetime": "2019-05-11 04:00"
                        },
                        {
                            "value": 23.5,
                            "datetime": "2019-05-11 05:00"
                        },
                        {
                            "value": 23.4,
                            "datetime": "2019-05-11 06:00"
                        },
                        {
                            "value": 23.5,
                            "datetime": "2019-05-11 07:00"
                        },
                        {
                            "value": 25.19,
                            "datetime": "2019-05-11 08:00"
                        },
                        {
                            "value": 25.79,
                            "datetime": "2019-05-11 09:00"
                        },
                        {
                            "value": 26.11,
                            "datetime": "2019-05-11 10:00"
                        },
                        {
                            "value": 26.49,
                            "datetime": "2019-05-11 11:00"
                        },
                        {
                            "value": 26.92,
                            "datetime": "2019-05-11 12:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-11 13:00"
                        },
                        {
                            "value": 26.86,
                            "datetime": "2019-05-11 14:00"
                        },
                        {
                            "value": 26.78,
                            "datetime": "2019-05-11 15:00"
                        },
                        {
                            "value": 26.54,
                            "datetime": "2019-05-11 16:00"
                        },
                        {
                            "value": 26.36,
                            "datetime": "2019-05-11 17:00"
                        },
                        {
                            "value": 26.1,
                            "datetime": "2019-05-11 18:00"
                        },
                        {
                            "value": 25.69,
                            "datetime": "2019-05-11 19:00"
                        },
                        {
                            "value": 25.6,
                            "datetime": "2019-05-11 20:00"
                        },
                        {
                            "value": 25.2,
                            "datetime": "2019-05-11 21:00"
                        },
                        {
                            "value": 25.19,
                            "datetime": "2019-05-11 22:00"
                        },
                        {
                            "value": 24.96,
                            "datetime": "2019-05-11 23:00"
                        },
                        {
                            "value": 24.16,
                            "datetime": "2019-05-12 00:00"
                        },
                        {
                            "value": 23.35,
                            "datetime": "2019-05-12 01:00"
                        },
                        {
                            "value": 22.63,
                            "datetime": "2019-05-12 02:00"
                        },
                        {
                            "value": 21.68,
                            "datetime": "2019-05-12 03:00"
                        },
                        {
                            "value": 20.96,
                            "datetime": "2019-05-12 04:00"
                        },
                        {
                            "value": 20,
                            "datetime": "2019-05-12 05:00"
                        },
                        {
                            "value": 20.71,
                            "datetime": "2019-05-12 06:00"
                        },
                        {
                            "value": 21.52,
                            "datetime": "2019-05-12 07:00"
                        },
                        {
                            "value": 22.92,
                            "datetime": "2019-05-12 08:00"
                        },
                        {
                            "value": 24.64,
                            "datetime": "2019-05-12 09:00"
                        },
                        {
                            "value": 25.85,
                            "datetime": "2019-05-12 10:00"
                        },
                        {
                            "value": 27.13,
                            "datetime": "2019-05-12 11:00"
                        },
                        {
                            "value": 27.74,
                            "datetime": "2019-05-12 12:00"
                        },
                        {
                            "value": 28,
                            "datetime": "2019-05-12 13:00"
                        },
                        {
                            "value": 27.67,
                            "datetime": "2019-05-12 14:00"
                        },
                        {
                            "value": 27.42,
                            "datetime": "2019-05-12 15:00"
                        },
                        {
                            "value": 27,
                            "datetime": "2019-05-12 16:00"
                        },
                        {
                            "value": 26.64,
                            "datetime": "2019-05-12 17:00"
                        },
                        {
                            "value": 26.2,
                            "datetime": "2019-05-12 18:00"
                        },
                        {
                            "value": 25.6,
                            "datetime": "2019-05-12 19:00"
                        },
                        {
                            "value": 25.51,
                            "datetime": "2019-05-12 20:00"
                        },
                        {
                            "value": 25.8,
                            "datetime": "2019-05-12 21:00"
                        },
                        {
                            "value": 25.79,
                            "datetime": "2019-05-12 22:00"
                        },
                        {
                            "value": 25.56,
                            "datetime": "2019-05-12 23:00"
                        },
                        {
                            "value": 25.47,
                            "datetime": "2019-05-13 00:00"
                        },
                        {
                            "value": 25.37,
                            "datetime": "2019-05-13 01:00"
                        },
                        {
                            "value": 25.37,
                            "datetime": "2019-05-13 02:00"
                        },
                        {
                            "value": 25.12,
                            "datetime": "2019-05-13 03:00"
                        },
                        {
                            "value": 25.12,
                            "datetime": "2019-05-13 04:00"
                        },
                        {
                            "value": 24.87,
                            "datetime": "2019-05-13 05:00"
                        },
                        {
                            "value": 24.87,
                            "datetime": "2019-05-13 06:00"
                        },
                        {
                            "value": 24.97,
                            "datetime": "2019-05-13 07:00"
                        },
                        {
                            "value": 25.48,
                            "datetime": "2019-05-13 08:00"
                        },
                        {
                            "value": 23.36,
                            "datetime": "2019-05-13 09:00"
                        },
                        {
                            "value": 23.69,
                            "datetime": "2019-05-13 10:00"
                        },
                        {
                            "value": 24.07,
                            "datetime": "2019-05-13 11:00"
                        },
                        {
                            "value": 24.5,
                            "datetime": "2019-05-13 12:00"
                        },
                        {
                            "value": 24.59,
                            "datetime": "2019-05-13 13:00"
                        },
                        {
                            "value": 24.44,
                            "datetime": "2019-05-13 14:00"
                        },
                        {
                            "value": 24.36,
                            "datetime": "2019-05-13 15:00"
                        },
                        {
                            "value": 24.12,
                            "datetime": "2019-05-13 16:00"
                        },
                        {
                            "value": 23.93,
                            "datetime": "2019-05-13 17:00"
                        },
                        {
                            "value": 23.67,
                            "datetime": "2019-05-13 18:00"
                        },
                        {
                            "value": 23.25,
                            "datetime": "2019-05-13 19:00"
                        },
                        {
                            "value": 23.16,
                            "datetime": "2019-05-13 20:00"
                        },
                        {
                            "value": 22.68,
                            "datetime": "2019-05-13 21:00"
                        },
                        {
                            "value": 22.67,
                            "datetime": "2019-05-13 22:00"
                        },
                        {
                            "value": 22.44,
                            "datetime": "2019-05-13 23:00"
                        },
                        {
                            "value": 22.35,
                            "datetime": "2019-05-14 00:00"
                        },
                        {
                            "value": 22.25,
                            "datetime": "2019-05-14 01:00"
                        },
                        {
                            "value": 22.24,
                            "datetime": "2019-05-14 02:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-14 03:00"
                        },
                        {
                            "value": 22,
                            "datetime": "2019-05-14 04:00"
                        },
                        {
                            "value": 21.75,
                            "datetime": "2019-05-14 05:00"
                        },
                        {
                            "value": 21.75,
                            "datetime": "2019-05-14 06:00"
                        },
                        {
                            "value": 21.85,
                            "datetime": "2019-05-14 07:00"
                        },
                        {
                            "value": 22.36,
                            "datetime": "2019-05-14 08:00"
                        },
                        {
                            "value": 23.79,
                            "datetime": "2019-05-14 09:00"
                        },
                        {
                            "value": 26.66,
                            "datetime": "2019-05-14 10:00"
                        },
                        {
                            "value": 31.47,
                            "datetime": "2019-05-14 11:00"
                        }
                    ]
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
                "daily": {
                    "status": "ok",
                    "comfort": [
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-04-28"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-04-29"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-04-30"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-01"
                        },
                        {
                            "index": "5",
                            "desc": "舒适",
                            "datetime": "2019-05-02"
                        },
                        {
                            "index": "5",
                            "desc": "舒适",
                            "datetime": "2019-05-03"
                        },
                        {
                            "index": "5",
                            "desc": "舒适",
                            "datetime": "2019-05-04"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-05"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-06"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-07"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-08"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-09"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-10"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-11"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-12"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-13"
                        }
                    ],
                    "skycon_20h_32h": [
                        {
                            "date": "2019-04-28",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-04-29",
                            "value": "CLOUDY"
                        },
                        {
                            "date": "2019-04-30",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-01",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-05-02",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-05-03",
                            "value": "CLOUDY"
                        },
                        {
                            "date": "2019-05-04",
                            "value": "CLOUDY"
                        },
                        {
                            "date": "2019-05-05",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-05-06",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-07",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-08",
                            "value": "CLOUDY"
                        },
                        {
                            "date": "2019-05-09",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-05-10",
                            "value": "CLEAR_NIGHT"
                        },
                        {
                            "date": "2019-05-11",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-12",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        },
                        {
                            "date": "2019-05-13",
                            "value": "PARTLY_CLOUDY_NIGHT"
                        }
                    ],
                    "temperature": [
                        {
                            "date": "2019-04-28",
                            "max": 27,
                            "avg": 24.65,
                            "min": 19
                        },
                        {
                            "date": "2019-04-29",
                            "max": 28.22,
                            "avg": 25.17,
                            "min": 22
                        },
                        {
                            "date": "2019-04-30",
                            "max": 28,
                            "avg": 24.95,
                            "min": 21
                        },
                        {
                            "date": "2019-05-01",
                            "max": 25.05,
                            "avg": 22.31,
                            "min": 20
                        },
                        {
                            "date": "2019-05-02",
                            "max": 26,
                            "avg": 21.9,
                            "min": 18
                        },
                        {
                            "date": "2019-05-03",
                            "max": 26,
                            "avg": 21.51,
                            "min": 18
                        },
                        {
                            "date": "2019-05-04",
                            "max": 26,
                            "avg": 22.72,
                            "min": 20
                        },
                        {
                            "date": "2019-05-05",
                            "max": 23,
                            "avg": 21.82,
                            "min": 20
                        },
                        {
                            "date": "2019-05-06",
                            "max": 24.14,
                            "avg": 22.42,
                            "min": 19.13
                        },
                        {
                            "date": "2019-05-07",
                            "max": 25,
                            "avg": 22.68,
                            "min": 16
                        },
                        {
                            "date": "2019-05-08",
                            "max": 24.61,
                            "avg": 22.28,
                            "min": 15.11
                        },
                        {
                            "date": "2019-05-09",
                            "max": 24,
                            "avg": 22.08,
                            "min": 16
                        },
                        {
                            "date": "2019-05-10",
                            "max": 26,
                            "avg": 23.04,
                            "min": 17.43
                        },
                        {
                            "date": "2019-05-11",
                            "max": 27,
                            "avg": 24.51,
                            "min": 18
                        },
                        {
                            "date": "2019-05-12",
                            "max": 28,
                            "avg": 24.77,
                            "min": 20
                        },
                        {
                            "date": "2019-05-13",
                            "max": 25.48,
                            "avg": 24.23,
                            "min": 22.44
                        }
                    ],
                    "dswrf": [
                        {
                            "date": "2019-04-28",
                            "max": 840.4,
                            "avg": 480.2,
                            "min": 0
                        },
                        {
                            "date": "2019-04-29",
                            "max": 857,
                            "avg": 331.4,
                            "min": 0
                        },
                        {
                            "date": "2019-04-30",
                            "max": 854.6,
                            "avg": 330.5,
                            "min": 0
                        },
                        {
                            "date": "2019-05-01",
                            "max": 178.6,
                            "avg": 54.6,
                            "min": 0
                        },
                        {
                            "date": "2019-05-02",
                            "max": 536.6,
                            "avg": 190.5,
                            "min": 0
                        },
                        {
                            "date": "2019-05-03",
                            "max": 658.2,
                            "avg": 188.8,
                            "min": 0
                        },
                        {
                            "date": "2019-05-04",
                            "max": 743,
                            "avg": 285.7,
                            "min": -18.1
                        },
                        {
                            "date": "2019-05-05",
                            "max": 303.3,
                            "avg": 63.8,
                            "min": -32.9
                        },
                        {
                            "date": "2019-05-06",
                            "max": 748.8,
                            "avg": 263.1,
                            "min": 0
                        },
                        {
                            "date": "2019-05-07",
                            "max": 373.3,
                            "avg": 75.9,
                            "min": -59.8
                        },
                        {
                            "date": "2019-05-08",
                            "max": 931.5,
                            "avg": 379,
                            "min": -55.6
                        },
                        {
                            "date": "2019-05-09",
                            "max": 893.9,
                            "avg": 348.7,
                            "min": -55.6
                        },
                        {
                            "date": "2019-05-10",
                            "max": 1010.7,
                            "avg": 445,
                            "min": -23.4
                        },
                        {
                            "date": "2019-05-11",
                            "max": 994.4,
                            "avg": 407.9,
                            "min": -228.3
                        },
                        {
                            "date": "2019-05-12",
                            "max": 859.6,
                            "avg": 338.1,
                            "min": -38.4
                        },
                        {
                            "date": "2019-05-13",
                            "max": 1011.8,
                            "avg": 420.2,
                            "min": -22.4
                        }
                    ],
                    "cloudrate": [
                        {
                            "date": "2019-04-28",
                            "max": 0.95,
                            "avg": 0.37,
                            "min": 0.01
                        },
                        {
                            "date": "2019-04-29",
                            "max": 1,
                            "avg": 0.31,
                            "min": 0
                        },
                        {
                            "date": "2019-04-30",
                            "max": 1,
                            "avg": 0.56,
                            "min": 0.04
                        },
                        {
                            "date": "2019-05-01",
                            "max": 1,
                            "avg": 0.97,
                            "min": 0.73
                        },
                        {
                            "date": "2019-05-02",
                            "max": 0.94,
                            "avg": 0.53,
                            "min": 0.08
                        },
                        {
                            "date": "2019-05-03",
                            "max": 1,
                            "avg": 0.49,
                            "min": 0.01
                        },
                        {
                            "date": "2019-05-04",
                            "max": 1,
                            "avg": 0.75,
                            "min": 0.27
                        },
                        {
                            "date": "2019-05-05",
                            "max": 1,
                            "avg": 0.85,
                            "min": 0.65
                        },
                        {
                            "date": "2019-05-06",
                            "max": 1,
                            "avg": 0.67,
                            "min": 0.37
                        },
                        {
                            "date": "2019-05-07",
                            "max": 1,
                            "avg": 1,
                            "min": 1
                        },
                        {
                            "date": "2019-05-08",
                            "max": 1,
                            "avg": 0.78,
                            "min": 0.61
                        },
                        {
                            "date": "2019-05-09",
                            "max": 0.85,
                            "avg": 0.56,
                            "min": 0.23
                        },
                        {
                            "date": "2019-05-10",
                            "max": 0.23,
                            "avg": 0.19,
                            "min": 0
                        },
                        {
                            "date": "2019-05-11",
                            "max": 0.99,
                            "avg": 0.41,
                            "min": 0
                        },
                        {
                            "date": "2019-05-12",
                            "max": 0.99,
                            "avg": 0.8,
                            "min": 0.3
                        },
                        {
                            "date": "2019-05-13",
                            "max": 0.5,
                            "avg": 0.22,
                            "min": 0.09
                        }
                    ],
                    "aqi": [
                        {
                            "date": "2019-04-28",
                            "max": 43,
                            "avg": 27.67,
                            "min": 14
                        },
                        {
                            "date": "2019-04-29",
                            "max": 44,
                            "avg": 37.62,
                            "min": 31
                        },
                        {
                            "date": "2019-04-30",
                            "max": 39,
                            "avg": 19.08,
                            "min": 9
                        },
                        {
                            "date": "2019-05-01",
                            "max": 20,
                            "avg": 11.5,
                            "min": 7
                        },
                        {
                            "date": "2019-05-02",
                            "max": 24,
                            "avg": 21.67,
                            "min": 19
                        },
                        {
                            "date": "2019-05-03",
                            "max": 24,
                            "avg": 22.33,
                            "min": 20
                        },
                        {
                            "date": "2019-05-04",
                            "max": 27,
                            "avg": 24,
                            "min": 21
                        },
                        {
                            "date": "2019-05-05",
                            "max": 31,
                            "avg": 25.04,
                            "min": 19
                        },
                        {
                            "date": "2019-05-06",
                            "max": 23,
                            "avg": 19.04,
                            "min": 11
                        },
                        {
                            "date": "2019-05-07",
                            "max": 16,
                            "avg": 12.38,
                            "min": 7
                        },
                        {
                            "date": "2019-05-08",
                            "max": 19,
                            "avg": 13.42,
                            "min": 6
                        },
                        {
                            "date": "2019-05-09",
                            "max": 27,
                            "avg": 19.21,
                            "min": 11
                        },
                        {
                            "date": "2019-05-10",
                            "max": 39,
                            "avg": 30.83,
                            "min": 23
                        },
                        {
                            "date": "2019-05-11",
                            "max": 39,
                            "avg": 29.62,
                            "min": 21
                        },
                        {
                            "date": "2019-05-12",
                            "max": 51,
                            "avg": 30.62,
                            "min": 20
                        },
                        {
                            "date": "2019-05-13",
                            "max": 43,
                            "avg": 26.83,
                            "min": 14
                        }
                    ],
                    "skycon": [
                        {
                            "date": "2019-04-28",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-04-29",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-04-30",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-01",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-02",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-03",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-04",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-05",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-06",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-07",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-08",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-09",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-10",
                            "value": "CLEAR_DAY"
                        },
                        {
                            "date": "2019-05-11",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-12",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-13",
                            "value": "PARTLY_CLOUDY_DAY"
                        }
                    ],
                    "visibility": [
                        {
                            "date": "2019-04-28",
                            "max": 17.61,
                            "avg": 5.95,
                            "min": 4.13
                        },
                        {
                            "date": "2019-04-29",
                            "max": 8.02,
                            "avg": 4.85,
                            "min": 3.53
                        },
                        {
                            "date": "2019-04-30",
                            "max": 9.74,
                            "avg": 5.36,
                            "min": 3.39
                        },
                        {
                            "date": "2019-05-01",
                            "max": 10,
                            "avg": 5.45,
                            "min": 3.77
                        },
                        {
                            "date": "2019-05-02",
                            "max": 10.69,
                            "avg": 10.56,
                            "min": 9.66
                        },
                        {
                            "date": "2019-05-03",
                            "max": 10.69,
                            "avg": 10.69,
                            "min": 10.69
                        },
                        {
                            "date": "2019-05-04",
                            "max": 10.69,
                            "avg": 10.69,
                            "min": 10.69
                        },
                        {
                            "date": "2019-05-05",
                            "max": 10.69,
                            "avg": 7.26,
                            "min": 4.61
                        },
                        {
                            "date": "2019-05-06",
                            "max": 8.97,
                            "avg": 6.37,
                            "min": 3.64
                        },
                        {
                            "date": "2019-05-07",
                            "max": 4.21,
                            "avg": 3.6,
                            "min": 3.25
                        },
                        {
                            "date": "2019-05-08",
                            "max": 4.39,
                            "avg": 3.91,
                            "min": 3.6
                        },
                        {
                            "date": "2019-05-09",
                            "max": 10.69,
                            "avg": 6.38,
                            "min": 4.39
                        },
                        {
                            "date": "2019-05-10",
                            "max": 10.69,
                            "avg": 7.89,
                            "min": 5.09
                        },
                        {
                            "date": "2019-05-11",
                            "max": 10.69,
                            "avg": 6.46,
                            "min": 3.9
                        },
                        {
                            "date": "2019-05-12",
                            "max": 5.31,
                            "avg": 4.08,
                            "min": 3.9
                        },
                        {
                            "date": "2019-05-13",
                            "max": 9.18,
                            "avg": 7.45,
                            "min": 5.31
                        }
                    ],
                    "humidity": [
                        {
                            "date": "2019-04-28",
                            "max": 0.86,
                            "avg": 0.79,
                            "min": 0.65
                        },
                        {
                            "date": "2019-04-29",
                            "max": 0.9,
                            "avg": 0.84,
                            "min": 0.73
                        },
                        {
                            "date": "2019-04-30",
                            "max": 0.92,
                            "avg": 0.83,
                            "min": 0.71
                        },
                        {
                            "date": "2019-05-01",
                            "max": 0.88,
                            "avg": 0.81,
                            "min": 0.71
                        },
                        {
                            "date": "2019-05-02",
                            "max": 0.71,
                            "avg": 0.65,
                            "min": 0.56
                        },
                        {
                            "date": "2019-05-03",
                            "max": 0.63,
                            "avg": 0.57,
                            "min": 0.51
                        },
                        {
                            "date": "2019-05-04",
                            "max": 0.68,
                            "avg": 0.66,
                            "min": 0.64
                        },
                        {
                            "date": "2019-05-05",
                            "max": 0.83,
                            "avg": 0.76,
                            "min": 0.68
                        },
                        {
                            "date": "2019-05-06",
                            "max": 0.89,
                            "avg": 0.78,
                            "min": 0.72
                        },
                        {
                            "date": "2019-05-07",
                            "max": 0.93,
                            "avg": 0.9,
                            "min": 0.85
                        },
                        {
                            "date": "2019-05-08",
                            "max": 0.9,
                            "avg": 0.88,
                            "min": 0.84
                        },
                        {
                            "date": "2019-05-09",
                            "max": 0.84,
                            "avg": 0.78,
                            "min": 0.68
                        },
                        {
                            "date": "2019-05-10",
                            "max": 0.81,
                            "avg": 0.74,
                            "min": 0.67
                        },
                        {
                            "date": "2019-05-11",
                            "max": 0.87,
                            "avg": 0.75,
                            "min": 0.49
                        },
                        {
                            "date": "2019-05-12",
                            "max": 0.87,
                            "avg": 0.86,
                            "min": 0.8
                        },
                        {
                            "date": "2019-05-13",
                            "max": 0.8,
                            "avg": 0.75,
                            "min": 0.72
                        }
                    ],
                    "astro": [
                        {
                            "date": "2019-04-28",
                            "sunset": {
                                "time": "18:35"
                            },
                            "sunrise": {
                                "time": "05:34"
                            }
                        },
                        {
                            "date": "2019-04-29",
                            "sunset": {
                                "time": "18:35"
                            },
                            "sunrise": {
                                "time": "05:34"
                            }
                        },
                        {
                            "date": "2019-04-30",
                            "sunset": {
                                "time": "18:35"
                            },
                            "sunrise": {
                                "time": "05:33"
                            }
                        },
                        {
                            "date": "2019-05-01",
                            "sunset": {
                                "time": "18:36"
                            },
                            "sunrise": {
                                "time": "05:32"
                            }
                        },
                        {
                            "date": "2019-05-02",
                            "sunset": {
                                "time": "18:36"
                            },
                            "sunrise": {
                                "time": "05:31"
                            }
                        },
                        {
                            "date": "2019-05-03",
                            "sunset": {
                                "time": "18:37"
                            },
                            "sunrise": {
                                "time": "05:31"
                            }
                        },
                        {
                            "date": "2019-05-04",
                            "sunset": {
                                "time": "18:37"
                            },
                            "sunrise": {
                                "time": "05:30"
                            }
                        },
                        {
                            "date": "2019-05-05",
                            "sunset": {
                                "time": "18:38"
                            },
                            "sunrise": {
                                "time": "05:29"
                            }
                        },
                        {
                            "date": "2019-05-06",
                            "sunset": {
                                "time": "18:38"
                            },
                            "sunrise": {
                                "time": "05:29"
                            }
                        },
                        {
                            "date": "2019-05-07",
                            "sunset": {
                                "time": "18:39"
                            },
                            "sunrise": {
                                "time": "05:28"
                            }
                        },
                        {
                            "date": "2019-05-08",
                            "sunset": {
                                "time": "18:39"
                            },
                            "sunrise": {
                                "time": "05:27"
                            }
                        },
                        {
                            "date": "2019-05-09",
                            "sunset": {
                                "time": "18:40"
                            },
                            "sunrise": {
                                "time": "05:27"
                            }
                        },
                        {
                            "date": "2019-05-10",
                            "sunset": {
                                "time": "18:40"
                            },
                            "sunrise": {
                                "time": "05:26"
                            }
                        },
                        {
                            "date": "2019-05-11",
                            "sunset": {
                                "time": "18:41"
                            },
                            "sunrise": {
                                "time": "05:26"
                            }
                        },
                        {
                            "date": "2019-05-12",
                            "sunset": {
                                "time": "18:41"
                            },
                            "sunrise": {
                                "time": "05:25"
                            }
                        },
                        {
                            "date": "2019-05-13",
                            "sunset": {
                                "time": "18:42"
                            },
                            "sunrise": {
                                "time": "05:25"
                            }
                        }
                    ],
                    "coldRisk": [
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-04-28"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-04-29"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-04-30"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-05-01"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-02"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-03"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-05-04"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-05-05"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-05-06"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-07"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-08"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-09"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-10"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-11"
                        },
                        {
                            "index": "4",
                            "desc": "极易发",
                            "datetime": "2019-05-12"
                        },
                        {
                            "index": "3",
                            "desc": "易发",
                            "datetime": "2019-05-13"
                        }
                    ],
                    "ultraviolet": [
                        {
                            "index": "3",
                            "desc": "中等",
                            "datetime": "2019-04-28"
                        },
                        {
                            "index": "5",
                            "desc": "很强",
                            "datetime": "2019-04-29"
                        },
                        {
                            "index": "5",
                            "desc": "很强",
                            "datetime": "2019-04-30"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-01"
                        },
                        {
                            "index": "2",
                            "desc": "弱",
                            "datetime": "2019-05-02"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-03"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-04"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-05"
                        },
                        {
                            "index": "3",
                            "desc": "中等",
                            "datetime": "2019-05-06"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-07"
                        },
                        {
                            "index": "2",
                            "desc": "弱",
                            "datetime": "2019-05-08"
                        },
                        {
                            "index": "3",
                            "desc": "中等",
                            "datetime": "2019-05-09"
                        },
                        {
                            "index": "4",
                            "desc": "强",
                            "datetime": "2019-05-10"
                        },
                        {
                            "index": "3",
                            "desc": "中等",
                            "datetime": "2019-05-11"
                        },
                        {
                            "index": "1",
                            "desc": "最弱",
                            "datetime": "2019-05-12"
                        },
                        {
                            "index": "4",
                            "desc": "强",
                            "datetime": "2019-05-13"
                        }
                    ],
                    "pres": [
                        {
                            "date": "2019-04-28",
                            "max": 101452.55,
                            "avg": 101091.42,
                            "min": 100974.08
                        },
                        {
                            "date": "2019-04-29",
                            "max": 101162.25,
                            "avg": 100962.8,
                            "min": 100654.08
                        },
                        {
                            "date": "2019-04-30",
                            "max": 100814.08,
                            "avg": 100566.12,
                            "min": 100254.08
                        },
                        {
                            "date": "2019-05-01",
                            "max": 101209.95,
                            "avg": 100774.44,
                            "min": 100414.08
                        },
                        {
                            "date": "2019-05-02",
                            "max": 101478.12,
                            "avg": 101218.32,
                            "min": 100998.12
                        },
                        {
                            "date": "2019-05-03",
                            "max": 101562.25,
                            "avg": 101431.26,
                            "min": 101242.25
                        },
                        {
                            "date": "2019-05-04",
                            "max": 101642.25,
                            "avg": 101469.62,
                            "min": 101289.95
                        },
                        {
                            "date": "2019-05-05",
                            "max": 101369.95,
                            "avg": 101193.08,
                            "min": 101002.25
                        },
                        {
                            "date": "2019-05-06",
                            "max": 100889.95,
                            "avg": 100698.87,
                            "min": 100494.08
                        },
                        {
                            "date": "2019-05-07",
                            "max": 100329.95,
                            "avg": 100186.42,
                            "min": 100012.55
                        },
                        {
                            "date": "2019-05-08",
                            "max": 100442.25,
                            "avg": 100254.47,
                            "min": 100179.74
                        },
                        {
                            "date": "2019-05-09",
                            "max": 100423.86,
                            "avg": 100378.51,
                            "min": 100372.03
                        },
                        {
                            "date": "2019-05-10",
                            "max": 100932.03,
                            "avg": 100407.38,
                            "min": 100263.86
                        },
                        {
                            "date": "2019-05-11",
                            "max": 100932.03,
                            "avg": 100483.44,
                            "min": 100263.86
                        },
                        {
                            "date": "2019-05-12",
                            "max": 100532.03,
                            "avg": 100352.03,
                            "min": 100292.03
                        },
                        {
                            "date": "2019-05-13",
                            "max": 100741.27,
                            "avg": 100584.1,
                            "min": 100532.03
                        }
                    ],
                    "pm25": [
                        {
                            "date": "2019-04-28",
                            "max": 29,
                            "avg": 18.58,
                            "min": 7
                        },
                        {
                            "date": "2019-04-29",
                            "max": 31,
                            "avg": 26.33,
                            "min": 22
                        },
                        {
                            "date": "2019-04-30",
                            "max": 27,
                            "avg": 13.33,
                            "min": 6
                        },
                        {
                            "date": "2019-05-01",
                            "max": 14,
                            "avg": 8.08,
                            "min": 5
                        },
                        {
                            "date": "2019-05-02",
                            "max": 17,
                            "avg": 15.21,
                            "min": 13
                        },
                        {
                            "date": "2019-05-03",
                            "max": 17,
                            "avg": 15.75,
                            "min": 14
                        },
                        {
                            "date": "2019-05-04",
                            "max": 19,
                            "avg": 16.79,
                            "min": 15
                        },
                        {
                            "date": "2019-05-05",
                            "max": 22,
                            "avg": 17.58,
                            "min": 13
                        },
                        {
                            "date": "2019-05-06",
                            "max": 16,
                            "avg": 13.38,
                            "min": 8
                        },
                        {
                            "date": "2019-05-07",
                            "max": 11,
                            "avg": 8.71,
                            "min": 5
                        },
                        {
                            "date": "2019-05-08",
                            "max": 13,
                            "avg": 9.33,
                            "min": 4
                        },
                        {
                            "date": "2019-05-09",
                            "max": 19,
                            "avg": 13.46,
                            "min": 8
                        },
                        {
                            "date": "2019-05-10",
                            "max": 27,
                            "avg": 21.54,
                            "min": 16
                        },
                        {
                            "date": "2019-05-11",
                            "max": 27,
                            "avg": 20.71,
                            "min": 15
                        },
                        {
                            "date": "2019-05-12",
                            "max": 36,
                            "avg": 19.17,
                            "min": 11
                        },
                        {
                            "date": "2019-05-13",
                            "max": 29,
                            "avg": 15.54,
                            "min": 7
                        }
                    ],
                    "dressing": [
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-04-28"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-04-29"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-04-30"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-01"
                        },
                        {
                            "index": "5",
                            "desc": "凉爽",
                            "datetime": "2019-05-02"
                        },
                        {
                            "index": "5",
                            "desc": "凉爽",
                            "datetime": "2019-05-03"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-04"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-05"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-06"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-07"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-08"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-09"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-10"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-11"
                        },
                        {
                            "index": "3",
                            "desc": "热",
                            "datetime": "2019-05-12"
                        },
                        {
                            "index": "4",
                            "desc": "温暖",
                            "datetime": "2019-05-13"
                        }
                    ],
                    "carWashing": [
                        {
                            "index": "1",
                            "desc": "适宜",
                            "datetime": "2019-04-28"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-04-29"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-04-30"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-01"
                        },
                        {
                            "index": "1",
                            "desc": "适宜",
                            "datetime": "2019-05-02"
                        },
                        {
                            "index": "1",
                            "desc": "适宜",
                            "datetime": "2019-05-03"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-04"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-05"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-06"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-07"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-08"
                        },
                        {
                            "index": "1",
                            "desc": "适宜",
                            "datetime": "2019-05-09"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-10"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-11"
                        },
                        {
                            "index": "3",
                            "desc": "较不适宜",
                            "datetime": "2019-05-12"
                        },
                        {
                            "index": "1",
                            "desc": "适宜",
                            "datetime": "2019-05-13"
                        }
                    ],
                    "precipitation": [
                        {
                            "date": "2019-04-28",
                            "max": 0.7702,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-04-29",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-04-30",
                            "max": 0.6415,
                            "avg": 0.0752,
                            "min": 0
                        },
                        {
                            "date": "2019-05-01",
                            "max": 2.2979,
                            "avg": 0.7257,
                            "min": 0
                        },
                        {
                            "date": "2019-05-02",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-05-03",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-05-04",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-05-05",
                            "max": 1.7917,
                            "avg": 0.4343,
                            "min": 0
                        },
                        {
                            "date": "2019-05-06",
                            "max": 1.9109,
                            "avg": 0.2716,
                            "min": 0
                        },
                        {
                            "date": "2019-05-07",
                            "max": 1.7275,
                            "avg": 0.6677,
                            "min": 0.0471
                        },
                        {
                            "date": "2019-05-08",
                            "max": 0.2529,
                            "avg": 0.1369,
                            "min": 0
                        },
                        {
                            "date": "2019-05-09",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-05-10",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        },
                        {
                            "date": "2019-05-11",
                            "max": 0.4994,
                            "avg": 0.0624,
                            "min": 0
                        },
                        {
                            "date": "2019-05-12",
                            "max": 0.4994,
                            "avg": 0.1873,
                            "min": 0
                        },
                        {
                            "date": "2019-05-13",
                            "max": 0,
                            "avg": 0,
                            "min": 0
                        }
                    ],
                    "wind": [
                        {
                            "date": "2019-04-28",
                            "max": {
                                "direction": 56.47,
                                "speed": 22.9
                            },
                            "avg": {
                                "direction": 107.8,
                                "speed": 11.12
                            },
                            "min": {
                                "direction": 127.2,
                                "speed": 1.96
                            }
                        },
                        {
                            "date": "2019-04-29",
                            "max": {
                                "direction": 163.57,
                                "speed": 20.46
                            },
                            "avg": {
                                "direction": 170.56,
                                "speed": 9.25
                            },
                            "min": {
                                "direction": 203.62,
                                "speed": 2.69
                            }
                        },
                        {
                            "date": "2019-04-30",
                            "max": {
                                "direction": 191.09,
                                "speed": 27.09
                            },
                            "avg": {
                                "direction": 200.58,
                                "speed": 16.3
                            },
                            "min": {
                                "direction": 211.21,
                                "speed": 8.23
                            }
                        },
                        {
                            "date": "2019-05-01",
                            "max": {
                                "direction": 68.25,
                                "speed": 40.32
                            },
                            "avg": {
                                "direction": 53.74,
                                "speed": 24.87
                            },
                            "min": {
                                "direction": 127.01,
                                "speed": 1.77
                            }
                        },
                        {
                            "date": "2019-05-02",
                            "max": {
                                "direction": 60.89,
                                "speed": 36.69
                            },
                            "avg": {
                                "direction": 50.69,
                                "speed": 28.81
                            },
                            "min": {
                                "direction": 30.93,
                                "speed": 20.29
                            }
                        },
                        {
                            "date": "2019-05-03",
                            "max": {
                                "direction": 51.86,
                                "speed": 33.92
                            },
                            "avg": {
                                "direction": 45.18,
                                "speed": 30.1
                            },
                            "min": {
                                "direction": 39.84,
                                "speed": 26.72
                            }
                        },
                        {
                            "date": "2019-05-04",
                            "max": {
                                "direction": 42.6,
                                "speed": 28.43
                            },
                            "avg": {
                                "direction": 39.05,
                                "speed": 26.66
                            },
                            "min": {
                                "direction": 34.46,
                                "speed": 22.57
                            }
                        },
                        {
                            "date": "2019-05-05",
                            "max": {
                                "direction": 29.05,
                                "speed": 19.31
                            },
                            "avg": {
                                "direction": 27,
                                "speed": 13.12
                            },
                            "min": {
                                "direction": 39.25,
                                "speed": 8
                            }
                        },
                        {
                            "date": "2019-05-06",
                            "max": {
                                "direction": 120.75,
                                "speed": 13.62
                            },
                            "avg": {
                                "direction": 84.14,
                                "speed": 12.01
                            },
                            "min": {
                                "direction": 39.23,
                                "speed": 10.39
                            }
                        },
                        {
                            "date": "2019-05-07",
                            "max": {
                                "direction": 191.7,
                                "speed": 13.95
                            },
                            "avg": {
                                "direction": 229.23,
                                "speed": 8.19
                            },
                            "min": {
                                "direction": 276.74,
                                "speed": 3.65
                            }
                        },
                        {
                            "date": "2019-05-08",
                            "max": {
                                "direction": 44.43,
                                "speed": 19.95
                            },
                            "avg": {
                                "direction": 50.71,
                                "speed": 12.99
                            },
                            "min": {
                                "direction": 343.98,
                                "speed": 3.73
                            }
                        },
                        {
                            "date": "2019-05-09",
                            "max": {
                                "direction": 51.25,
                                "speed": 21.68
                            },
                            "avg": {
                                "direction": 48.14,
                                "speed": 20.09
                            },
                            "min": {
                                "direction": 44.81,
                                "speed": 14.12
                            }
                        },
                        {
                            "date": "2019-05-10",
                            "max": {
                                "direction": 13.73,
                                "speed": 16.44
                            },
                            "avg": {
                                "direction": 58.59,
                                "speed": 12.14
                            },
                            "min": {
                                "direction": 93.09,
                                "speed": 9.58
                            }
                        },
                        {
                            "date": "2019-05-11",
                            "max": {
                                "direction": 70.19,
                                "speed": 20.81
                            },
                            "avg": {
                                "direction": 93.28,
                                "speed": 10.86
                            },
                            "min": {
                                "direction": 106.81,
                                "speed": 3.18
                            }
                        },
                        {
                            "date": "2019-05-12",
                            "max": {
                                "direction": 64.1,
                                "speed": 26.24
                            },
                            "avg": {
                                "direction": 147.74,
                                "speed": 8.91
                            },
                            "min": {
                                "direction": 106.81,
                                "speed": 3.18
                            }
                        },
                        {
                            "date": "2019-05-13",
                            "max": {
                                "direction": 64.1,
                                "speed": 26.24
                            },
                            "avg": {
                                "direction": 56.68,
                                "speed": 22.5
                            },
                            "min": {
                                "direction": 41.83,
                                "speed": 15.04
                            }
                        }
                    ],
                    "skycon_08h_20h": [
                        {
                            "date": "2019-04-28",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-04-29",
                            "value": "CLEAR_DAY"
                        },
                        {
                            "date": "2019-04-30",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-01",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-02",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-03",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-04",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-05",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-06",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-07",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-08",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-09",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-10",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-11",
                            "value": "PARTLY_CLOUDY_DAY"
                        },
                        {
                            "date": "2019-05-12",
                            "value": "RAIN"
                        },
                        {
                            "date": "2019-05-13",
                            "value": "CLEAR_DAY"
                        }
                    ]
                },
                "alert": {
                    "status": "ok",
                    "content": []
                },
                "minutely": {
                    "status": "ok",
                    "description": "最近的降雨带在北边44公里外呢",
                    "probability": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "probability_4h": [
                        0,
                        0,
                        0.0698111206,
                        0.0792868361
                    ],
                    "datasource": "radar",
                    "precipitation_2h": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "precipitation": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }
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
    }
};