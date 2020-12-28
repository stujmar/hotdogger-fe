import React, {Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { activeButton, buttonBar, cart, grayBar, grayButton, menuBar, menuParent, logoStyle, darker, background, menuButton } from '../Header/Header.module.css';
import Button from '../Button';
import InfoPanel from '../InfoPanel/InfoPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shoppingCart from '../../resources/shopping_cart.svg'
import { useHistory } from "react-router-dom";
import BurgerBar from '../BurgerBar/BurgerBar';

const Header = () => {
    const history = useHistory();
    let location = useLocation();
    let upgradeStyle, homeStyle, badgeStyle = {};
    let borderLeft = '2px solid brick';
    let borderRight = '2px solid black';
    
    location.pathname === '/upgrades' ? borderLeft = '0px solid black' : borderLeft = '2px solid black';
    location.pathname === '/badges' ? borderRight = '0px solid black' : borderRight = '2px solid black';
    
    let activeTab = {
        backgroundColor: "yellowgreen",
        color: 'rgb(255, 94, 0)',
        borderRight: `${borderRight}`,
        borderLeft: `${borderLeft}`,
        borderBottom: "0px solid",
    
    }
    
    let passiveTab = {
        backgroundColor: "rgb(255, 94, 0)",
        color: '#FFDB3A',  
    }

    location.pathname === '/upgrades' ? upgradeStyle = activeTab : upgradeStyle = passiveTab;
    location.pathname === '/' ? homeStyle = activeTab : homeStyle = passiveTab; 
    location.pathname === '/badges' ? badgeStyle = activeTab : badgeStyle = passiveTab;

    homeStyle = location.pathname === '/' ? `${menuButton} ${activeButton}` : `${menuButton}`;
    badgeStyle = location.pathname === '/badges' ? `${menuButton} ${activeButton}` : `${menuButton}`;
    upgradeStyle = location.pathname === '/upgrades' ? `${menuButton} ${activeButton}` : `${menuButton}`;

        return (
            <Fragment>
            <BurgerBar />
                <div className={menuParent}>
                    <button className={logoStyle}></button>
                    <div className={grayBar}>
                        <button className={`${grayButton}`}>save</button>
                        <button className={`${grayButton}`}>load</button>
                        <button className={`${grayButton}`}>reset</button>
                        <button className={`${grayButton} ${darker}`}>login</button>
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