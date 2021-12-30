import React, { useState, useEffect } from "react";
import api from "../../../../api";
import HomeHotView from "../HomeHotView";
// 这个组件专门从后台获取数据，把数据传给界面组件
const HomeHot = (props) => {
    const [hot1List, setHot1List] = useState([])
    const [hot2List, setHot2List] = useState([])
    const [city, setCity] = useState([])

    useEffect(() => {
        api.getHomeHot1({
            cityName: props.cityName
        }).then(res => {
            if (res.data.status === 200) {
                setHot1List(res.data.result)
                setCity(res.data.city)
            }
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        api.getHomeHot2({
            cityName: props.cityName
        }).then(res => {
            if (res.data.status === 200) {
                // console.log(res.data.result)
                setHot2List(res.data.result)
                setCity(res.data.city)
            }
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {
                hot1List.length > 0 ?
                    <HomeHotView data={hot1List} title='新品推荐' city={city} /> :
                    <div>等待数据加载</div>
            }
            {
                hot2List.length > 0 ?
                    <HomeHotView data={hot2List} title='热门推荐' city={city} /> :
                    <div>等待数据加载</div>
            }
        </div>
    )
}
export default HomeHot