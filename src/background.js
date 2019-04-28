import Config from "@/util/config";
import Native from "@/util/native";

let interval;
let intervalFunc = () => {
    console.log('[定时器] 请求请求天气');
    let userConfig = Config.getUserConfig();
    interval = userConfig.interval;
    Native.getLocation(({lat, lng}) => {
        window.g_app._store.dispatch({
            type: 'apps/findGeneralWeather',
            payload: {
                lng,
                lat
            },
            callback: () => {
                window.setTimeout(intervalFunc, interval);
            }
        });
    });
};
intervalFunc();