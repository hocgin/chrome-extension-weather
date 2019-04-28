import request from '@/util/request';
import {stringify} from 'qs';

export default class API {

    static worked(payload) {
        return request(`/worked`, {
            method: 'GET',
            body: {
                ...payload,
            },
        });
    }

    /**
     * 查询所有图片
     * @param payload
     * @returns {*}
     */
    static findNowWeather(payload) {
        payload = {
            // 语言选项
            lang: 'zh_CN',
            // 时区偏移秒数
            tzshift: 28800,
            // 定制返回逐小时预报总小时数
            hourlysteps: 384,
            // 定制返回逐日预报总天数
            dailysteps: 16,
            // 返回周围预警
            alert: true,
            // 默认为公制（metric）、科学单位体系（SI） 、英制（imperial）
            unit: 'metric',
            lng: payload.lng || 118.157177,
            lat: payload.lat || 24.487104,
        };
        let query = stringify(payload);
        return request(`/v2/UR8ASaplvIwavDfR/${payload.lng},${payload.lat}/weather?${query}`, {
            method: 'GET',
        });
    }

    /**
     * 通过IP获取地址
     * @param payload
     * @returns {*}
     */
    static getAddressUseIp(payload) {
        let query = stringify({
            ...payload,
            token: '34579df219c0eadf6c9f02f610c8169b',
            datatype: 'jsonp'
        });
        return request(`http://api.ip138.com/query/?${query}`)
    }
}