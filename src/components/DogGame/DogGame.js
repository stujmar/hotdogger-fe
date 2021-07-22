import React, { useState } from 'react';
import { background, dogImage, gameWrapper, plate, flexParent, leftSection, rightSection } from './DogGame.module.css';

const DogGame = () => {
    const [ onions, setOnions ] = useState([]);

    return (<React.Fragment>
        <div className={background}>
        <div className={flexParent}>
            <div className={leftSection}></div>
            <div className={plate}>
                <div className={gameWrapper}>
                    <div className={dogImage}></div>
                </div>
            </div>
            <div className={rightSection}></div>
        </div>
        </div>
    </React.Fragment>)
}

export default DogGame;