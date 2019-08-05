import { message } from 'antd';
import moment from 'moment';
import data from './region2';

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
                return JSON.parse(localStorage.getItem(key));
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
     * 搜索关键词过滤
     * @param inputValue
     * @param path
     * @returns {*|boolean}
     */
    static filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }





    /**
     * 所有地区
     * @returns {*|Array}
     */
    static getAllRegions() {
        return data() || [];
    }

    /**
     * 通过值形式获取唯一城市
     * 例如:`福建省,厦门市,湖里区`
     * @param value
     * @returns {*}
     */
    static getRegion(value) {
        let labels = `${value}`.split(',');

        let data = this.getAllRegions();
        for (let i = 0; i < labels.length; i++) {
            let label = labels[i];
            let one = this.getRegionForValue(data, label);
            if (i < (labels.length - 1)) {
                data = one.children;
                continue;
            }
            return one;
        }
    }

    /**
     * 通过标签名查找对应的城市信息
     * @param data
     * @param label
     * @returns {*}
     */
    static getRegionForValue(data, label) {
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.label === label) {
                return item;
            }
        }
        return null;
    }

    /**
     * 获取默认城市
     * @returns {{isLoading: boolean, isDefault: boolean, address: string[], temperature: string, latlng: number[], desc: string}}
     */
    static getDefaultRegions() {
        let region = this.getRegion(`福建省,厦门市,湖里区`);
        return {
            id: `${region.value}`,
            address: [...region.value.split(',')],
            latlng: region.latlng,
            isDefault: true,
        };
    }
}