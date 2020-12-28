import React, { useState } from 'react'
import { Fragment } from 'react';
import { burgerBar, hamburger, mobileLogo, on, off, grayScreen } from './BurgerBar.module.css'

const BurgerBar = ({ toggle, onClick }) => {

    // const [menuStyle, setMenuStyle] = useState(`${hamburger} ${on}`);

    // if (toggle && menuStyle == `${hamburger} ${off}`) {
    //     setMenuStyle(`${hamburger} ${on}`); 
    // } else if (!toggle && menuStyle == `${hamburger} ${on}`) {
    //     setMenuStyle(`${hamburger} ${off}`);
    // }

    let menuStyle = `${hamburger} ${off}`;

    if (toggle && menuStyle == `${hamburger} ${off}`) {
        menuStyle = `${hamburger} ${on}`; 
    } else if (!toggle && menuStyle == `${hamburger} ${on}`) {
        menuStyle = `${hamburger} ${off}`;
    }
    
        
    const toggleHandler = () => {
        onClick();
    }

    return (
        <Fragment>
        <div style={{display: toggle ? "block" : "none"}} className={grayScreen}>

        </div>
        <button onClick={toggleHandler} className={burgerBar}>
            <div className={mobileLogo}></div>
        <div className={menuStyle}></div>
        </button>
        </Fragment>
    )
}

export default BurgerBar