import axios from './axios';

function axiosFunc(config: any, param: any) {
    return axios({
        url: config.url,
        method: config.method || 'post',
        data: param
    });
}

export const login = (param:any) => axiosFunc({url: '/aaa'}, param);
