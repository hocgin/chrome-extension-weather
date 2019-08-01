import {message} from 'antd';
import moment from "moment";
import data from './region';

export default class Util {

    /**
     * 自动输出第一条错误信息
     * @param errors
     */
    static showErrorHasMessage(errors) {
        let keys = Object.keys(errors || {});
        if (keys.length > 0) {
            let error = errors[keys[0]];
            message.error(error.errors[0].message);
        }
    }

    /**
     * 如果没有过期，则获取缓存数据
     * @param key
     * @returns {*}
     */
    static getCacheResponse(key) {
        let expiredKey = `${key}_EXPIRED`;
        let expiredTimestamp = localStorage.getItem(expiredKey);
        try {
            if (!moment().isAfter(expiredTimestamp * 1)) {
                return JSON.parse(localStorage.getItem(key))
            }
        } catch (e) {
            localStorage.removeItem(expiredKey);
        }
        return null;
    }

    /**
     * 缓存数据
     * @param key
     * @param data
     * @param expired
     */
    static putCacheResponse(key, data, expired = 0) {
        let expiredKey = `${key}_EXPIRED`;
        localStorage.setItem(expiredKey, new Date().getTime() + expired);
        localStorage.setItem(key, JSON.stringify(data || '{}'));
    }

    /**
     * 进行缓存请求
     * @param key
     * @param expired
     * @param request
     * @returns {*}
     */
    static cacheResponse(key, expired = 0, request) {
        let response = Util.getCacheResponse(key);
        if (response) {
            return response;
        }
        response = request();
        Util.putCacheResponse(key, response, expired);
        return response;
    }

    /**
     * 加载中
     */
    static isLoading(isLoading) {
        return isLoading === undefined || isLoading === true;
    }

    /**
     * 搜索地区
     * @param keyword
     * @returns {{}}
     */
    static search(keyword) {
        return (data() || []).filter(({ name }) => name.indexOf(keyword) > 0);
    }


}