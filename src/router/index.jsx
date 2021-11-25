import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from "../pages/Home";
import LifeServive from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";
import { Routes } from 'react-router';

const AppRouter = () => {
    return (
        <Router>

            <Route path='/' component={Home}></Route>
            <Route path='/lifeservive' component={LifeServive}></Route>
            <Route path='/shop' component={Shop}></Route>
            <Route path='/user' component={User}></Route>

        </Router>
    )
}
export default AppRouter
