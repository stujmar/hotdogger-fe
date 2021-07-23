import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStat } from '../../redux/gameSlice';
import { background, dogImage, gameWrapper, plate, flexParent, leftSection, rightSection } from './DogGame.module.css';

const DogGame = () => {
    const dispatch = useDispatch();
    const [ onions, setOnions ] = useState([]);

    const handleClick = () => {
        console.log("You clicked that dog");
        dispatch(updateStat({type: 'hotdogs', amount: 1}));
    }

    return (<React.Fragment>
        <div className={background}>
        <div className={flexParent}>
            <div className={leftSection}></div>
            <div className={plate}>
                <div className={gameWrapper}>
                    <button type="button" onClick={() => handleClick()} className={dogImage}></button>
                </div>
            </div>
            <div className={rightSection}></div>
        </div>
        </div>
    </React.Fragment>)
}

export default DogGame;