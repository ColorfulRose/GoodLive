const express = require('express');
const router = express.Router();
//引入数据
const homeHot = require('./data/home/homeHot');
const searchData = require('./data/search')
const detailsData = require('./data/details')
const url = require('url')
const Mock = require('mockjs');
const { Random } = require('mockjs');

// 首页热门数据

router.get('/home/hot1', (req, res) => {
    // 前台传了cityname 后台接收
    const cityName = url.parse(req.url, true).query.cityName


    res.send({
        status: 200,
        result: homeHot.hot1,
        city: cityName
    })
})
router.get('/home/hot2', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        result: homeHot.hot2,
        city: cityName
    })
})


// 搜索页面
router.get('/search', (req, res) => {
    const search = url.parse(req.url, true).query.search
    console.log(search)
    res.send({
        status: 200,
        result: searchData
    })
})

//mock测试
router.get('/mock', (req, res) => {
    let data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'data|5': [{
            'id': Random.id(),
            'title': Random.csentence(5, 8),
            'price': "<h3>130000</h3>",
            'rentType': Random.cword(2),
            'img': Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(3))
        }]
    })
    res.send(data)
})


// 详情页
router.get('/details', (req, res) => {
    const id = url.parse(req.url, true).query.id
    res.send({
        status: 200,
        detailsData
    })
})
module.exports = router
