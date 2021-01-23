import React, { Fragment } from 'react'
import { loginBody, loginButton, formInput } from './Login.module.css'


const Login = ({ onLogin }) => {
    
    const handleLoginToggle = () => {
        console.log("toggle login");
        onLogin();
    }

    return (
        <div className={loginBody}>
            <p>This is the Login Page</p><br/>
            <input className={formInput} type="text" placeholder="email" />
            <input className={formInput} type="text" placeholder="password"/>
            <button className={loginButton} onClick={handleLoginToggle}>Login Toggle</button>
        </div>
    )
}

export default Login