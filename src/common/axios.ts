import axios from 'axios';

let service: any = {};
service = axios.create({
    baseURL: '/',
    timeout: 50000
});
service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        console.log('error:' + error);
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    (res: any) => {
        return res;
    },
    (error: any) => {
        console.log('error:' + error);
        return Promise.reject(error);
    }
);

export default service;
