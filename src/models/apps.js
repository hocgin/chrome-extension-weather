import API from '@/util/api';
import {message} from 'antd';
import Native from "@/util/native";
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
        * findGeneralWeather({payload, callback}, {call, put, select}) {
            let userConfig = Config.getUserConfig();
            let result = yield API.findNowWeather({
                ...payload,
                tzshift: userConfig.tzshift,
                lang: userConfig.language,
                unit: userConfig.unit
            });
            if (result.status === 'ok') {
                localStorage.setItem(LOCAL_STORAGE.WEATHER_RESPONSE_LAST_TIME, new Date().getTime());
                // 填充数据
                yield put({
                    type: 'fillGeneralWeather',
                    payload: result.result || {},
                });
                if (callback) {
                    callback();
                }
            } else {
                message.error(result.error);
            }
        },
        * findLngLatUseIp({payload, callback}, {call, put, select}) {
            let result = yield API.findLngLatUseIp(payload);
            if (result.info === 'OK') {
                let str = `${result.rectangle}`;
                if (str.includes(';')) {
                    str = str.split(';')[0]
                }
                let lnglat = [];
                if (str.includes(',')) {
                    lnglat = str.split(',');
                }
                if (callback) {
                    callback({
                        lng: lnglat[0],
                        lat: lnglat[1],
                    });
                }
            } else {
                message.error(result.message);
            }
        },
        * findUserConfig({payload, callback}, {call, put}) {
            let userConfig = Config.getUserConfig();
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
            Native.updateBadge(payload);
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
        },
    },
    subscriptions: {
        setup({dispatch, history}, done) {
            return history.listen(({pathname, search}) => {
                // const query = qs.parse(search);
                switch (pathname) {
                    case '/index.html': {
                        Native.getLocation(({lat, lng}) => {
                            dispatch({
                                type: 'findGeneralWeather',
                                payload: {
                                    lng,
                                    lat
                                },
                            });
                        });
                        break;
                    }
                    case '/options.html': {
                        dispatch({
                            type: 'findUserConfig',
                            payload: {},
                        });
                        break;
                    }
                }
            });
        },
    },
};