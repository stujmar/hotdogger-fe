import React from 'react';
import { dogBackground, dogImage } from './DogGame.module.css';

const DogGame = () => {
    return (<React.Fragment>
        <div className={dogBackground}>
            <div className={dogImage}>
                
            </div>
        </div>
    </React.Fragment>)
}

export default DogGame;