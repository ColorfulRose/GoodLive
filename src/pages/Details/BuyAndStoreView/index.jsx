import React from "react";
import './style.less'
const BuyAndStoreView = () => {
    return (
        <div className="buy-store-container">
            <div className="item-container float-left">
                <button className="selected">收藏</button>
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div>
    )
}
export default BuyAndStoreView