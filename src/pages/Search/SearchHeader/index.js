import React from "react";
import './style.less'
import Searchinput from "../../../components/Searchinput";
const SearchHeader = () => {
    function clickHandle() {
        window.history.back()
    }
    return (
        <div id="search-header" className="clear-fix">
            <span className="back-icon float-left" onClick={clickHandle}>
                <i className=" icon icon-jiantou"></i>
            </span>
            <div className="input-container">
                <i className="icon icon-gerenzhongxin"></i>
                <Searchinput />
            </div>
        </div>
    )
}

export default SearchHeader