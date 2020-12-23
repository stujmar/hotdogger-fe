import React, {Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { headerStyle, superTitle, title, buttonBar, grayBar, grayButton, menuBar, menuParent, logoStyle, darker } from '../Header/Header.module.css';
import Button from '../Button';
import InfoPanel from '../InfoPanel/InfoPanel';

const Header = () => {

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

    
        return (
            <Fragment>
                <div className={menuParent}>
                    <div className={logoStyle}></div>
                    <div className={grayBar}>
                        <button className={`${grayButton}`}>save</button>
                        <button className={`${grayButton}`}>load</button>
                        <button className={`${grayButton}`}>reset</button>
                        <button className={`${grayButton} ${darker}`}>login</button>
                        <button className={`${grayButton} ${darker}`}>profile</button>
                    </div>
                    <div className={menuBar}></div>
                </div>
                <div className={headerStyle}>
                    <div className={superTitle}>the original</div>
                    <h1 className={title}>HotDogger</h1>
                </div>
                    <InfoPanel />
                    <div className={buttonBar}>
                            <Button id={0} style={upgradeStyle} path='/upgrades' content='Upgrades'/>
                            <Button id={1} style={homeStyle} path='/' content='Home'/>
                            <Button id={2} style={badgeStyle} path='/badges' content='Badges'/>
                    </div>
            </Fragment>
        )
    
}

export default Header;