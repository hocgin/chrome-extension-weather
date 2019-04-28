import {LOCAL_STORAGE} from "@/util/constant";

export default class Config {
    /**
     * 服务器地址
     * @returns {string}
     */
    static host() {
        if (Config.isDev()) {
            return `http://${document.location.host}`;
        }
        return 'http://api.caiyunapp.com';
    }

    /**
     * 默认配置参数
     */
    static defaultConfig() {
        return {
            auto: false,
            latitude: 114.109497,
            longitude: 114.109497,
            interval: 10 * 60 * 1000,
            badge: 1,
            style: 2,
            // 默认为公制（metric）、科学单位体系（SI） 、英制（imperial）
            unit: "metric",
            dashboard: {
                left: 6,
                right: 1,
            },
            // 语言选项
            language: "zh_CN",
            // 时区偏移秒数
            tzshift: 28800,
        };
    }

    /**
     * 获取用户配置
     * @returns {{auto: *, latitude: *, longitude: *, interval: *, badge: *, style: *, unit: *, dashboard: *, language: *}}
     */
    static getUserConfig() {
        let customConfig = {};
        try {
            customConfig = JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONFIG) || `{}`);
        } catch (e) {
            console.error('获取自定义配置时发生错误, 可能为JSON解析出错', e);
        }
        // 默认配置
        let defaultConfig = Config.defaultConfig() || {};

        return {
            ...defaultConfig,
            ...customConfig
        };
    }

    /**
     * 抉择值
     * @param prod
     * @param dev
     * @returns {*}
     */
    static isDevUse(prod, dev) {
        return Config.isDev() ? dev : prod;
    }

    /**
     * 是否开发模式
     * @returns {boolean}
     */
    static isDev() {
        if (`${document.location.host}`.startsWith('127.0.0.1')) {
            return true;
        }
        return false;
    }
}