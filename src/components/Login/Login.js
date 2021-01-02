import React, { Fragment } from 'react'
import { loginBody, loginButton } from './Login.module.css'


const Login = ({ onLogin }) => {
    
    const handleLoginToggle = () => {
        console.log("toggle login");
        onLogin();
    }

    return (
        <div className={loginBody}>
            <p>This is the Login Page</p><br/>
            <button className={loginButton} onClick={handleLoginToggle}>Login Toggle</button>
        </div>
    )
}

export default Login