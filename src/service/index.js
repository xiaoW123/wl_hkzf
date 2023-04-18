import { config } from 'antd-mobile/es/components/toast/methods'
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class hyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      timeout,
      baseURL
    })

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
