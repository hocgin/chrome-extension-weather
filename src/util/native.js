import Formatter from "@/util/formatter";

export default class Native {
    static worked() {
        return "ok";
    }

    /**
     * 获取当前位置
     * @param callback
     */
    static getLocation(callback) {
        // 是否支持获取定位
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
                let lat = Formatter.latitude(6);
                let lng = Formatter.longitude(6);
                console.log('获取定位成功 latlng: ', lat, lng);
                callback({lat: lat, lng: lng});
            }, (error) => {
                let errorMessage = {
                    "0": "unknown error",
                    "1": "permission denied",
                    "2": "position unavailable (error response from locaton provider)",
                    "3": "timed out",
                };
                console.error('定位出错', errorMessage[error.code]);
            });
        } else {
            Native.notification({
                title: '当前浏览器不支持自动定位',
                onClick: () => {
                    Native.openTab({url: 'options.html'});
                }
            });
            console.error('该用户无法进行定位必须手动输入位置');
        }
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
            icon: icon || "http://7xs6lq.com1.z0.glb.clouddn.com/LOGO_48.png",
            body: "点击进行设置"
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
        }else {
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
            window.chrome.browserAction.setIcon({path: {'19': `static/${path}`}});
        } else {
            console.log('设置角标图片', path);
        }
    }

    static isChromeExtension() {
        return !!window.chrome.browserAction;
    }
}