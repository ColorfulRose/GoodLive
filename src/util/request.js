import axios from 'axios'
import qs from 'querystring'
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('语义有错,当前请求无法被服务器理解')
            break;
        case 401:
            console.log('服务器认证失败')
            break;
        case 403:
            console.log('服务器拒绝请求')
            break;
        case 404:
            console.log('not found')
            break;
        default:
            console.log(info)
            break;
    }
}
//创建axios s实例对象
const instance = axios.create({
    // baseURL:'http://iwenwiko.com',
    timeout: 5000
})
// 拦截处理
instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => Promise.reject(error)
)
// 响应拦截
instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(),
    error => {
        const { response } = error
        errorHandle(response.status, response.info)
    }
)
export default instance