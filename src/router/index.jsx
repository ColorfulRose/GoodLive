import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from "../pages/Home";
import LifeServive from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";

import BottomNav from "../components/BottomNav";
const AppRouter = () => {
    return (
        <div>
            <BottomNav></BottomNav>
            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/life' element={<LifeServive />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/user' element={<User />}></Route>
            </Routes>
        </div>
    )
}
export default AppRouter
