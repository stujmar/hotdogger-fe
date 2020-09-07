import React from 'react';
import { badgeWrapper, icon, badgeTitle } from '../styles/Badge.module.css';

import img01 from '../resources/badge_01.png';
import img02 from '../resources/badge_02.png';

const Badge = ({ onClick, imgId, name, id }) => {

    const clickHandler = () => {
        onClick(id); 
     }

     let imgToDisplay = [null, img01, img02];

    return (
        <a className={badgeWrapper} onClick={clickHandler}>
            <img className={icon} src={imgToDisplay[imgId]} alt='upgrade icon'/> 
            <div className={badgeTitle}>{`${name}`}</div>
        </a>
    )
}

export default Badge;