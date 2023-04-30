import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class hyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      timeout,
      baseURL
    })
    // 请求拦截
    this.instance.interceptors.request.use(config => {
      const url = config.url
      // startsWith：判断是否以该字符串开头
      if (url.startsWith('/user') || url.startsWith('/login')) {
        // 符合条件时，给该请求添加Authorization携带token
        config.headers.Authorization = window.localStorage.getItem('token')
        console.log(config);
      }
      return config
    })
    // 响应拦截
    this.instance.interceptors.response.use(res => {
      return res.data
    })
  }

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new hyRequest(BASE_URL, TIMEOUT)
