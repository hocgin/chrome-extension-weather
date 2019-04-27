import Config from '@/util/config';

export default function request(
    url,
    options,
) {
    const defaultOptions = {
        credentials: 'include',
    };
    const newOptions = {...defaultOptions, ...options};

    if (
        newOptions.method === 'POST' ||
        newOptions.method === 'PUT' ||
        newOptions.method === 'DELETE'
    ) {

        if (!(newOptions.body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers,
            };

            newOptions.headers['Origin'] = url;
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers,
            };
        }
    }

    // 补充host
    if (!`${url}`.startsWith('http')) {
        url = `${Config.host()}${url}`
    }

    return fetch(url, newOptions)
        // 响应状态检查
        .then((response) => {
            if (Config.isDev()) {
                console.log(`${response.status}:[请求地址]:${response.url}`);
            }
            if (response.status >= 200 && response.status < 500) {
                return response;
            }

            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        })
        // 响应结果转JSON
        .then(response => {
            return response.json();
        })
        // 异常响应处理
        .catch((e) => {
            console.log('[请求出现异常]', e);
        });
};
