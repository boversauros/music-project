'use strict'

import React, {useState, Fragment} from 'react'
import {Route, Link,  withRouter} from 'react-router-dom'
import Landing from '../Landing'
import Login from '../Login'
import Home from '../Home'
import Register from '../Register'
import './index.sass';

function App() {


    return(
        <Fragment>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
        </Fragment>
    )

}

export default withRouter(App)