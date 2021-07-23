import React, { useState } from 'react';
import { background, dogImage, gameWrapper, plate, flexParent, leftSection, rightSection } from './DogGame.module.css';

const DogGame = () => {
    const [ onions, setOnions ] = useState([]);
    const handleClick = () => {
        console.log("You clicked that dog");
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