import API from '@/util/api';
import {message} from 'antd';
import Native from "@/util/native";
import Formatter from "@/util/formatter";

export default {
    namespace: 'apps',
    state: {
        generalWeather: {},
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
                        console.log('加载首页');
                        break;
                    }
                }
            });
        },
    },
};