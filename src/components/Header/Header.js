import React, {Fragment, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { activeButton, cart, grayBar, grayButton, menuBar, menuParent, logoStyle, darker, menuButton } from '../Header/Header.module.css';
// import Button from '../Button';
// import InfoPanel from '../InfoPanel/InfoPanel';
// import shoppingCart from '../../resources/shopping_cart.svg'
import BurgerBar from '../BurgerBar/BurgerBar';
import {LoadGame, ResetGame, SaveGame} from '../../utils/GameState'; 

const Header = () => {
    const history = useHistory();
    let location = useLocation();
    let upgradeStyle, homeStyle, badgeStyle = {};

    const [mobileMenu, setMobileMenu] = useState(false); 

    // location.pathname === '/upgrades' ? upgradeStyle = activeTab : upgradeStyle = passiveTab;
    // location.pathname === '/' ? homeStyle = activeTab : homeStyle = passiveTab; 
    // location.pathname === '/badges' ? badgeStyle = activeTab : badgeStyle = passiveTab;

    homeStyle = location.pathname === '/' ? `${menuButton} ${activeButton}` : `${menuButton}`;
    badgeStyle = location.pathname === '/badges' ? `${menuButton} ${activeButton}` : `${menuButton}`;
    upgradeStyle = location.pathname === '/upgrades' ? `${menuButton} ${activeButton}` : `${menuButton}`;

    const menuToggler = () => {
        setMobileMenu(!mobileMenu);
    }

    const saveHandler = () => {
        SaveGame();
    };

    const loadHandler = () => {
        LoadGame();
    };

    const resetHandler = () => {
        ResetGame();
    };

        return (
            <Fragment>
            <BurgerBar toggle={mobileMenu} onClick={menuToggler}/>
                <div className={menuParent}>
                    <button className={logoStyle}></button>
                    <div className={grayBar}>
                        <button onClick={saveHandler} className={`${grayButton}`}>save</button>
                        <button onClick={loadHandler} className={`${grayButton}`}>load</button>
                        <button onClick={resetHandler} className={`${grayButton}`}>reset</button>
                        <button className={`${grayButton} ${darker}`} onClick={() => history.push("/login")}>login</button>
                        <button className={`${grayButton} ${darker}`}>profile</button>
                        {/* <img className={cart} src={shoppingCart} alt="shopping cart"/> */}
                        <button className={`${cart}`}/>
                    </div>
                    <div className={menuBar}>
                        <button onClick={() => {
                            console.log("Let's go home.");
                            history.push("/"); 
                        }} className={homeStyle}>HOME</button>
                        <button onClick={() => {
                            console.log("Let's Upgrade.");
                            history.push("/upgrades"); 
                        }} className={upgradeStyle}>UPGRADES</button>
                        <button onClick={() => {
                            console.log("Let's look at Badges.");
                            history.push("/badges"); 
                        }} className={`${badgeStyle}`}>BADGES</button>
                    </div>
                </div>
            </Fragment>
        )
    
}

export default Header;