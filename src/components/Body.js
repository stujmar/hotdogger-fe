import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from './Button.js';
import UpgradePanel from './UpgradePanel.js';
import BadgePanel from './BadgePanel.js';

const activeTab = {
    backgroundColor: "yellowgreen",
    borderBottom: "0px solid",
}

const passiveTab = {
    backgroundColor: "rgb(255, 94, 0)",
    
}

function Body () {
   let location = useLocation();
 
    const [upgradeToggle, setUpgradeToggle] = React.useState(false);
    const [badgeToggle, setBadgeToggle] = React.useState(false);
    const [activeTabId, setActiveTabId] = React.useState(1);
    const tabChanger = (id) => {
            console.log('change tab', id);
            setActiveTabId(id);
        }
        console.log(location.pathname);
        if (location.pathname === '/upgrades') {
            setActiveTabId(0);
        }

        // if(activeTabId===0 && !upgradeToggle)  {setUpgradeToggle(true)};
        // if(activeTabId!==0 && upgradeToggle)  {setUpgradeToggle(false)};
        // if(activeTabId===2 && !badgeToggle)  {setBadgeToggle(true)};
        // if(activeTabId!==2 && badgeToggle)  {setBadgeToggle(false)};
        // console.log(`upgradeToggle: ${upgradeToggle}`)

        return (
            <div className="body">
                <div className="wrapper">
                    <div className="button-bar">
                        <Button id={0} style={activeTabId===0? activeTab : passiveTab} onClick={tabChanger} content='Upgrades'/>
                        <Button id={1} style={activeTabId===1? activeTab : passiveTab} onClick={tabChanger} content='Home'/>
                        <Button id={2} style={activeTabId===2? activeTab : passiveTab} onClick={tabChanger} content='Badges'/>
                    </div>
                    <div className="pane-area">
                        <UpgradePanel visible={upgradeToggle}/>
                        <BadgePanel visible={badgeToggle}/>
                    </div>
                </div>
            </div>
        )
    
}
export default Body;






