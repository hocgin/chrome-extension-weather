let interval =  60 * 1000;
let intervalFunc = () => {
    console.log('[定时器] 发送请求');
    window.chrome.runtime.sendMessage({}, ({userConfig}) => {
        if (!!userConfig) {
            console.log('[定时器] 接收到响应', userConfig);
            interval = userConfig.interval;
        }
    });
    window.setTimeout(intervalFunc, interval);
};
intervalFunc();