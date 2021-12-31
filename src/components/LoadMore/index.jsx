import React, { useEffect, useRef, useState } from "react";
import './style.less'
const LoadMore = (props) => {
    const more = useRef()
    const [loadTop, setLoadTop] = useState(10000)
    useEffect(() => {
        // 获取视口高度
        let winHeight = document.documentElement.clientHeight
        let timer = null
        function scrollHandle() {
            if (more.current) {
                setLoadTop(more.current.getBoundingClientRect().top)
                if (timer) {
                    clearTimeout(timer)
                } else {
                    timer = setTimeout(() => {
                        if (winHeight > loadTop) {
                            props.onLoadMore()
                        }
                    }, 300)
                }
            }
        }
        window.addEventListener('scroll', scrollHandle)
        return () => {
            // window.removeEventListener('scroll', scrollHandle)
            // clearTimeout(timer)
        }
    }, [loadTop])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="load" ref={more}>上拉加载更多</div>
    )
}
export default LoadMore