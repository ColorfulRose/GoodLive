import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsView from "./DetailsView";
import api from "../../api";


const Details = () => {
    const params = useParams()
    const [detailsData, setDetailsData] = useState({})

    useEffect(() => {
        api.details({ id: params.id }).then(res => {
            if (res.status === 200) {
                setDetailsData(res.data.detailsData)
            }
        })
    }, [])
    return (

        <DetailsView id={params.id} />

    )
}
export default Details