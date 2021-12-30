import React from "react";

import Swiper from "../../../components/Swiper";
import Banner1 from '../../../assets/images/banner1.png'
import Banner2 from '../../../assets/images/banner2.png'
import Banner3 from '../../../assets/images/banner3.png'
import HomeHot from '../Home/HomeHot'
import HeaderNav from './../../../components/HeaderNav/index';
import BottomNav from "../../../components/BottomNav";
import { useSelector } from 'react-redux'
// useSelector 读取redux中的数据项
const Home = () => {
    const city = useSelector(state => state.city)
    return (
        <div>
            <BottomNav></BottomNav>
            <HeaderNav city={city}></HeaderNav>
            <Swiper banners={[Banner1, Banner2, Banner3]}></Swiper>
            <HomeHot cityName={city.cityName}></HomeHot>
        </div>
    )
}
export default Home