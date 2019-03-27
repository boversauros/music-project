'use strict'

import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import logic from '../../logic'

export default function Register(props) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function handlerSubmit(e){
        e.preventDefault()

        try {
            logic.registerUser(name, surname, email, password, passwordConfirm)
                // .then(res => {debugger})
                .then(() => props.history.push({
                    pathname: '/login',
                    state: {register: true}
                }))
                .catch(err => console.log('async wrong response', err))
        } catch (error) {
            console.log('wrong sync error',error)
        }
    }

    return (<Fragment>
        <Header></Header>
        <div className="main">
            <section className="container register">
                <div className="columns is-mobile is-centered">
                    <div className="column is-half">
                        <div className="has-text-centered section title">
                            <h2 className="title">Register</h2>
                        </div>
                        <form onSubmit={event => handlerSubmit(event)}>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Name" name="name" required="required" onChange={e => setName(e.target.value)} /><span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Surname" name="surname" required="required" onChange={e => setSurname(e.target.value)} /><span className="icon is-small is-left"><i className="fas fa-user"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="Email" name="email" required="required" onChange={e => setEmail(e.target.value)}/><span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Password" name="password" required="required" onChange={e => setPassword(e.target.value)}/><span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Confirm password" name="passwordConfirmation" required="required" onChange={e => setPasswordConfirm(e.target.value)}/><span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                                </p>
                            </div>
                            <div className="field">
                                <input className="button is-dark" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className="has-text-centered">
                            <p><Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </Fragment>)
}