'use strict'

import React from 'react'
import {Link,  withRouter} from 'react-router-dom'

function Landing() {

    return (<section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title"><i className="fas fa-music"></i> Music App</h1>
                <section className="landing"><Link to="/login">Login</Link> or <Link to="/register">Register</Link></section>
            </div>
        </div>
        <div className="hero-foot">
            <div className="container has-text-centered">
                <p>Developed by <a href="https://github.com/boversauros">Boversauros</a><i className="fab fa-github"></i></p>
            </div>
        </div>
    </section>)
}

export default withRouter(Landing)