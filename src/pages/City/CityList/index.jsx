import React from "react";
import "./style.less"
const CityList = (props) => {
    const citys = ['北京', '上海', '深圳', '武汉', '杭州', '西安', '青岛']
    function clickCityHandle(city) {
        props.onCityEvent(city)

    }
    return (
        <div className="city-list-container">
            <h3>热门城市</h3>
            <ul>
                {
                    citys.map((item, index) => {
                        return (
                            <li key={index} onClick={() => clickCityHandle(item)}><span>{item}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default CityList