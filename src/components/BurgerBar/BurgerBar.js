import React, { useState } from 'react'
import { burgerBar, hamburger, mobileLogo, on, off } from './BurgerBar.module.css'

const BurgerBar = ({ toggle, onClick }) => {

    const [menuStyle, setMenuStyle] = useState(`${hamburger} ${on}`);

    if (toggle && menuStyle == `${hamburger} ${off}`) {
        console.log("going on");
        setMenuStyle(`${hamburger} ${on}`); 
    } else if (!toggle && menuStyle == `${hamburger} ${on}`) {
        console.log("going off");
        setMenuStyle(`${hamburger} ${off}`);
    }
        
    const toggleHandler = () => {
        onClick();
    }

    return (
        <button onClick={toggleHandler} className={burgerBar}>
            <div className={mobileLogo}></div>
        <div className={menuStyle}></div>
        </button>
    )
}

export default BurgerBar