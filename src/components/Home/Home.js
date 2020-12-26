import React, {Fragment} from 'react';
import  { background } from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            <div className={`${background}`}>
                <div className="title">Welcome to Hot Dogger</div>
                <button>Get Started!</button>
                <p>login to track your progress!</p>
            </div>
        </Fragment>
    )
}
export default Home;