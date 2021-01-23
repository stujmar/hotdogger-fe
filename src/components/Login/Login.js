import React, { Fragment, useState } from 'react'
import { loginBody, loginButton, formInput, loginForm } from './Login.module.css'


const Login = ({ onLogin }) => {
    
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const handleLoginToggle = () => {
        console.log("toggle login");
        onLogin();
    }

    const handleChange = () => {

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={loginBody}>
            <p>This is the Login Page</p><br/>
            <form class={loginForm} onSubmit={handleSubmit}>
                <input className={formInput} type="text" name="username" placeholder="username" />
                <input className={formInput} type="text" name="password" placeholder="password"/>
                <button type="submit">Submit</button>
            </form>
            <button className={loginButton} onClick={handleLoginToggle}>Login Toggle</button>
        </div>
    )
}

export default Login