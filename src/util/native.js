import Formatter from "@/util/formatter";
import Config from "@/util/config";

export default class Native {
    static worked() {
        return "ok";
    }

    static addListeners() {
        if (Native.isChromeExtension()) {
            window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
                Native.getLocation(({lat, lng}) => {
                    window.g_app._store.dispatch({
                        type: 'apps/findGeneralWeather',
                        payload: {
                            lng,
                            lat
                        },
                    });
                });
                sendResponse({
                    userConfig: Config.getUserConfig()
                });
                return true;
            });
        }
        console.log('挂载 Native 监听');
    }

    /**
     * 获取当前位置
     * @param callback
     */
    static getLocation(callback) {
        let userConfig = Config.getUserConfig();

        if (!userConfig.auto) {
            console.log('[位置] 用户设置的位置', userConfig.longitude, userConfig.latitude);
            callback({lat: userConfig.latitude || 0, lng: userConfig.longitude || 0});
            return;
        }

        // 是否支持获取定位
        window.g_app._store.dispatch({
            type: 'apps/findLngLatUseIp',
            callback: (rest) => {
                let {lat, lng} = rest;
                lat = Formatter.latitude(lat);
                lng = Formatter.longitude(lng);
                console.log('[位置] 高德获取位置: ', lat, lng);
                callback({lat: lat, lng: lng});
            }
        });
    }

    /**
     * 通知
     * @param icon
     * @param title
     * @param body
     * @param onClick
     */
    static notification({icon, title, body, onClick}) {
        let notification = new Notification(title, {
            //控制方向，据说目前浏览器还不支持
            dir: "ltr",
            lang: "utf-8",
            icon: icon || "http://cdn.hocgin.top/file/LOGO_128.png",
            body: body
        });
        notification.onclick = onClick;
    }

    /**
     * 打开标签页
     * @param url
     */
    static openTab({url}) {
        if (Native.isChromeExtension()) {
            window.chrome.tabs.create({url: url});
        } else {
            console.log('打开标签页', url);
        }
    }

    static setBadgetText({text}) {
        if (Native.isChromeExtension()) {
            window.chrome.browserAction.setBadgeText({text: text});
        } else {
            console.log('设置角标', text);
        }
    }

    static setIcon({path}) {
        if (Native.isChromeExtension()) {
            window.chrome.browserAction.setIcon({path: `/static/${path}`});
        } else {
            console.log('设置角标图片', path);
        }
    }

    static isChromeExtension() {
        return !!window.chrome.browserAction;
    }

    // 更新角标
    static updateBadge(payload) {
        let userConfig = Config.getUserConfig();
        // 更新面板
        let {realtime: {temperature, skycon, aqi}} = payload;
        let text = '';
        switch (userConfig.badge) {
            // 温度
            case 1: {
                text = `${Formatter.getTemperature(temperature)[0]}°`;
                break;
            }
            // 天气描述
            case 2: {
                text = `${Formatter.toWeatherText(skycon)}`;
                break;
            }
            // 空气质量
            case 3: {
                text = `${Formatter.toAirText(aqi).text}`;
                break;
            }
            // AQI 指数
            case 4: {
                text = `${aqi}`;
                break;
            }
            default:
        }

        Native.setBadgetText({
            text
        });
        Native.setIcon({
            path: `${skycon}.png`
        });
    }
}
