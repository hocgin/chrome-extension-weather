import API from '@/util/api';
import {message} from 'antd';
import Native from "@/util/native";
import Formatter from "@/util/formatter";
import Config from "@/util/config";
import {LOCAL_STORAGE} from "@/util/constant";

export default {
    namespace: 'apps',
    state: {
        generalWeather: {},
        userConfig: {},
    },
    effects: {
        // 通用天气情况查询
        * findGeneralWeather({payload}, {call, put}) {
            let result = yield API.findNowWeather(payload);
            if (result.status === 'ok') {
                yield put({
                    type: 'fillGeneralWeather',
                    payload: result.result || {},
                });
            } else {
                message.error(result.message);
            }
        },
        * findUserConfig({payload, callback}, {call, put}) {
            // 自定义配置
            let customConfig = {};
            try {
                customConfig = JSON.parse(localStorage.getItem(LOCAL_STORAGE.CONFIG) || `{}`);
            } catch (e) {
                console.error('获取自定义配置时发生错误, 可能为JSON解析出错', e);
            }

            // 默认配置
            let defaultConfig = Config.defaultConfig() || {};

            let userConfig = {
                ...defaultConfig,
                ...customConfig
            };
            console.log('获取用户配置参数', userConfig);
            yield put({
                type: 'fillUserConfig',
                payload: userConfig,
            });
            if (callback) {
                callback(userConfig);
            }
        },
        * saveUserConfig({payload, callback}, {call, put}) {
            try {
                localStorage.setItem(LOCAL_STORAGE.CONFIG, JSON.stringify(payload || {}));
                if (callback) {
                    callback();
                }
            } catch (e) {
                message.error('发生错误');
                console.error('保存自定义配置时发生错误, 可能为JSON字符串化出错', e);
            }
        },
        * resetUserConfig({payload, callback}, {call, put}) {
            try {
                localStorage.removeItem(LOCAL_STORAGE.CONFIG);
                yield put({
                    type: 'findUserConfig',
                    payload: {},
                });
                if (callback) {
                    callback();
                }
            } catch (e) {
                message.error('发生错误');
                console.error('保存自定义配置时发生错误, 可能为JSON字符串化出错', e);
            }
        }
    },
    reducers: {
        fillGeneralWeather(state, {payload}) {
            // 更新面板
            let {realtime: {temperature, skycon}} = payload;
            Native.setBadgetText({
                text: `${Formatter.temperature(temperature)}°`
            });
            Native.setIcon({
                path: `${skycon}.png`
            });
            return {
                ...state,
                generalWeather: payload,
            };
        },
        fillUserConfig(state, {payload}) {
            return {
                ...state,
                userConfig: payload,
            };
        }

    },
    subscriptions: {
        setup({dispatch, history}, done) {
            return history.listen(({pathname, search}) => {
                // const query = qs.parse(search);
                switch (pathname) {
                    case '/index.html': {
                        dispatch({
                            type: 'findUserConfig',
                            payload: {},
                            callback: () => {
                                Native.getLocation(({lat, lng}) => {
                                    dispatch({
                                        type: 'findGeneralWeather',
                                        payload: {
                                            lng,
                                            lat
                                        },
                                    });
                                });
                            }
                        });
                        break;
                    }
                    case '/options.html': {
                        Native.getLocation(({lat, lng}) => {
                            dispatch({
                                type: 'findUserConfig',
                                payload: {},
                            });
                        });
                        break;
                    }
                }
            });
        },
    },
};