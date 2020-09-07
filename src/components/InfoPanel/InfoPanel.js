import React from 'react';
import { infoBody, infoWrap, infoItem, dogCount } from './InfoPanel.module.css';

const InfoPanel = () => {

    return (
        <div className={infoBody}>
            <div className={infoWrap}>
                <div className={dogCount}>Hotdogs: 100</div>
                <div className={infoItem}>Customers: 100</div>
                <div className={infoItem}>Total Clicks: 100</div>
                <div className={infoItem}>Click Power: 100</div>
                <div className={infoItem}>Dogs Per Second: 100</div>
            </div>
        </div>
    )
}

export default InfoPanel;