import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const instance = axios.create({
  withCredentials: true,
  timeout: 60000,
})

instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 200) return res.newslist

    return undefined
  },
  (error) => {
    console.log(`err${error}`) // for debug
  }
)

const request = <T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  console.log('config', config)
  if (typeof config === 'string') {
    if (!options) {
      return instance.request<T, T>({
        url: config,
      })
    } else {
      return instance.request<T, T>({
        url: config,
        ...options,
      })
    }
  } else {
    return instance.request<T, T>(config)
  }
}
export function get<T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' }, options)
}


export function post<T = any>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> {
  return request({ ...config, method: 'POST' }, options)
}

export default request
export type { AxiosInstance, AxiosResponse }
