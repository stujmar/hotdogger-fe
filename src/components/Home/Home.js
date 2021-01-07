import React, { Fragment } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import  { background, getStarted, loginButton, title, homeBody } from './Home.module.css'

const Home = ({isLoggedIn, onClick}) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/game");
    }

    const dogHandler = () => {
        onClick();
    }

    return (
            <div className={`${background}`}>
                { isLoggedIn ? null : <Redirect to="/welcome"/>}
                <div className={title}>Welcome to Hot Dogger</div>
                <button className={getStarted} onClick={clickHandler}>Get Started!</button>
                <p>or <button className={loginButton} onClick={dogHandler}>DOG</button> click that dog!</p>
            </div>
    )
}
export default Home;