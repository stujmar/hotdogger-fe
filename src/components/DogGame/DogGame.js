import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStat } from '../../redux/gameSlice';
import {
    background,
    dogImage,
    plateInset,
    plate,
    flexParent,
    leftSection, rightSection, leftItem, rightItem
    } from './DogGame.module.css';

const DogGame = () => {
    const dispatch = useDispatch();
    const [ onions, setOnions ] = useState([]);

    useEffect(() => {
        /* Onload load up toppings and sauces */
        console.log('... on load of game ...')
    },[]);

    const handleClick = () => {
        setOnions(onions + 1);
        console.log("You clicked that dog");
        dispatch(updateStat({type: 'hotdogs', amount: 1}));
    }

    return (<React.Fragment>
        <div className={background}>
            {onions}
            <div className={plate}>
                <div className={plateInset}>
        <div className={flexParent}>
            <div className={leftSection}>
                <div className={leftItem}></div>
                <div className={leftItem}></div>
                <div className={leftItem}></div>
                <div className={leftItem}></div>
                <div className={leftItem}></div>
            </div>
                    <button type="button" onClick={() => handleClick()} className={dogImage}></button>
            <div className={rightSection}>
                <div className={rightItem}></div>
                <div className={rightItem}></div>
                <div className={rightItem}></div>
                <div className={rightItem}></div>
                <div className={rightItem}></div>
            </div>
            </div>
                </div>
        </div>
        </div>
    </React.Fragment>)
}

export default DogGame;