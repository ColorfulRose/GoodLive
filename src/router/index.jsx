import React from "react";
import { Route, Routes } from 'react-router-dom'
// import Layout from "../pages/main/Layout";
import Home from "../pages/main/Home";
import LifeServive from "../pages/main/LifeService";
import Shop from "../pages/main/Shop";
import User from "../pages/main/User";
import City from "../pages/City";
import Search from "../pages/Search";
import Details from "../pages/Details";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/city' element={<City />}></Route>
                <Route path='/search/:keywords' element={<Search />}></Route>
                <Route path='/details/:id' element={<Details />}></Route>

                <Route path='/' element={<Home />}> </Route>
                <Route path='/life' element={<LifeServive />}> </Route>
                <Route path='/shop' element={<Shop />}> </Route>
                <Route path='/user' element={<User />}> </Route>
            </Routes>
        </div>
    )
}
export default AppRouter
