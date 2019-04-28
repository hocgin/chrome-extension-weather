
let interval = 1000;
let intervalFunc = () => {
    console.log('[定时器] 请求请求天气', window.g_app);
    chrome.extension.sendMessage({}, (response) => {
        console.log('response', response);
    });
    // let userConfig = Config.getUserConfig();
    // interval = userConfig.interval;
    // Native.getLocation(({lat, lng}) => {
    //     window.g_app._store.dispatch({
    //         type: 'apps/findGeneralWeather',
    //         payload: {
    //             lng,
    //             lat
    //         },
    //         callback: () => {
                window.setTimeout(intervalFunc, interval);
    //         }
    //     });
    // });
};
intervalFunc();