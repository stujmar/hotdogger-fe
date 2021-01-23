import React, { Fragment } from 'react'
import { loginBody, loginButton, formInput } from './Login.module.css'


const Login = ({ onLogin }) => {
    
    const handleLoginToggle = () => {
        console.log("toggle login");
        onLogin();
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={loginBody}>
            <p>This is the Login Page</p><br/>
            <form onSubmit={handleSubmit}>
                <input className={formInput} type="text" placeholder="email" />
                <input className={formInput} type="text" placeholder="password"/>
            </form>
            <button className={loginButton} onClick={handleLoginToggle}>Login Toggle</button>
        </div>
    )
}

export default Login