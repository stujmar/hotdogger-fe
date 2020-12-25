import React from 'react';
import FooterButton from './FooterButton';
import { footer } from './Footer.module.css'

const Footer = () => {

        const handleReset = (copy) =>{
            console.log(copy);
        }

        return (
            <div className={footer}>
                <FooterButton copy="Changelog" onClick={handleReset}/>
                <FooterButton copy="Save" onClick={handleReset}/>
                <FooterButton copy="Load" onClick={handleReset}/>
                <FooterButton copy="Reset" onClick={handleReset}/>
            </div>
        )
    
}
export default Footer;