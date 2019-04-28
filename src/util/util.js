import {message} from 'antd';

export default class Util {

    /**
     * 自动输出第一条错误信息
     * @param errors
     */
    static showErrorHasMessage(errors) {
        let keys = Object.keys(errors || {});
        if (keys.length > 0) {
            let error = errors[keys[0]];
            message.error(error.errors[0].message);
        }
    }
}