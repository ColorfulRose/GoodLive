import React from "react";
import './style.less'
import { NavLink } from "react-router-dom";
const BottomNav = () => {
    return (
        <div className='nav-footer'>
            <ul className='.clear-fix:after'>
                <li>
                    <NavLink exact='true' to='/'>
                        <i className='iconfont icon-zhuye'></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/life'>
                        <i className='iconfont icon-category'></i>
                        生活服务
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>
                        <i className='iconfont icon-gouwuche'></i>
                        商城
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/user'>
                        <i className='iconfont icon-gerenzhongxin'></i>
                        我的
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default BottomNav