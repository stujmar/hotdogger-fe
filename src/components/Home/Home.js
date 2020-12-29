import React, {Fragment} from 'react';
import { useHistory } from "react-router-dom";

import  { background, getStarted, loginButton, title } from './Home.module.css'

const Home = () => {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/game");
        console.log("Getting Started");
    }

    const loginHandler = () => {
        history.push("/login");
        console.log("Getting Logged In");
    }

    return (
        <Fragment>
            <div className={`${background}`}>
                <div className={title}>Welcome to Hot Dogger</div>
                <button className={getStarted} onClick={clickHandler}>Get Started!</button>
                <p>or <button className={loginButton} onClick={loginHandler}>login</button> to track your progress!</p>
            </div>
        </Fragment>
    )
}
export default Home;