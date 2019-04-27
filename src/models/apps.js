import API from '@/util/api';
import {message} from 'antd';

export default {
    namespace: 'index',
    state: {
        generalWeather: [],
    },
    effects: {
        // 通用天气情况查询
        * findGeneralWeather({payload}, {call, put}) {
            let result = yield API.findNowWeather(payload);
            if (result.status === 'ok') {
                yield put({
                    type: 'fillGeneralWeather',
                    payload: result.result || [],
                });
            } else {
                message.error(result.message);
            }
        },
    },
    reducers: {
        fillGeneralWeather(state, {payload}) {
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
                        // dispatch({
                        //     type: 'findGeneralWeather',
                        //     payload: {},
                        // });
                        console.log('加载首页');
                        break;
                    }
                }
            });
        },
    },
};