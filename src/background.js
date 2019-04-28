let interval = 1000;
let intervalFunc = () => {
    window.chrome.runtime.sendMessage({}, ({userConfig}) => {
        interval = userConfig.interval;
    });
    window.setTimeout(intervalFunc, interval);
};
intervalFunc();