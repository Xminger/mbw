import axios from 'axios';

// 创建axios实例
const service = axios.create({
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    (config: any) => {
        config.headers['Accept'] = '*/*';
        config.headers['content-type'] = 'application/json;charset=utf-8';
        // 在这里可以统一修改请求头，例如 加入 用户 token 等操作
        //   if (store.getters.sessionId) {
        //     config.headers['X-SessionId'] = '123'; // 让每个请求携带token--['X-Token']为自定义key
        //   }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

/* respone拦截器 */
service.interceptors.response.use(
    (response: any) => {
        // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
        const res = response.data;
        if (res.code !== 0) {
            return Promise.reject(response);
        }
        else {
            return response.data;
        }
    },
    (error: any) => {
        // 异常处理
        console.log('respone拦截器')
        console.log(error)
        return Promise.reject(error);
    },
);

export default service;
