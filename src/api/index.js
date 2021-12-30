import axios from "../util/request";
// 路径地址
const base = {
    // baseUrl: 'http://localhost:3000',
    homehot1: '/api/home/hot1',
    homehot2: '/api/home/hot2',
    search: '/api/search',
    details: '/api/details'
}
// 请求方法
const api = {
    // 获取首页热门产品1
    getHomeHot1: (params) => {
        return axios.get(base.homehot1, {
            params
        })
    },
    getHomeHot2: (params) => {
        return axios.get(base.homehot2, {
            params
        })
    },
    search: (params) => {
        return axios.get(base.search, {
            params
        })
    },
    details: (params) => {
        return axios.get(base.details, {
            params
        })
    }
}
export default api