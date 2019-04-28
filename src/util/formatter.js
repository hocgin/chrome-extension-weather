import React from "react";
import moment from "moment";

export default class Formatter {
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
            '一氧化碳浓度'
        ][v]
    }


    static fullDatetime(timestamp) {
        return moment(timestamp * 1).format('YYYY-MM-DD hh:mm:ss.SSS');
    }
}