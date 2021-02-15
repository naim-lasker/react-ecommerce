import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Home from "../pages/Public/Home"
import Login from "../pages/Public/Login"
import ProductDetails from "../pages/Public/Product/ProductDetails"
import Cart from "../pages/Public/Cart"


export default () => {

    return (
        <Router history={browserHistory}>
            <Switch>
                <RouteWithLayout
                    component={Login}
                    exact
                    layout={PublicMain}
                    path='/login'
                    title='Login'
                />
                <RouteWithLayout
                    component={Home}
                    exact
                    layout={PublicMain}
                    path='/'
                    title='Home'
                />
                <RouteWithLayout
                    component={ProductDetails}
                    exact
                    layout={PublicMain}
                    path='/product/:id'
                    title='Product Details'
                />
                <RouteWithLayout
                    component={Cart}
                    exact
                    layout={PublicMain}
                    path='/cart/:id?'
                    title='Cart'
                />
            </Switch>
        </Router>
    )
}
