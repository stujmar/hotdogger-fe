import React from 'react'
import { burgerBar, hamburger, mobileLogo, on, off } from './BurgerBar.module.css'

const BurgerBar = (toggle) => {

    let menuStyle = toggle ? `${hamburger} ${on}` : `${hamburger} ${off}`

    return (
        <div className={burgerBar}>
            <div className={mobileLogo}></div>
        <div className={menuStyle}></div>
        </div>
    )
}

export default BurgerBar