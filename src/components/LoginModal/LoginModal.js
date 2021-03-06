import React, { useState, useEffect } from 'react';
import {grayScreen, loginPanel, header, button, formBody, formItem, signupPanel} from './LoginModal.module.css';

const LoginModal = ( {onClose, status} ) => {

    const on = {display: "block"};
    const off = {display: "none"};

    const [modalToggle, setModalToggle] = useState(true);
    const [loginView, setLoginView] = useState(on);
    const [signupView, setSignupView] = useState(off);
    const [ activePanel, setActivePanel] = useState('login');
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    });
    
    useEffect(() => {
        console.log("active panel check", modalToggle);
        activePanel === 'create' ? setSignupView(on) : setSignupView(off);
        activePanel === 'login' ? setLoginView(on) : setLoginView(off);
        if (activePanel === 'guest') {    
            onClose();  
        } 
    }, [activePanel])


    useEffect(() => {
        setModalToggle(status);
        console.log("modal status checker", modalToggle);
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setActivePanel('login');
    }

    const handleCreate = () => {
        setActivePanel('create');
    }

    const handleGuest = () => {
        setActivePanel('guest');
    }

    const handleBack = () => {
        setActivePanel('login');
    }

    const handleChange = () => {

    }

    return (
        <div style={{display: modalToggle ? "block" : "none"}} className={grayScreen}>
            <div style={loginView} className={loginPanel}>
            <h2 className={header}>Welcome to HotDogger.</h2>
                <form className={formBody}>
                    <input className={formItem} type="text" placeholder="email" />
                    <input className={formItem} type="text" placeholder="password"/>
                    <button onClick={handleSubmit} name="submit" className={button} type="submit">Login</button>
                </form>
                <h3 className={header}>Don't have an Account?</h3>
                <button onClick={handleCreate} className={button}>Create Account</button>
                <button onClick={handleGuest} className={button}>Continue as Guest</button>
            </div>

            <div style={signupView} className={signupPanel}>
            <h2 className={header}>Create An Account.</h2>
                <form className={formBody}>
                    <input className={formItem} type="text" placeholder="email" />
                    <input className={formItem} type="text" placeholder="password"/>
                    <input className={formItem} type="text" placeholder="password"/>
                    <button onClick={handleSubmit} className={button} type="submit">Signup</button>
                </form>
                
                <button onClick={handleBack} className={button}>Back</button>
            </div>
        </div>
    )
}

export default LoginModal;

