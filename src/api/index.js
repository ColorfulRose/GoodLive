import axios from "../util/request";
// 路径地址
const base = {
    // baseUrl: 'http://localhost:3000',
    homehot1: '/api/home/hot1',
    homehot2: '/api/home/hot2',
}
// 请求方法
const api = {
    // 获取首页热门产品1
    getHomeHot1: () => {
        return axios.get(base.homehot1)
    },
    getHomeHot2: () => {
        return axios.get(base.homehot2)
    }
}
export default api