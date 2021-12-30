import React, { useState, useEffect } from "react";
import './style.less'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as searchAction from '../../redux/actions/search'
import { useParams } from 'react-router-dom'


// react-router 没有withRouter 的函数 只有useNavigate 需要自己封装
function anonyCom(MessCom) {
    return (props) => {
        let navigate = useNavigate();
        return <MessCom {...props} navigate={navigate} />
    }
}

const Searchinput = (props) => {
    const [keywords, setKeyWords] = useState('')
    const dispatch = useDispatch()
    // const reduxKeyWords = useSelector(state => state.search)
    const params = useParams()

    //点击返回按钮的时候,将
    useEffect(() => {
        // setKeyWords(reduxKeyWords.search)
        setKeyWords(params.keywords)
    }, [params.keywords])// eslint-disable-line react-hooks/exhaustive-deps

    function keyUpHandle(e) {
        if (keywords.length > 0) {
            if (e.keyCode === 13) {
                // 搜索框回车跳转 路由传参
                props.navigate('/search/' + keywords)
                // 将路由传参换成redux
                dispatch(searchAction.updateSearch(keywords))
            }
        }
    }
    function changeHandle(e) {
        setKeyWords(e.target.value)
    }

    return (
        <input
            className='search-input '
            type='text'
            value={keywords || ' '}
            onKeyUp={keyUpHandle}
            onChange={changeHandle}
        />
    )
}
export default anonyCom(Searchinput) 