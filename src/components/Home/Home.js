import React, {Fragment} from 'react';
import  { background, getStarted, loginButton, title } from './Home.module.css'

const Home = () => {

    const clickHandler = () => {
        console.log("Getting Started");
    }

    return (
        <Fragment>
            <div className={`${background}`}>
                <div className={title}>Welcome to Hot Dogger</div>
                <button className={getStarted} onClick={clickHandler}>Get Started!</button>
                <p>or <a className={loginButton} href="#">login</a> to track your progress!</p>
            </div>
        </Fragment>
    )
}
export default Home;