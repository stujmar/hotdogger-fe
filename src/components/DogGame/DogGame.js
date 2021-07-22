import React, { useState } from 'react';
import { dogBackground, dogImage, gameWrapper, plate } from './DogGame.module.css';

const DogGame = () => {
    const [ onions, setOnions ] = useState([]);

    return (<React.Fragment>
        <div className={dogBackground}>
        <div className={plate}>

            <div className={gameWrapper}>

                <div className={dogImage}></div>
            </div>
        </div>
        </div>
    </React.Fragment>)
}

export default DogGame;