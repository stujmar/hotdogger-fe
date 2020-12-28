import React from 'react'
import { burgerBar, hamburger, mobileLogo } from './BurgerBar.module.css'

const BurgerBar = () => {
    return (
        <div className={burgerBar}>
            <div className={mobileLogo}></div>
        <div className={hamburger}></div>
        </div>
    )
}

export default BurgerBar