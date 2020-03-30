import { success } from './utils/result';

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
            'status': 'ok',
            'lang': 'zh_CN',
            'result': {
                'hourly': {
                    'status': 'ok',
                    'description': '未来24小时多云',
                    'skycon': [
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 'HAZE',
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 'WIND',
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 'WIND',
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_NIGHT',
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 'CLOUDY',
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 'RAIN',
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_DAY',
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_NIGHT',
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_NIGHT',
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 'PARTLY_CLOUDY_NIGHT',
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 'CLEAR_NIGHT',
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 'CLEAR_DAY',
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'cloudrate': [
                        {
                            'value': 0.3,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 0.3,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 0.96,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 0.94,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 0.92,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 0.36,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 0.18,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 0.12,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 0.09,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 0.11,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 0.14,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 0.18,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 0.09,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 0.06,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 0.13,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 0.11,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 0.1,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 0.03,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 0.15,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 0.3,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 0.37,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 0.37,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 0.4,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 0.99,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 0.95,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 0.84,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 0.85,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 0.84,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 0.75,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 0.36,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 0.3,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 0.26,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 0.23,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 0.21,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 0.21,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 0.26,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 0.14,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 0.09,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 0.07,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 0.05,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 0.05,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 0.04,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 0.03,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 0.06,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 0.18,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'aqi': [
                        {
                            'value': 21,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 17,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 17,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 23,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 29,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 29,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 29,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 23,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 17,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 17,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 23,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 24,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 29,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'dswrf': [
                        {
                            'value': 578.7848994693,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 662.9186577346,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 719.8790537346,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 759.7650970978,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 784.7206871508,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 806.4771805307,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 720.1916205307,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 630,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 523.5228194693,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 424.7561518939,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 353.7885778408,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 1,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 22.3419803184,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 70.4662649553,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 487.1846810614,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 576.8178564246,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 665.5604203184,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 690.3893510447,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 735.0178784442,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 763.1414971341,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 784.1694615922,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 711.9226010614,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 616.28556,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 516.28556,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 420.398236743,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 350.1868145838,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 1,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 25.628556,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 77.5961300531,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 549.3514810614,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'visibility': [
                        {
                            'value': 30,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 38.75,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 37.15,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 30.51,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 27.27,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 25.63,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 23.29,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 22.19,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 20.92,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 20.71,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 21.45,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 20.47,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 21.09,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 21.15,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 20.16,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 20.2,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 18.85,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 18.04,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 18.74,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 19.26,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 19.57,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 20.87,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 24.51,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 32.3,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 38.46,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 40.53,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 38.28,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 37.01,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 35.02,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 32.49,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 30.94,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 26.52,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 22.13,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 20.32,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 21.44,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 22.58,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 22.93,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 22.95,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 21.24,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 19.63,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 19.04,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 19.02,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 18.49,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 18.43,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 19.2,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 21.13,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 24.44,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 33.03,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'humidity': [
                        {
                            'value': 0.62,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 0.71,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 0.72,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 0.74,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 0.76,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 0.77,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 0.79,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 0.8,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 0.8,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 0.82,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 0.84,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 0.82,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 0.78,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 0.73,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 0.71,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 0.71,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 0.71,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 0.72,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 0.72,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 0.73,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 0.74,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 0.76,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 0.8,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 0.8,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 0.79,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 0.79,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 0.79,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 0.8,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 0.82,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 0.84,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 0.83,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 0.81,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 0.78,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 0.73,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'pres': [
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 100061.2350272627,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 99981.2350272627,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 99930.9505472627,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 99850.9505472627,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 99850.9505472627,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 99898.6409515085,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 99930.9505472627,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 100010.9505472627,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 100058.6409515085,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 100058.6409515085,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 100058.6409515085,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 100006.8235072627,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 99929.4175830169,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 99898.6409515085,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 99929.417583017,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 99930.9505472627,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 100009.4175830169,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 100009.4175830169,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 100058.6409515085,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 100089.417583017,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 100090.9505472627,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 100061.2350272627,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 99982.7679915085,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 99901.2350272627,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 99821.2350272627,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 99770.9505472627,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 99770.9505472627,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 99821.2350272627,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 99929.417583017,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 99978.6409515085,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 100010.9505472627,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 100058.6409515085,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 100061.2350272627,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 100010.9505472627,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 99978.6409515085,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 99930.9505472627,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 99898.6409515085,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 99898.6409515085,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 99929.417583017,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 99930.9505472627,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 99978.6409515085,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 99981.2350272627,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 100009.4175830169,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'pm25': [
                        {
                            'value': 10,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 13,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 14,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 13,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 12,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 11,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 11,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 11,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 11,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 12,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 14,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 15,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 18,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 18,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 14,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 13,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 12,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 12,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 13,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 13,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 14,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 15,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 15,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 16,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 17,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 18,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 18,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 19,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 20,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 21,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'precipitation': [
                        {
                            'value': 0,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 0.0418,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 0.0582,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 0.2043,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 0,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'wind': [
                        {
                            'direction': 352,
                            'speed': 8.64,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'direction': 102.45,
                            'speed': 5.3,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'direction': 121.46,
                            'speed': 11.97,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'direction': 127.2,
                            'speed': 15.48,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'direction': 121.03,
                            'speed': 15.9,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'direction': 110.2,
                            'speed': 15.47,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'direction': 102.12,
                            'speed': 17.52,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'direction': 96.78,
                            'speed': 19.82,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'direction': 85.24,
                            'speed': 19.94,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'direction': 75.55,
                            'speed': 19.8,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'direction': 71.52,
                            'speed': 18.66,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'direction': 63.92,
                            'speed': 18.04,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'direction': 55.08,
                            'speed': 16.32,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'direction': 48.98,
                            'speed': 12.09,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'direction': 17.03,
                            'speed': 8.72,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'direction': 332.28,
                            'speed': 9.1,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'direction': 317.25,
                            'speed': 9.51,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'direction': 320.09,
                            'speed': 8.79,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'direction': 333.36,
                            'speed': 7.82,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'direction': 346.05,
                            'speed': 7.45,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'direction': 354.15,
                            'speed': 8.16,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'direction': 354.41,
                            'speed': 9.41,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'direction': 9.47,
                            'speed': 11.93,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'direction': 28,
                            'speed': 17.8,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'direction': 41.36,
                            'speed': 21.16,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'direction': 52.15,
                            'speed': 21.82,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'direction': 64.3,
                            'speed': 26.28,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'direction': 73.28,
                            'speed': 28.98,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'direction': 77.79,
                            'speed': 30.66,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'direction': 79.06,
                            'speed': 30.4,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'direction': 80.55,
                            'speed': 29.5,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'direction': 82.13,
                            'speed': 29.32,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'direction': 79.44,
                            'speed': 28.08,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'direction': 71.18,
                            'speed': 24.54,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'direction': 62.85,
                            'speed': 24.52,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'direction': 58.92,
                            'speed': 23.58,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'direction': 54.76,
                            'speed': 21.26,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'direction': 43.71,
                            'speed': 17.07,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'direction': 37.71,
                            'speed': 13.05,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'direction': 22.3,
                            'speed': 8.89,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'direction': 351.91,
                            'speed': 6.83,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'direction': 325.19,
                            'speed': 7.39,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'direction': 312.44,
                            'speed': 8.05,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'direction': 315.66,
                            'speed': 6.83,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'direction': 328.99,
                            'speed': 7.75,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'direction': 324.19,
                            'speed': 8.28,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'direction': 337.3,
                            'speed': 8.55,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'direction': 16.56,
                            'speed': 11,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                    'temperature': [
                        {
                            'value': 30.79,
                            'datetime': '2019-08-04 10:00',
                        },
                        {
                            'value': 31.82,
                            'datetime': '2019-08-04 11:00',
                        },
                        {
                            'value': 31.86,
                            'datetime': '2019-08-04 12:00',
                        },
                        {
                            'value': 32.89,
                            'datetime': '2019-08-04 13:00',
                        },
                        {
                            'value': 32.93,
                            'datetime': '2019-08-04 14:00',
                        },
                        {
                            'value': 32.97,
                            'datetime': '2019-08-04 15:00',
                        },
                        {
                            'value': 32,
                            'datetime': '2019-08-04 16:00',
                        },
                        {
                            'value': 31,
                            'datetime': '2019-08-04 17:00',
                        },
                        {
                            'value': 30,
                            'datetime': '2019-08-04 18:00',
                        },
                        {
                            'value': 28,
                            'datetime': '2019-08-04 19:00',
                        },
                        {
                            'value': 28,
                            'datetime': '2019-08-04 20:00',
                        },
                        {
                            'value': 28,
                            'datetime': '2019-08-04 21:00',
                        },
                        {
                            'value': 28,
                            'datetime': '2019-08-04 22:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-04 23:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-05 00:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-05 01:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-05 02:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-05 03:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-05 04:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-05 05:00',
                        },
                        {
                            'value': 27,
                            'datetime': '2019-08-05 06:00',
                        },
                        {
                            'value': 28,
                            'datetime': '2019-08-05 07:00',
                        },
                        {
                            'value': 29.42,
                            'datetime': '2019-08-05 08:00',
                        },
                        {
                            'value': 30.84,
                            'datetime': '2019-08-05 09:00',
                        },
                        {
                            'value': 31.19,
                            'datetime': '2019-08-05 10:00',
                        },
                        {
                            'value': 32,
                            'datetime': '2019-08-05 11:00',
                        },
                        {
                            'value': 32.51,
                            'datetime': '2019-08-05 12:00',
                        },
                        {
                            'value': 33,
                            'datetime': '2019-08-05 13:00',
                        },
                        {
                            'value': 32.26,
                            'datetime': '2019-08-05 14:00',
                        },
                        {
                            'value': 31.59,
                            'datetime': '2019-08-05 15:00',
                        },
                        {
                            'value': 31.07,
                            'datetime': '2019-08-05 16:00',
                        },
                        {
                            'value': 30.18,
                            'datetime': '2019-08-05 17:00',
                        },
                        {
                            'value': 29.24,
                            'datetime': '2019-08-05 18:00',
                        },
                        {
                            'value': 28.25,
                            'datetime': '2019-08-05 19:00',
                        },
                        {
                            'value': 28.15,
                            'datetime': '2019-08-05 20:00',
                        },
                        {
                            'value': 28.15,
                            'datetime': '2019-08-05 21:00',
                        },
                        {
                            'value': 28.05,
                            'datetime': '2019-08-05 22:00',
                        },
                        {
                            'value': 27.97,
                            'datetime': '2019-08-05 23:00',
                        },
                        {
                            'value': 27.52,
                            'datetime': '2019-08-06 00:00',
                        },
                        {
                            'value': 27.19,
                            'datetime': '2019-08-06 01:00',
                        },
                        {
                            'value': 26.88,
                            'datetime': '2019-08-06 02:00',
                        },
                        {
                            'value': 26.64,
                            'datetime': '2019-08-06 03:00',
                        },
                        {
                            'value': 26.39,
                            'datetime': '2019-08-06 04:00',
                        },
                        {
                            'value': 26,
                            'datetime': '2019-08-06 05:00',
                        },
                        {
                            'value': 26.3,
                            'datetime': '2019-08-06 06:00',
                        },
                        {
                            'value': 26.73,
                            'datetime': '2019-08-06 07:00',
                        },
                        {
                            'value': 27.95,
                            'datetime': '2019-08-06 08:00',
                        },
                        {
                            'value': 29.43,
                            'datetime': '2019-08-06 09:00',
                        },
                    ],
                },
                'realtime': {
                    'status': 'ok',
                    'o3': 56,
                    'co': 0.5,
                    'temperature': 30.79,
                    'pm10': 21,
                    'skycon': 'PARTLY_CLOUDY_NIGHT',
                    'cloudrate': 0.3,
                    'precipitation': {
                        'nearest': {
                            'status': 'ok',
                            'distance': 55.66,
                            'intensity': 0,
                        },
                        'local': {
                            'status': 'ok',
                            'intensity': 0,
                            'datasource': 'radar',
                        },
                    },
                    'dswrf': 578.8,
                    'visibility': 30,
                    'humidity': 0.62,
                    'so2': 21,
                    'ultraviolet': {
                        'index': 7,
                        'desc': '强',
                    },
                    'pres': 100090.95,
                    'aqi': 21,
                    'pm25': 10,
                    'no2': 21,
                    'apparent_temperature': 33.2,
                    'comfort': {
                        'index': 3,
                        'desc': '热',
                    },
                    'wind': {
                        'direction': 352,
                        'speed': 8.64,
                    },
                },
                'forecast_keypoint': '未来两小时不会下雨，放心出门吧',
                'primary': 0,
                'daily': {
                    'status': 'ok',
                    'comfort': [
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-04',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-05',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-06',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-07',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-08',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-09',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-10',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-11',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-12',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-13',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-14',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-15',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-16',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-17',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-18',
                        },
                        {
                            'index': '0',
                            'desc': '闷热',
                            'datetime': '2019-08-19',
                        },
                    ],
                    'skycon_20h_32h': [
                        {
                            'date': '2019-08-04',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-05',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-06',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-07',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-08',
                            'value': 'PARTLY_CLOUDY_NIGHT',
                        },
                        {
                            'date': '2019-08-09',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-10',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-11',
                            'value': 'CLOUDY',
                        },
                        {
                            'date': '2019-08-12',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-13',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-14',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-15',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-16',
                            'value': 'PARTLY_CLOUDY_NIGHT',
                        },
                        {
                            'date': '2019-08-17',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-18',
                            'value': 'CLEAR_NIGHT',
                        },
                        {
                            'date': '2019-08-19',
                            'value': 'CLOUDY',
                        },
                    ],
                    'temperature': [
                        {
                            'date': '2019-08-04',
                            'max': 32.97,
                            'avg': 30.38,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 33,
                            'avg': 29.12,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 32,
                            'avg': 28.75,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 33,
                            'avg': 28.85,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 34,
                            'avg': 29.35,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 34,
                            'avg': 29.93,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 33.41,
                            'avg': 29.75,
                            'min': 26.6,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 31.39,
                            'avg': 29.38,
                            'min': 27,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 30.4,
                            'avg': 28.88,
                            'min': 27,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 29.27,
                            'avg': 27.89,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 30,
                            'avg': 27.91,
                            'min': 25.96,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 29,
                            'avg': 27.75,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 30,
                            'avg': 27.92,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 29,
                            'avg': 27.54,
                            'min': 25.95,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 29,
                            'avg': 27.4,
                            'min': 25.85,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 28.93,
                            'avg': 27.28,
                            'min': 25.48,
                        },
                    ],
                    'dswrf': [
                        {
                            'date': '2019-08-04',
                            'max': 806.5,
                            'avg': 497.5,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 784.2,
                            'avg': 308.8,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 780.7,
                            'avg': 302.6,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 804,
                            'avg': 319.1,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 826.6,
                            'avg': 318.2,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 803.4,
                            'avg': 284.7,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 198.6,
                            'avg': 60.2,
                            'min': -51.7,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 388.9,
                            'avg': 125.5,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 776.8,
                            'avg': 282.8,
                            'min': -47.5,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 802.5,
                            'avg': 319.1,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 827.5,
                            'avg': 342.2,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 832.7,
                            'avg': 344.7,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 826.3,
                            'avg': 341.6,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 820.8,
                            'avg': 338.8,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 817.2,
                            'avg': 337,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 780.7,
                            'avg': 318.8,
                            'min': 0,
                        },
                    ],
                    'cloudrate': [
                        {
                            'date': '2019-08-04',
                            'max': 1,
                            'avg': 0.34,
                            'min': 0.06,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 0.99,
                            'avg': 0.38,
                            'min': 0.03,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 0.74,
                            'avg': 0.2,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 0.33,
                            'avg': 0.08,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 1,
                            'avg': 0.24,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 1,
                            'avg': 0.95,
                            'min': 0.78,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 1,
                            'avg': 1,
                            'min': 1,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 1,
                            'avg': 1,
                            'min': 0.99,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 1,
                            'avg': 0.84,
                            'min': 0.54,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 0.91,
                            'avg': 0.35,
                            'min': 0.02,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 0.05,
                            'avg': 0.04,
                            'min': 0.02,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 0.57,
                            'avg': 0.32,
                            'min': 0.04,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 0.65,
                            'avg': 0.37,
                            'min': 0.11,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 0.65,
                            'avg': 0.32,
                            'min': 0.01,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 0.17,
                            'avg': 0.1,
                            'min': 0.01,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 0.97,
                            'avg': 0.54,
                            'min': 0.05,
                        },
                    ],
                    'aqi': [
                        {
                            'date': '2019-08-04',
                            'max': 48,
                            'avg': 19.07,
                            'min': 15,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 30,
                            'avg': 24.67,
                            'min': 17,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 30,
                            'avg': 24.12,
                            'min': 17,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 29,
                            'avg': 22.83,
                            'min': 19,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 36,
                            'avg': 28.42,
                            'min': 23,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 34,
                            'avg': 23.17,
                            'min': 16,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 24,
                            'avg': 16.67,
                            'min': 11,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 23,
                            'avg': 8.96,
                            'min': 4,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 20,
                            'avg': 15.38,
                            'min': 10,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 29,
                            'avg': 19.79,
                            'min': 13,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 40,
                            'avg': 28.92,
                            'min': 20,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 41,
                            'avg': 32.5,
                            'min': 26,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 39,
                            'avg': 26.62,
                            'min': 14,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 41,
                            'avg': 35.21,
                            'min': 27,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 35,
                            'avg': 20.88,
                            'min': 12,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 48,
                            'avg': 21.33,
                            'min': 15,
                        },
                    ],
                    'skycon': [
                        {
                            'date': '2019-08-04',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-05',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-06',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-07',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-08',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-09',
                            'value': 'CLOUDY',
                        },
                        {
                            'date': '2019-08-10',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-11',
                            'value': 'CLOUDY',
                        },
                        {
                            'date': '2019-08-12',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-13',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-14',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-15',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-16',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-17',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-18',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-19',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                    ],
                    'visibility': [
                        {
                            'date': '2019-08-04',
                            'max': 38.75,
                            'avg': 25.76,
                            'min': 20.47,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 40.53,
                            'avg': 26,
                            'min': 18.04,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 40.72,
                            'avg': 27.67,
                            'min': 18.43,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 43.44,
                            'avg': 27.51,
                            'min': 18.49,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 43.44,
                            'avg': 27.63,
                            'min': 18.14,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 43.44,
                            'avg': 33.2,
                            'min': 18.03,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 36.21,
                            'avg': 26.3,
                            'min': 18.93,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 43.44,
                            'avg': 32.69,
                            'min': 25.25,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 43.02,
                            'avg': 26.25,
                            'min': 19.23,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 32.88,
                            'avg': 23.82,
                            'min': 18.66,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 30.81,
                            'avg': 24.16,
                            'min': 16.55,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 24.77,
                            'avg': 20.41,
                            'min': 15.89,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 25.4,
                            'avg': 20.78,
                            'min': 15.89,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 34.32,
                            'avg': 26.44,
                            'min': 16.26,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 30.47,
                            'avg': 25,
                            'min': 19.33,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 26.39,
                            'avg': 23.72,
                            'min': 19.61,
                        },
                    ],
                    'humidity': [
                        {
                            'date': '2019-08-04',
                            'max': 0.82,
                            'avg': 0.77,
                            'min': 0.62,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 0.84,
                            'avg': 0.78,
                            'min': 0.71,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 0.84,
                            'avg': 0.77,
                            'min': 0.71,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 0.83,
                            'avg': 0.77,
                            'min': 0.7,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 0.84,
                            'avg': 0.77,
                            'min': 0.68,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 0.84,
                            'avg': 0.71,
                            'min': 0.56,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 0.83,
                            'avg': 0.78,
                            'min': 0.72,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 0.77,
                            'avg': 0.72,
                            'min': 0.64,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 0.83,
                            'avg': 0.78,
                            'min': 0.7,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 0.83,
                            'avg': 0.79,
                            'min': 0.73,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 0.86,
                            'avg': 0.79,
                            'min': 0.74,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 0.87,
                            'avg': 0.82,
                            'min': 0.78,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 0.87,
                            'avg': 0.82,
                            'min': 0.77,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 0.87,
                            'avg': 0.78,
                            'min': 0.73,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 0.82,
                            'avg': 0.78,
                            'min': 0.74,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 0.82,
                            'avg': 0.78,
                            'min': 0.76,
                        },
                    ],
                    'astro': [
                        {
                            'date': '2019-08-04',
                            'sunset': {
                                'time': '18:50',
                            },
                            'sunrise': {
                                'time': '05:36',
                            },
                        },
                        {
                            'date': '2019-08-05',
                            'sunset': {
                                'time': '18:49',
                            },
                            'sunrise': {
                                'time': '05:37',
                            },
                        },
                        {
                            'date': '2019-08-06',
                            'sunset': {
                                'time': '18:48',
                            },
                            'sunrise': {
                                'time': '05:37',
                            },
                        },
                        {
                            'date': '2019-08-07',
                            'sunset': {
                                'time': '18:48',
                            },
                            'sunrise': {
                                'time': '05:38',
                            },
                        },
                        {
                            'date': '2019-08-08',
                            'sunset': {
                                'time': '18:47',
                            },
                            'sunrise': {
                                'time': '05:38',
                            },
                        },
                        {
                            'date': '2019-08-09',
                            'sunset': {
                                'time': '18:46',
                            },
                            'sunrise': {
                                'time': '05:39',
                            },
                        },
                        {
                            'date': '2019-08-10',
                            'sunset': {
                                'time': '18:46',
                            },
                            'sunrise': {
                                'time': '05:39',
                            },
                        },
                        {
                            'date': '2019-08-11',
                            'sunset': {
                                'time': '18:45',
                            },
                            'sunrise': {
                                'time': '05:40',
                            },
                        },
                        {
                            'date': '2019-08-12',
                            'sunset': {
                                'time': '18:44',
                            },
                            'sunrise': {
                                'time': '05:40',
                            },
                        },
                        {
                            'date': '2019-08-13',
                            'sunset': {
                                'time': '18:43',
                            },
                            'sunrise': {
                                'time': '05:40',
                            },
                        },
                        {
                            'date': '2019-08-14',
                            'sunset': {
                                'time': '18:43',
                            },
                            'sunrise': {
                                'time': '05:41',
                            },
                        },
                        {
                            'date': '2019-08-15',
                            'sunset': {
                                'time': '18:42',
                            },
                            'sunrise': {
                                'time': '05:41',
                            },
                        },
                        {
                            'date': '2019-08-16',
                            'sunset': {
                                'time': '18:41',
                            },
                            'sunrise': {
                                'time': '05:42',
                            },
                        },
                        {
                            'date': '2019-08-17',
                            'sunset': {
                                'time': '18:40',
                            },
                            'sunrise': {
                                'time': '05:42',
                            },
                        },
                        {
                            'date': '2019-08-18',
                            'sunset': {
                                'time': '18:39',
                            },
                            'sunrise': {
                                'time': '05:42',
                            },
                        },
                        {
                            'date': '2019-08-19',
                            'sunset': {
                                'time': '18:38',
                            },
                            'sunrise': {
                                'time': '05:43',
                            },
                        },
                    ],
                    'coldRisk': [
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-04',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-05',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-06',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-07',
                        },
                        {
                            'index': '4',
                            'desc': '极易发',
                            'datetime': '2019-08-08',
                        },
                        {
                            'index': '4',
                            'desc': '极易发',
                            'datetime': '2019-08-09',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-10',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-11',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-12',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-13',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-14',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-15',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-16',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-17',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-18',
                        },
                        {
                            'index': '3',
                            'desc': '易发',
                            'datetime': '2019-08-19',
                        },
                    ],
                    'ultraviolet': [
                        {
                            'index': '2',
                            'desc': '弱',
                            'datetime': '2019-08-04',
                        },
                        {
                            'index': '1',
                            'desc': '最弱',
                            'datetime': '2019-08-05',
                        },
                        {
                            'index': '3',
                            'desc': '中等',
                            'datetime': '2019-08-06',
                        },
                        {
                            'index': '4',
                            'desc': '强',
                            'datetime': '2019-08-07',
                        },
                        {
                            'index': '5',
                            'desc': '很强',
                            'datetime': '2019-08-08',
                        },
                        {
                            'index': '1',
                            'desc': '最弱',
                            'datetime': '2019-08-09',
                        },
                        {
                            'index': '1',
                            'desc': '最弱',
                            'datetime': '2019-08-10',
                        },
                        {
                            'index': '1',
                            'desc': '最弱',
                            'datetime': '2019-08-11',
                        },
                        {
                            'index': '2',
                            'desc': '弱',
                            'datetime': '2019-08-12',
                        },
                        {
                            'index': '3',
                            'desc': '中等',
                            'datetime': '2019-08-13',
                        },
                        {
                            'index': '5',
                            'desc': '很强',
                            'datetime': '2019-08-14',
                        },
                        {
                            'index': '4',
                            'desc': '强',
                            'datetime': '2019-08-15',
                        },
                        {
                            'index': '4',
                            'desc': '强',
                            'datetime': '2019-08-16',
                        },
                        {
                            'index': '3',
                            'desc': '中等',
                            'datetime': '2019-08-17',
                        },
                        {
                            'index': '4',
                            'desc': '强',
                            'datetime': '2019-08-18',
                        },
                        {
                            'index': '4',
                            'desc': '强',
                            'datetime': '2019-08-19',
                        },
                    ],
                    'pres': [
                        {
                            'date': '2019-08-04',
                            'max': 100218.64,
                            'avg': 99999.78,
                            'min': 99850.95,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 100090.95,
                            'avg': 99969.63,
                            'min': 99770.95,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 100010.95,
                            'avg': 99875.72,
                            'min': 99610.95,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 99978.64,
                            'avg': 99742.05,
                            'min': 99450.95,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 99929.42,
                            'avg': 99582.36,
                            'min': 99290.95,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 99450.95,
                            'avg': 99101.66,
                            'min': 98810.95,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 98732.48,
                            'avg': 98618.59,
                            'min': 98461.24,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 98970.95,
                            'avg': 98718.98,
                            'min': 98570.95,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 99370.95,
                            'avg': 99175.44,
                            'min': 98890.95,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 99901.24,
                            'avg': 99541.86,
                            'min': 99290.95,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 100010.95,
                            'avg': 99900.76,
                            'min': 99769.42,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 100010.95,
                            'avg': 99966.09,
                            'min': 99930.95,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 100058.64,
                            'avg': 99923.98,
                            'min': 99821.24,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 100298.64,
                            'avg': 100149.94,
                            'min': 100058.64,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 100329.42,
                            'avg': 100246.34,
                            'min': 100170.95,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 100409.42,
                            'avg': 100345.33,
                            'min': 100301.24,
                        },
                    ],
                    'pm25': [
                        {
                            'date': '2019-08-04',
                            'max': 18,
                            'avg': 12.93,
                            'min': 6,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 21,
                            'avg': 17.21,
                            'min': 12,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 21,
                            'avg': 16.83,
                            'min': 12,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 20,
                            'avg': 15.96,
                            'min': 13,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 25,
                            'avg': 19.88,
                            'min': 16,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 24,
                            'avg': 16.21,
                            'min': 11,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 17,
                            'avg': 11.62,
                            'min': 8,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 16,
                            'avg': 6.33,
                            'min': 3,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 14,
                            'avg': 10.75,
                            'min': 7,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 20,
                            'avg': 13.88,
                            'min': 9,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 28,
                            'avg': 20.29,
                            'min': 14,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 29,
                            'avg': 22.75,
                            'min': 18,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 27,
                            'avg': 18.62,
                            'min': 10,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 29,
                            'avg': 24.62,
                            'min': 19,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 10,
                            'avg': 7.25,
                            'min': 4,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 18,
                            'avg': 11.62,
                            'min': 6,
                        },
                    ],
                    'dressing': [
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-04',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-05',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-06',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-07',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-08',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-09',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-10',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-11',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-12',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-13',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-14',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-15',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-16',
                        },
                        {
                            'index': '2',
                            'desc': '很热',
                            'datetime': '2019-08-17',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-18',
                        },
                        {
                            'index': '3',
                            'desc': '热',
                            'datetime': '2019-08-19',
                        },
                    ],
                    'carWashing': [
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-04',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-05',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-06',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-07',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-08',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-09',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-10',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-11',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-12',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-13',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-14',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-15',
                        },
                        {
                            'index': '3',
                            'desc': '较不适宜',
                            'datetime': '2019-08-16',
                        },
                        {
                            'index': '1',
                            'desc': '适宜',
                            'datetime': '2019-08-17',
                        },
                        {
                            'index': '1',
                            'desc': '适宜',
                            'datetime': '2019-08-18',
                        },
                        {
                            'index': '1',
                            'desc': '适宜',
                            'datetime': '2019-08-19',
                        },
                    ],
                    'precipitation': [
                        {
                            'date': '2019-08-04',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-05',
                            'max': 0.2043,
                            'avg': 0.0127,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-06',
                            'max': 0.2537,
                            'avg': 0.0159,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-07',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-08',
                            'max': 0.3415,
                            'avg': 0.0142,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-09',
                            'max': 0.3415,
                            'avg': 0.0427,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-10',
                            'max': 2.6331,
                            'avg': 0.8716,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-11',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-12',
                            'max': 1.0147,
                            'avg': 0.406,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-13',
                            'max': 0.7814,
                            'avg': 0.1646,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-14',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-15',
                            'max': 0.2146,
                            'avg': 0.0805,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-16',
                            'max': 0.2146,
                            'avg': 0.0268,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-17',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-18',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                        {
                            'date': '2019-08-19',
                            'max': 0,
                            'avg': 0,
                            'min': 0,
                        },
                    ],
                    'wind': [
                        {
                            'date': '2019-08-04',
                            'max': {
                                'direction': 85.24,
                                'speed': 19.94,
                            },
                            'avg': {
                                'direction': 72.36,
                                'speed': 13.2,
                            },
                            'min': {
                                'direction': 26.63,
                                'speed': 3.14,
                            },
                        },
                        {
                            'date': '2019-08-05',
                            'max': {
                                'direction': 77.79,
                                'speed': 30.66,
                            },
                            'avg': {
                                'direction': 54.76,
                                'speed': 18.99,
                            },
                            'min': {
                                'direction': 346.05,
                                'speed': 7.45,
                            },
                        },
                        {
                            'date': '2019-08-06',
                            'max': {
                                'direction': 77.17,
                                'speed': 29.62,
                            },
                            'avg': {
                                'direction': 54.52,
                                'speed': 18.06,
                            },
                            'min': {
                                'direction': 351.91,
                                'speed': 6.83,
                            },
                        },
                        {
                            'date': '2019-08-07',
                            'max': {
                                'direction': 78.84,
                                'speed': 33,
                            },
                            'avg': {
                                'direction': 58.65,
                                'speed': 19.54,
                            },
                            'min': {
                                'direction': 353.77,
                                'speed': 4.68,
                            },
                        },
                        {
                            'date': '2019-08-08',
                            'max': {
                                'direction': 83.96,
                                'speed': 25.83,
                            },
                            'avg': {
                                'direction': 60.08,
                                'speed': 13.51,
                            },
                            'min': {
                                'direction': 61.3,
                                'speed': 6.15,
                            },
                        },
                        {
                            'date': '2019-08-09',
                            'max': {
                                'direction': 359.7,
                                'speed': 23.71,
                            },
                            'avg': {
                                'direction': 309.69,
                                'speed': 12.64,
                            },
                            'min': {
                                'direction': 256.97,
                                'speed': 7.85,
                            },
                        },
                        {
                            'date': '2019-08-10',
                            'max': {
                                'direction': 278.31,
                                'speed': 21.91,
                            },
                            'avg': {
                                'direction': 265.9,
                                'speed': 12.57,
                            },
                            'min': {
                                'direction': 283.42,
                                'speed': 3.18,
                            },
                        },
                        {
                            'date': '2019-08-11',
                            'max': {
                                'direction': 266.5,
                                'speed': 25.27,
                            },
                            'avg': {
                                'direction': 259.42,
                                'speed': 19.41,
                            },
                            'min': {
                                'direction': 263.44,
                                'speed': 13,
                            },
                        },
                        {
                            'date': '2019-08-12',
                            'max': {
                                'direction': 288.99,
                                'speed': 15.22,
                            },
                            'avg': {
                                'direction': 247.37,
                                'speed': 9.14,
                            },
                            'min': {
                                'direction': 97.66,
                                'speed': 2.08,
                            },
                        },
                        {
                            'date': '2019-08-13',
                            'max': {
                                'direction': 123.34,
                                'speed': 15.53,
                            },
                            'avg': {
                                'direction': 104.53,
                                'speed': 9.35,
                            },
                            'min': {
                                'direction': 90.91,
                                'speed': 2.5,
                            },
                        },
                        {
                            'date': '2019-08-14',
                            'max': {
                                'direction': 139.46,
                                'speed': 14.79,
                            },
                            'avg': {
                                'direction': 157.97,
                                'speed': 10.85,
                            },
                            'min': {
                                'direction': 12.93,
                                'speed': 4.4,
                            },
                        },
                        {
                            'date': '2019-08-15',
                            'max': {
                                'direction': 175.24,
                                'speed': 19.06,
                            },
                            'avg': {
                                'direction': 190.8,
                                'speed': 14.96,
                            },
                            'min': {
                                'direction': 224.56,
                                'speed': 7.74,
                            },
                        },
                        {
                            'date': '2019-08-16',
                            'max': {
                                'direction': 170.27,
                                'speed': 17.01,
                            },
                            'avg': {
                                'direction': 176.13,
                                'speed': 12.92,
                            },
                            'min': {
                                'direction': 173.79,
                                'speed': 7.81,
                            },
                        },
                        {
                            'date': '2019-08-17',
                            'max': {
                                'direction': 123.14,
                                'speed': 14.82,
                            },
                            'avg': {
                                'direction': 99.01,
                                'speed': 13.89,
                            },
                            'min': {
                                'direction': 173.79,
                                'speed': 7.81,
                            },
                        },
                        {
                            'date': '2019-08-18',
                            'max': {
                                'direction': 95.3,
                                'speed': 24.18,
                            },
                            'avg': {
                                'direction': 75.82,
                                'speed': 19.72,
                            },
                            'min': {
                                'direction': 52.82,
                                'speed': 14.67,
                            },
                        },
                        {
                            'date': '2019-08-19',
                            'max': {
                                'direction': 94.48,
                                'speed': 23.38,
                            },
                            'avg': {
                                'direction': 75.87,
                                'speed': 19.58,
                            },
                            'min': {
                                'direction': 40.93,
                                'speed': 15.45,
                            },
                        },
                    ],
                    'skycon_08h_20h': [
                        {
                            'date': '2019-08-04',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-05',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-06',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-07',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-08',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-09',
                            'value': 'CLOUDY',
                        },
                        {
                            'date': '2019-08-10',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-11',
                            'value': 'CLOUDY',
                        },
                        {
                            'date': '2019-08-12',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-13',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-14',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-15',
                            'value': 'RAIN',
                        },
                        {
                            'date': '2019-08-16',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-17',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                        {
                            'date': '2019-08-18',
                            'value': 'CLEAR_DAY',
                        },
                        {
                            'date': '2019-08-19',
                            'value': 'PARTLY_CLOUDY_DAY',
                        },
                    ],
                },
                'alert': {
                    'status': 'ok',
                    'content': [
                        {
                            'province': '福建省',
                            'status': '预警中',
                            'code': '0203',
                            'description': '厦门市气象台2019年8月18日17时50分发布暴雨橙色预警信号：预计未来3小时我市部分镇街和沿海有50毫米以上的强降水，并伴有雷电和7～9级大风，请有关单位和人员作好防范准备。（数据来源：国家预警信息发布中心）',
                            'alertId': '35020041600000_20190818175030',
                            'city': '厦门市',
                            'adcode': '350200',
                            'pubtimestamp': 1566121830,
                            'latlon': [
                                24.479833,
                                118.089425,
                            ],
                            'county': '无',
                            'source': '国家预警信息发布中心',
                            'request_status': 'ok',
                            'location': '福建省厦门市',
                            'title': '厦门市气象台发布暴雨橙色预警[II级/严重]',
                            'regionId': 'unknown',
                        },
                        {
                            'province': '福建省',
                            'status': '预警中',
                            'code': '0902',
                            'description': '厦门市气象台2019年08月18日18时55分继续发布雷电黄色预警信号：预计未来6小时我市部分镇街及沿海仍有雷电活动，局地伴有短时强降水和6-8级大风。请注意防范。（数据来源：国家预警信息发布中心）',
                            'alertId': '35020041600000_20190818185630',
                            'city': '厦门市',
                            'adcode': '350200',
                            'pubtimestamp': 1566125790,
                            'latlon': [
                                24.479833,
                                118.089425,
                            ],
                            'county': '无',
                            'source': '国家预警信息发布中心',
                            'request_status': 'ok',
                            'location': '福建省厦门市',
                            'title': '厦门市气象台发布雷电黄色预警[III级/较重]',
                            'regionId': 'unknown',
                        },
                    ],
                },
                'minutely': {
                    'status': 'ok',
                    'description': '未来两小时不会下雨，放心出门吧',
                    'probability': [
                        0,
                        0,
                        0,
                        0,
                    ],
                    'probability_4h': [
                        0,
                        0,
                        0.1526043564,
                        0.1703136861,
                    ],
                    'datasource': 'radar',
                    'precipitation_2h': [
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
                        0,
                    ],
                    'precipitation': [
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
                    ],
                },
            },
            'server_time': 1564885198,
            'api_status': 'active',
            'tzshift': 28800,
            'api_version': 'v2.2',
            'unit': 'metric',
            'location': [
                24.487103,
                118.157139,
            ],
        });
    },

    'GET /v3/ip': (req, res) => {
        return res.json({
            'status': '1',
            'info': 'OK',
            'infocode': '10000',
            'province': '福建省',
            'city': '泉州市',
            'adcode': '350500',
            'rectangle': '118.4247422,24.78335456;118.7353957,25.00952156',
        });
    },
};