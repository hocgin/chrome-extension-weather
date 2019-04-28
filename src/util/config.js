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
            latitude: 0,
            longitude: 0,
            interval: 10 * 60 * 1000,
            badge: 1,
            style: 2,
            unit: 2,
            dashboard: {
                left: 2,
                right: 1,
            },
            language: 'zh-cn'
        };
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