import React, { Fragment } from 'react'
import { loginBody, loginButton } from './Login.module.css'

const Login = () => {
    return (
        <div className={loginBody}>
            <p>This is the Login Page</p><br/>
            <button className={loginButton}>Login Toggle</button>
        </div>
    )
}

export default Login