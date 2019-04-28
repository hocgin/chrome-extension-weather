import request from '@/util/request';
import {stringify} from 'qs';
import Config from "@/util/config";

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
            ...payload,
            // 定制返回逐小时预报总小时数
            hourlysteps: 384,
            // 定制返回逐日预报总天数
            dailysteps: 16,
            // 返回周围预警
            alert: true,
            lng: payload.lng,
            lat: payload.lat,
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
        return request(`http://api.ip138.com/query/?${query}`, {
            expirys: 10 * 60 * 1000
        })
    }

    /**
     * IP定位
     * @param payload
     * @returns {*}
     */
    static findLngLatUseIp(payload) {
        let query = stringify({
            key: "a17f4063f58d7fc70de9a205e22f2450"
        });
        let host = Config.isDevUse('https://restapi.amap.com', Config.host());
        return request(`${host}/v3/ip?${query}`, {
            expirys: 24 * 60 * 60 * 1000
        });
    }
}