import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import { grayButton, darker, cart, burgerBar, hamburger, mobileLogo, on, off, grayScreen, menuItems, displayBlock, displayNone } from './BurgerBar.module.css'

const BurgerBar = ({ toggle, onClick }) => {
          
    const [menuStyle, setMenuStyle] = useState(`${hamburger} ${off}`);
    const [menuItemsToggle, setItemsMenu] = useState(`${grayScreen} ${displayNone}`);

    useEffect(() => {
        toggle ? setMenuStyle(`${hamburger} ${on}`) : setMenuStyle(`${hamburger} ${off}`);
        toggle ? setItemsMenu(`${grayScreen} ${displayBlock}`) : setItemsMenu(`${grayScreen} ${displayNone}`);
    },[toggle])
 
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