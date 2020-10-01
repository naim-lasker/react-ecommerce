import React from "react"
import { Router, Switch } from "react-router-dom"

import browserHistory from "./History"

import RouteWithLayout from "./RouteWithLayout"
import PublicMain from "../layouts/Public/Main"

import Login from "../pages/Public/Login"


const Routes = () => {

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
            </Switch>
        </Router>
    )
}


export default Routes
