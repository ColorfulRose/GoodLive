import React, { useState, useEffect } from "react";
import api from "../../../api";
import HomeHotView from "../HomeHotView";
// 这个组件专门从后台获取数据，把数据传给界面组件
const HomeHot = () => {
    const [hot1List, setHot1List] = useState([])
    const [hot2List, setHot2List] = useState([])

    useEffect(() => {
        api.getHomeHot1().then(res => {
            if (res.data.status === 200) {
                console.log(res.data.result)
                setHot1List(res.data.result)
            }
        })
    }, [])

    useEffect(() => {
        api.getHomeHot2().then(res => {
            if (res.data.status === 200) {
                console.log(res.data.result)
                setHot2List(res.data.result)
            }
        })
    }, [])

    return (
        <div>
            {
                hot1List.length > 0 ?
                    <HomeHotView data={hot1List} title='新品推荐' /> :
                    <diV>等待数据加载</diV>
            }
            {
                hot2List.length > 0 ?
                    <HomeHotView data={hot2List} title='热门推荐' /> :
                    <diV>等待数据加载</diV>
            }
        </div>
    )
}
export default HomeHot