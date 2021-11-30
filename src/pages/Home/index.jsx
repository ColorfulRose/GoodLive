import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Swiper from "../../components/Swiper";
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import HomeHot from '../Home/HomeHot'
const Home = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Swiper banners={[Banner1, Banner2, Banner3]}></Swiper>
            <HomeHot></HomeHot>
        </div>
    )
}
export default Home