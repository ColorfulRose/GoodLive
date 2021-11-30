import React from "react";
import classnames from 'classnames'
import './style.less'
const Pagination = (props) => {
    let lenA = new Array(props.len).fill(0)
    let currentIndex = props.currentIndex
    return (
        <div className='swiper-pagination'>
            <ul>
                {
                    lenA.map((cur, index) => {
                        return (
                            <li key={index} className={classnames({ 'selected': currentIndex === index })} ></li>
                        )
                    })
                }
            </ul>
        </div >
    )
}
export default Pagination