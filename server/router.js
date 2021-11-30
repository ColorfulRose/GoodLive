const express = require('express');
const router = express.Router();
const homeHot = require('./data/home/homeHot');

// 首页热门数据

router.get('/home/hot1', (req, res) => {
    console.log('有人请求服务器了')
    res.send({
        status: 200,
        result: homeHot.hot1
    })
})
router.get('/home/hot2', (req, res) => {
    res.send({
        status: 200,
        result: homeHot.hot2
    })
})

module.exports = router
