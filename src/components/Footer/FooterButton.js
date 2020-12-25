import React from 'react';
import {buttonStyle} from './FooterButton.module.css'

const FooterButton = ({copy, onClick, style}) => {

    const handleClick = () => {
        onClick(copy);
    }

    return (
        <button className={buttonStyle} style={style} onClick={handleClick} type="button">{copy}</button>
    )
}

export default FooterButton;