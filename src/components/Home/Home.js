import React from 'react';
import { useHistory, Redirect } from "react-router-dom";

import  { background, getStarted, loginButton, title, flexHolder, cta } from './Home.module.css'

const Home = ({isLoggedIn, onClick}) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/game");
    }

    const dogHandler = () => {
        onClick();
    }

    return (
            <div className={flexHolder}>
                <div className={title}>Welcome to Hot Dogger</div>
                <div className={`${background}`}></div>
                <div className={cta}>
                    { isLoggedIn ? null : <Redirect to="/welcome"/>}
                    <button className={getStarted} onClick={clickHandler}>Get Started!</button>
                    <p>or <button className={loginButton} onClick={dogHandler}>DOG</button> click that dog!</p>
                </div>
            </div>
    )
}
export default Home;