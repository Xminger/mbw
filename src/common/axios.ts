/**
 * @file axios
 * @author
 */

import axios from 'axios';

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    console.log(response);
    let resBody = response.data;
    if (resBody.code !== 0) {
        return Promise.reject(resBody)
    }
    return resBody;
}, function (error) {
    return Promise.reject(error);
});


export default instance;

/*
*   this.$axios({
*       url: '/test',
*       method: 'post',
*       data: {
*           a: 1,
*           b: 2
*       }
*   }).then(res => {
*       console.log(res);
*   }).catch(error => {
*       console.log(error);
*   });
* */
