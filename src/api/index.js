import axios from "axios";
import Qs from "qs";
import api from "./api";
// import { getToken } from "../utils/auth";
// import router from "@/router";

let baseURL = process.env.VUE_APP_BASE_API;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  // headers: { "Content-Type": "application/json" },
  withCredentials: true,
  transformRequest: [
    function(data) {
      return Qs.stringify(data);
    }
  ]
});

// 通过url判断是否是某个接口生效
let contains = (arr, url) => {
  let i = arr.length;
  while (i--) {
    if (url.indexOf(arr[i]) !== -1) {
      return true;
    }
  }
  return false;
};

// 不需要提示错误的接口
let noNoticeApi = [];

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 请求错误返回登录页
    let notNotice = contains(noNoticeApi, response.config.url);
    if (notNotice) {
      return response;
    }
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default api(instance);
