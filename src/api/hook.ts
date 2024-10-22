import axios, { AxiosRequestConfig } from 'axios'
const getAPIURL = (path: string) => {
    return `${process.env.API_URL || 'http://localhost:8000/'
        }${path}`
}

const instance = axios.create({
    baseURL: process.env.API_URL
})

const sendGet = (url: string, params?: any) => instance.get(url, { params })

const sendGetFile = (url: string, params?: any) => instance.get(url, { params, responseType: 'blob' })

const sendPost = (url: string, params?: any, config?: AxiosRequestConfig) => {
    return instance.post(url, params, config)
}

const sendPut = (url: string, params: any) => instance.put(url, params)

const sendDelete = (url: string, params?: any) => instance.delete(url, params)

export { sendGet, sendGetFile, sendPost, sendDelete, sendPut, instance, getAPIURL }