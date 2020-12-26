import React from 'react';

import {wrapper} from '../../styles/BaseStyles.module.css'
import { upgradeData } from '../../data/UpgradeData';
import Upgrade from './Upgrade';

const UpgradePanel = (props) => {

    let displayArray = ['loading...']
    const handleUpgradeClick = (id) => {
        console.log('Upgrade clicked', id);
    }

    let upgradeArray = [];
    upgradeArray = upgradeData.map((upgrade) => (
        <Upgrade key={upgrade.id}
                 id={upgrade.id}
                 name={upgrade.name} 
                 onClick={handleUpgradeClick}
                 imgId={upgrade.artwork}
        />
   
    ));
      
    if (upgradeArray.length > 0) {
        displayArray = upgradeArray;
    }

        return (
            <div className={wrapper}>
                <div className='sideHeader'>Upgrade Header</div>
            {displayArray}
            </div>
        )
}

export default UpgradePanel; 
