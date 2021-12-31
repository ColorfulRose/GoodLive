import React, { useEffect, useState } from "react";
import DetailsView from "../DetailsView";
import api from '../../../api'
// import { useParams } from "react-router-dom";
import PubHeader from '../../../components/PubHeader'


const Details = (props) => {
    const [detailsData, setDetailsData] = useState({})

    useEffect(() => {
        api.details({ id: props.id }).then(res => {
            if (res.status === 200) {
                setDetailsData(res.data.detailsData)
            }
        })
        return () => {
            setDetailsData({})
        }
    }, [])

    return (
        <div>
            <PubHeader title='详情页' />
            {
                detailsData.imgs ?
                    <DetailsView detailsData={detailsData} /> :
                    <div>等待数据加载......</div>
            }

        </div>
    )
}
export default Details