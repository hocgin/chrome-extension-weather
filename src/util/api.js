import request from '@/util/request';
import {stringify} from 'qs';
import Config from "@/util/config";
import {LOCAL_STORAGE} from "@/util/constant";

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
     * 查询当前天气
     * @param payload
     * @returns {*}
     */
    static findNowWeatherCached(payload) {
        payload = {
            // 返回周围预警
            alert: true,
            lng: payload.lng,
            lat: payload.lat,
            ...payload,
        };
        let query = stringify(payload);

        let uri = `/v2/UR8ASaplvIwavDfR/${payload.lng},${payload.lat}/weather?${query}`;
        localStorage.setItem(LOCAL_STORAGE.REQUEST_WEATHER_URI, uri);
        return this.findNowWeather(payload);
    }


    /**
     * 查询当前天气
     * @param payload
     */
    static findNowWeather(payload) {
        payload = {
            // 定制返回逐小时预报总小时数
            hourlysteps: 24,
            // 定制返回逐日预报总天数
            dailysteps: 7,
            // 返回周围预警
            alert: true,
            lng: payload.lng,
            lat: payload.lat,
            ...payload,
        };
        let query = stringify(payload);

        let uri = `/v2/UR8ASaplvIwavDfR/${payload.lng},${payload.lat}/weather?${query}`;
        return request(uri, {
            method: 'GET',
        });
    }

    /**
     * 查找简单的天气情况
     * @param payload
     */
    static findSimpleWeather(payload) {
        payload = {
            // 返回周围预警
            alert: false,
            lng: payload.lng,
            lat: payload.lat,
            ...payload,
        };
        return this.findNowWeather(payload);
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