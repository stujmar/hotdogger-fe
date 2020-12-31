import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';

import { grayButton, darker, cart, burgerBar, hamburger, mobileLogo, closeIcon, openIcon, grayScreen, menuItems, displayBlock, displayNone } from './BurgerBar.module.css'
import {LoadGame, ResetGame, SaveGame} from '../../utils/GameState';

const BurgerBar = ({ toggle, onClick }) => {
          
    const [menuStyle, setMenuStyle] = useState(`${hamburger} ${openIcon}`);
    const [menuItemsToggle, setItemsMenu] = useState(`${grayScreen} ${displayNone}`);

    useEffect(() => {
        toggle ? setMenuStyle(`${hamburger} ${closeIcon}`) : setMenuStyle(`${hamburger} ${openIcon}`);
        toggle ? setItemsMenu(`${grayScreen} ${displayBlock}`) : setItemsMenu(`${grayScreen} ${displayNone}`);
    },[toggle])
 
    const toggleHandler = () => {
        onClick();
    }

    const handleLoad = () => {
        LoadGame();
    }

    const handleReset = () => {
        ResetGame();
    }

    const handleSave = () => {
        SaveGame();
    }
    

    return (
        <Fragment>
        <div  className={menuItemsToggle}>
            <div className={menuItems}>
                <button className={`${grayButton}`} onClick={handleSave}>save</button>
                <button className={`${grayButton}`} onClick={handleLoad}>load</button>
                <button className={`${grayButton}`} onClick={handleReset}>reset</button>
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