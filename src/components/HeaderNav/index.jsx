import React from "react";
import './style.less'
const HeaderNav = () => {
    return (
        <div id='home-header' className='clear-fix'>
            <div className='home-header-left float-left'>
                <span>北京</span>
                <i className='iconfont icon-jiantou'></i>
            </div>
            <div className='home-header-right float-right'>
                <i className='iconfont icon-gouwuche'></i>
            </div>
            <div className='home-header-middle'>
                <div className='search-container'>
                    <i className='iconfont icon-shenghuofuwu'></i>
                    <input></input>
                </div>
            </div>
        </div>
    )
}
export default HeaderNav