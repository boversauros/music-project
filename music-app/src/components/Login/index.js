'use strict'

import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Feedback from '../Feedback'
import logic from '../../logic'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [feedback, setFeedback] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        try {
            logic.logInUser(email, password)
                .then(() => props.history.push('/home'))
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return (<Fragment>
        <Header></Header>
        <div className="main">
            <section className="container login">
                <div className="columns is-mobile is-centered">
                    <div className="column is-half">
                        <div className="has-text-centered section title">
                            <h2 className="title">Login</h2>
                        </div>
                        <form onSubmit={event => handleSubmit(event)}>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} required /><span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} required /><span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <input className="button is-dark" type="submit" value="login" />
                            </div>
                        </form>
                        <div className="has-text-centered">
                            <p>If you aren't a member register <Link to="/register">here</Link></p>
                        </div>
                        {feedback && <Feedback message={feedback} state="is-danger" />}
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </Fragment>)
}

export default withRouter(Login)