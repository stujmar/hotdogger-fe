import React, {useState} from 'react';

import { badgeBG } from './BadgePanel.module.css'
import { badgeData } from '../../data/BadgeData';
import Badge from './Badge';

const BadgePanel = (props) => {

    const handleBadgeClick = (id) => {
        console.log('Badge clicked', id);
    }
      
        let badgeArray = [];
        badgeArray = badgeData.map((badge) => (
            <Badge key={badge.id}
                    id={badge.id}
                    name={badge.name} 
                    onClick={handleBadgeClick}
                    imgId={badge.artwork}
            />
        ));

        return (
            <div className={badgeBG}>
                <div className='sideHeader'>Badge Header</div>
                {badgeArray}
            </div>
        )
}

export default BadgePanel; 