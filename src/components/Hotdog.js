import React, { useState } from 'react';
import { bottom, hotdog, top, middle } from '../styles/Hotdog.module.css'

const Hotdog = () => {

    const [middleArray, setMiddle] = useState([]);
    const section = <div className={middle}></div>

    const add = () => {
        setMiddle(middleArray.concat(section));
    }

    const subtract = () => {
        let newMiddle = [...middleArray];
        newMiddle.shift();
        setMiddle(newMiddle);
    }


    return (
        <div className={hotdog}>
            <button onClick={add} className={top}></button>
            {middleArray}
            <button onClick={subtract} className={bottom}></button>
        </div>
    )
}

export default Hotdog;