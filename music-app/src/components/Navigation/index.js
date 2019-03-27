import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'
import './index.sass'



function Navigation() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(logic.isUserLoggedIn){
            logic.retrieveUser()
                .then(user => setUser(user))
        }else{
            setUser(null)
        }
    }, [logic.isUserLoggedIn])

    function handleLogout(e){
        e.preventDefault()

        logic.logOutUser()
    }

    return (<nav className="navbar has-shadow">
        <div className="navbar-brand">
            <a className="navbar-item"><h1>Music App</h1></a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                {user && <div className="user--space navbar-item has-dropdown is-hoverable">
                    <div className="navbar-link">
                        {user ? user.name : 'No user'}
                    </div>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">
                            <div onClick={e => handleLogout(e)}>
                                <span className="icon is-small">
                                    <i className="fas fa-sign-out-alt"></i>
                                </span>
                                &nbsp;&nbsp;Logout
                            </div>
                        </a>
                    </div>
                </div>}
                {!user && <Link to="/login" className="navbar-item">Login</Link>}
            </div>
        </div>
    </nav>)
}

export default Navigation