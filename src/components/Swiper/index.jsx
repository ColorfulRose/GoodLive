import React, { useState } from "react";
import './style.less'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from "./Pagination";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {
    const [index, setIndex] = useState(0)

    const handleChangeIndex = index => {
        setIndex(index)
    };
    return (
        <div className='swiper'>
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                {
                    props.banners.map((cur, index) => {
                        return (
                            <div className='swiper-view' key={index}>
                                <img src={cur} alt="" />
                            </div>
                        )
                    })
                }
            </AutoPlaySwipeableViews>
            <Pagination len={props.banners.length} index={index} />
        </div>
    );
}



export default Swiper