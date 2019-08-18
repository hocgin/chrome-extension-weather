import React from 'react';
import moment from 'moment';

export default class Formatter {

    static fromNow(timeStr) {
        moment.locale('zh-cn');
        let format = `YYYY-MM-DD hh:mm`;
        let date = moment(timeStr, `YYYY-MM-DD hh:mm`);
        let now = moment();
        if (date.isSame(now.format(format))) {
            return '现在';
        }
        return date.format(`hh:mm`);
    }

    static fromNow2(timeStr) {
        moment.locale('zh-cn');
        let format = `YYYY-MM-DD`;
        let date = moment(timeStr, format);
        let today = moment();
        if (date.isSame(today.format(format))) {
            return '今天';
        } else if (date.isSame(today.add(1, 'day').format(format))) {
            return '明天';
        } else {
            return date.format(format);
        }
    }

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
        if (!aqi) {
            return {
                backgroundColor: '#fff',
                text: '',
            };
        }


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
            text: airQualityText,
        };
    }

    static hpa(pa) {
        return parseFloat(pa / 1000).toFixed(1);
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
                return '大风';
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

    static dashboard(v) {
        return ['Unknown',
            '风速+风向',
            '湿度',
            'PM25',
            'PM10',
            '气压',
            '云量',
            '能见度',
            '舒适度',
            '紫外线',
            '臭氧浓度',
            '二氧化氮浓度',
            '二氧化硫浓度',
            '一氧化碳浓度',
        ][v];
    }


    static fullDatetime(timestamp) {
        return moment(timestamp * 1).format('YYYY-MM-DD hh:mm:ss.SSS');
    }

    /**
     * 获取温度
     * [整数部分, 小数部分]
     */
    static getTemperature(temperature) {
        if (!temperature) {
            return ['N/A'];
        }

        return `${temperature}`.split('.');
    }

    /**
     * 雷达降水强度（0 ~ 1）判断降水等级：0.03~0.25 小雨(雪)， 0.25~0.35 中雨(雪)， 0.35~0.48大雨(雪)， >0.48 暴雨(雪)；
     * 获取降雨描述
     */
    static getJsDesc(v) {
        if (v >= 0.03 || v <= 0.25) {
            return `小雨`;
        } else if (v >= 0.25 || v <= 0.35) {
            return `中雨`;
        } else if (v >= 0.35 || v <= 0.48) {
            return `大雨`;
        } else if (v > 0.48) {
            return `暴雨`;
        }
        return '无';
    }

    /**
     * 解释警报码
     * [气象, 级别]
     */
    static getAlertCodeDesc(code) {
        if (!code) {
            return '';
        }

        let aa = ["台风", "暴雨", "暴雪", "寒潮", "大风", "沙尘暴", "高温", "干旱", "雷电", "冰雹", "霜冻", "大雾", "霾", "道路结冰", "森林火灾", "雷雨大风"];
        let bb = ["蓝色", "黄色", "橙色", "红色"];

        let aaCode = code.substr(0, 2);
        let bbCode = code.substr(2, 2);

        return [aa[aaCode - 1], bb[bbCode - 1]];
    }

    /**
     * 获取附近降水描述
     * @param nearest
     * @returns {string}
     */
    static getNearestJsDesc(nearest) {
        if (!nearest) {
            return '';
        }

        return `附近${Math.floor(nearest.distance)}公里有${this.getJsDesc(nearest.intensity)}`;
    }

    static getRealtime(result) {
        if (!result) {
            return {
                skycon: '',
                temperature: '',
                aqi: '',
                humidity: '',
                visibility: '',
                cloudrate: '',
                pm25: '',
                precipitation: {
                    nearest: ''
                },
                wind: {
                    speed: ''
                },
                ultraviolet: {
                    desc: ''
                },
                comfort: {
                    desc: ''
                },
            };
        }

        let realtime = result.realtime;
        console.log('realtime', realtime);
        return realtime;
    }

    static getDaily(result) {
        if (!result) {
            return {
                temperature: [{
                    min: null,
                    max: null
                }],
                comfort: [{
                    desc: '',
                }],
                ultraviolet: [{
                    desc: '',
                }],
                dressing: [{
                    desc: '',
                }],
                carWashing: [{
                    desc: '',
                }],
                coldRisk: [{
                    desc: '',
                }],

            };
        }

        let daily = result.daily;
        console.log('daily', daily);
        return daily;
    }

    static getHourly(result) {
        if (!result) {
            return {};
        }

        let hourly = result.hourly;
        console.log('hourly', hourly);
        return hourly;
    }

    static getForecastKeypoint(result) {
        if (!result) {
            return '';
        }
        return result.forecast_keypoint || '';
    }

    static getAlert(result) {
        if (!result) {
            return [];
        }

        return result.alert.content || [];
    }
}