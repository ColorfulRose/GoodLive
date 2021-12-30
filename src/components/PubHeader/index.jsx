import React from "react";
import './style.less';


const PubHeader = (props) => {
    function backhandle(props) {
        // 返回上一页 两种方案
        // 方法一
        // 导入 import { withRouter } from 'react-router-dom'
        // 让组件被路由管理：export default withRouter(PubHeader)
        // props.history.go(-1)

        window.history.back()
    }
    return (
        <div id='common-header'>
            <span className='back-icon' onClick={backhandle}>
                <i className='icon icon-jiantou'></i>
            </span>
            <h1>{props.title}</h1>
        </div>
    )
}
export default PubHeader