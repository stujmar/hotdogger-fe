import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameStats } from '../../redux/gameSlice';
import { infoBody, infoWrap, infoItem, dogCount } from './InfoPanel.module.css';

const InfoPanel = ({dogs}) => {
    

    return (
        <div className={infoBody}>
            <div className={dogCount}>Hotdogs: {useSelector(selectGameStats).hotdogs}</div>
            <div className={infoWrap}>
                <div className={infoItem}>Customers: 100</div>
                <div className={infoItem}>Total Clicks: 100</div>
                <div className={infoItem}>Click Power: 100</div>
                <div className={infoItem}>Dogs Per Second: 100</div>
            </div>
        </div>
    )
}

export default InfoPanel;