import React from 'react';
import { upgradeTitle, upgradeWrapper, icon } from './Upgrade.module.css';
//import possible images
import img01 from '../../resources/upgrade_01.png';
import img02 from '../../resources/upgrade_02.png';

const Upgrade = ({ name, onClick, id, imgId }) => {

    const clickHandler = () => {
       onClick(id); 
    }

    let imgToDisplay = [null, img01, img02];

    return (   
        <button className={upgradeWrapper} onClick={clickHandler}>
            {/* <img className={icon} src={imgToDisplay[imgId]} alt='upgrade icon'/>  */}
            <div className={icon}></div>
            <div className={upgradeTitle}>{`${name}`}</div>
        </button>
    )
}

export default Upgrade;
