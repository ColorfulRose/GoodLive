import React from "react";
import './style.less';
import { Link } from 'react-router-dom'
import Searchinput from "../Searchinput";
const HeaderNav = (props) => {
    return (
        <div id='home-header' className='clear-fix'>
            <div className='home-header-left float-left' >
                <Link to='/city'>
                    <span>{props.city.cityName}</span>
                    <i className='iconfont icon-jiantou'></i>
                </Link>
            </div>
            <div className='home-header-right float-right'>
                <i className='iconfont icon-gouwuche'></i>
            </div>
            <div className='home-header-middle'>
                <div className='search-container'>
                    <i className='iconfont icon-shenghuofuwu'></i>
                    <Searchinput />
                </div>
            </div>
        </div>
    )
}
export default HeaderNav