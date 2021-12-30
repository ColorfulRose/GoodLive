import React from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { useDispatch } from 'react-redux'
import { changeCity } from '../../redux/actions/city'

const City = (props) => {

    // const [city, setCity] = useState('北京')
    const dispatch = useDispatch()
    // const city = useSelector(state => state.city)

    function onCityEvent(city) {
        // setCity(city)
        dispatch(changeCity(city))
    }

    return (
        <div>
            <PubHeader title={'城市选择'}></PubHeader>
            <CurrentCity ></CurrentCity>
            <CityList onCityEvent={onCityEvent}></CityList>
        </div>
    )
}
export default City