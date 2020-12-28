import React, { useState } from 'react'
import { Fragment } from 'react';
import { grayButton, darker, cart, burgerBar, hamburger, mobileLogo, on, off, grayScreen, menuItems, displayBlock, displayNone } from './BurgerBar.module.css'

const BurgerBar = ({ toggle, onClick }) => {


    let menuStyle = `${hamburger} ${off}`;
    let menuItemsToggle = `${grayScreen} ${displayNone}`;

    if (toggle && menuStyle == `${hamburger} ${off}`) {
        menuStyle = `${hamburger} ${on}`; 
        menuItemsToggle = `${grayScreen} ${displayBlock}`
    } else if (!toggle && menuStyle == `${hamburger} ${on}`) {
        menuStyle = `${hamburger} ${off}`;
        menuItemsToggle = `${grayScreen} ${displayNone}`
    }
 
    const toggleHandler = () => {
        onClick();
    }

    return (
        <Fragment>
        <div  className={menuItemsToggle}>
            <div className={menuItems}>
                <button className={`${grayButton}`}>save</button>
                <button className={`${grayButton}`}>load</button>
                <button className={`${grayButton}`}>reset</button>
                <button className={`${grayButton} ${darker}`}>login</button>
                <button className={`${grayButton} ${darker}`}>profile</button>
                <button className={`${cart}`}/>

            </div>
        </div>
        <button onClick={toggleHandler} className={burgerBar}>
            <div className={mobileLogo}></div>
        <div className={menuStyle}></div>
        </button>
        </Fragment>
    )
}

export default BurgerBar