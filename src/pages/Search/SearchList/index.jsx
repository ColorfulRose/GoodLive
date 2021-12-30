import React, { useEffect, useState } from "react";
import SearchListView from "../SearchListView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

// 主要用于发送网络请求 view用于渲染页面 是其子组件
const SearchList = (props) => {
    const [searchData, setSearchData] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        http()
    }, [props.search]) // eslint-disable-line react-hooks/exhaustive-deps

    function loadMoreHandle() {
        http()
    }
    function http() {
        api.search({
            search: props.search
        }).then(res => {
            if (res.data.status === 200) {
                setSearchData([...searchData, ...res.data.result.data])
                setHasMore(res.data.result.hasMore)
            }
        }).catch(error => {

        })
    }
    return (
        <div>
            {
                searchData.length > 0 ?
                    <SearchListView search={searchData} /> :
                    <div>等待数据加载....</div>
            }


            {
                hasMore ? <LoadMore onLoadMore={loadMoreHandle} /> : <div>没有更多的了</div>
            }
        </div>
    )
}
export default SearchList