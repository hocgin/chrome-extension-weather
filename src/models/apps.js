import API from '@/util/api';
import { message } from 'antd';
import Native from '@/util/native';
import Config from '@/util/config';
import { LOCAL_STORAGE } from '@/util/constant';
import Util from '@/util/util';

export default {
    namespace: 'apps',
    state: {
        generalWeather: Util.getStorage(LOCAL_STORAGE.WEATHER_RESPONSE, []),
        userConfig: {},
    },
    effects: {
        // 先判定是否需要自动定位，再请求天气
        * findPreAutoLocationGeneralWeather({ payload, callback }, { call, put, select }) {
            let userConfig = Config.getUserConfig();
            let { address } = userConfig;
            let index = payload.index || 0;
            let indexAddress = address[index];

            // 自动定位
            if (!!indexAddress.auto) {
                let result = yield API.findLngLatUseIp(payload);
                if (result.info === 'OK') {
                    let str = `${result.rectangle}`;
                    if (str.includes(';')) {
                        str = str.split(';')[0];
                    }
                    let lnglat = [];
                    if (str.includes(',')) {
                        lnglat = str.split(',');
                    }
                    address[index] = {
                        ...indexAddress,
                        address: [result.province, result.city],
                        lat: lnglat[1],
                        lng: lnglat[0],
                    };
                    Util.setStorage(LOCAL_STORAGE.CONFIG, userConfig);
                    yield put({
                        type: 'findUserConfig',
                        payload: {},
                    });
                } else {
                    message.error(result.message);
                }
            }
            yield put({
                type: 'findGeneralWeather',
                payload: {
                    index: index,
                },
            });
        },


        // 通用天气情况查询
        * findGeneralWeather({ payload, callback }, { call, put, select }) {
            let userConfig = Config.getUserConfig();
            let { address } = userConfig;
            let index = payload.index || 0;
            let indexAddress = address[index];

            let params = {
                ...payload,
                tzshift: userConfig.tzshift,
                lat: indexAddress.latlng[0],
                lng: indexAddress.latlng[1],
                lang: userConfig.language,
                unit: userConfig.unit,
            };

            let result;
            if (index === 0) {
                result = yield API.findNowWeatherCached(params);
            } else {
                result = yield API.findNowWeather(params);
            }

            // 进行缓存
            let data = Util.getStorage(LOCAL_STORAGE.WEATHER_RESPONSE, []);
            data[index] = result.result;
            Util.setStorage(LOCAL_STORAGE.WEATHER_RESPONSE, data);

            // 处理成功数据
            if (result.status === 'ok') {
                yield put({
                    type: 'fillGeneralWeather',
                    payload: {
                        index: index,
                        result: result.result || {},
                    },
                });
                if (callback) {
                    callback();
                }
            } else {
                message.error(result.error);
            }
        },
        * findLngLatUseIp({ payload, callback }, { call, put, select }) {
            let result = yield API.findLngLatUseIp(payload);
            if (result.info === 'OK') {
                let str = `${result.rectangle}`;
                if (str.includes(';')) {
                    str = str.split(';')[0];
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
        * findUserConfig({ payload, callback }, { call, put }) {
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
        * saveUserConfig({ payload, callback }, { call, put }) {
            try {
                localStorage.setItem(LOCAL_STORAGE.USER_CONFIG_BADGE, payload.badge);
                localStorage.setItem(LOCAL_STORAGE.CONFIG, JSON.stringify(payload || {}));
                if (callback) {
                    callback();
                }
            } catch (e) {
                message.error('发生错误');
                console.error('保存自定义配置时发生错误, 可能为JSON字符串化出错', e);
            }
        },
        * resetUserConfig({ payload, callback }, { call, put }) {
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
        },
    },
    reducers: {
        fillGeneralWeather(state, { payload: { index, result } }) {
            if (index === 0) {
                Native.updateBadge(result);
            }

            return {
                ...state,
                generalWeather: {
                    ...state.generalWeather,
                    [index]: result,
                },
            };
        },
        fillUserConfig(state, { payload }) {
            return {
                ...state,
                userConfig: payload,
            };
        },
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            return history.listen(({ pathname, search }) => {
                // const query = qs.parse(search);
                switch (pathname) {
                    case '/index.html': {
                        dispatch({
                            type: 'findUserConfig',
                            payload: {},
                        });
                        dispatch({
                            type: 'findPreAutoLocationGeneralWeather',
                            payload: {},
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
                    default:{
                        // not handle
                    }
                }
            });
        },
    },
};