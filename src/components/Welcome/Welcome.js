import React from 'react'
import { useHistory } from "react-router-dom";

import { background, title, getStarted, loginButton } from './Welcome.module.css'


const Welcome = () => {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/game");
    }

    const loginHandler = () => {
        history.push("/login");
    }

    return (
            <div className={`${background}`}>
                <div className={title}>Welcome to Hot Dogger</div>
                <button className={getStarted} onClick={clickHandler}>Get Started!</button>
                <p>or <button className={loginButton} onClick={loginHandler}>login</button> to track your progress!</p>
            </div>
    )
}


export default Welcome