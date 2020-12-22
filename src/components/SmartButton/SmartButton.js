import React from 'react'
import {buttonStyle} from './SmartButton.module.css'

const SmartButton = ({content, onClick}) => {

    const clickHandler = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
        <button className={buttonStyle} onClick={clickHandler}>{content}</button>
    )
}

export default SmartButton