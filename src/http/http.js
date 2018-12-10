/**
 * @file http
 * @Author: daijiulong
 * @Date:   2018-11-10 19:45:14
 */
import axios from 'axios';
import Vue from 'vue';

//  Request请求计数变量
// 一个页面可能发送多个请求，该变量保证当所有的请求返回的时候
// loading界面才会消失
let requestingCount = 0;
let bus = new Vue();
const http = axios.create({
    timeout: 500000// 请求延时
});

let sendRequestDate;

http.interceptors.request.use(
    config => {
        requestingCount++;
        sendRequestDate = new Date();
        bus.$emit('openloading');
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
http.interceptors.response.use(
    response => {
        requestingCount--;
        if (requestingCount === 0) {
            let receiveResponseDate = new Date();
            let RequestSpendTime = receiveResponseDate.getTime() - sendRequestDate.getTime();
            if (RequestSpendTime < 500) {
                // 设置一个最短请求时间，防止请求返回过快，loading界面一闪而过
                RequestSpendTime = 500;
            };
            bus.$emit('closeloading', RequestSpendTime);
        } else {
            bus.$emit('openloading');
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export {
    bus, http
};
