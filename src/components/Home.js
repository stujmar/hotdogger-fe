import React, {Fragment} from 'react';
import {wrapper} from '../styles/BaseStyles.module.css'
import Hotdog from './Hotdog';

const Home = () => {
    return (
        <Fragment>
        <div className={wrapper}>
        <h1>Welcome to Hot Dogger!</h1>
        <Hotdog />
        </div> 
        </Fragment>
    )
}
export default Home;