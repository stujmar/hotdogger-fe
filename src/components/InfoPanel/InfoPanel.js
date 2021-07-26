import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameStats } from '../../redux/gameSlice';
import { infoBody, infoWrap, infoItem, dogCount, footer } from './InfoPanel.module.css';

const InfoPanel = ({dogs}) => {
    

    return (
        <footer className={footer}>
            <div className={infoBody}>
                <div className={dogCount}>Hotdogs: {useSelector(selectGameStats).hotdogs}</div>
                <div className={infoWrap}>
                    <div className={infoItem}>Customers: 100</div>
                    <div className={infoItem}>Total Clicks: 100</div>
                    <div className={infoItem}>Click Power: 100</div>
                    <div className={infoItem}>Dogs Per Second: 100</div>
                </div>
            </div>
        </footer>
    )
}

export default InfoPanel;