import React from 'react';
import FooterButton from './FooterButton';

const Footer = () => {

        const handleReset = () =>{
            console.log('reset');
        }

        return (
            <div className="footer">
                <FooterButton copy="Changelog"/>
                <FooterButton copy="Save"/>
                <FooterButton copy="Load"/>
                <FooterButton copy="Reset" onClick={handleReset}/>
                <div className='changelog'>Changelog</div>
                <div className='footer-content'>Save</div>
                <div className='footer-content'>Load</div>
                <div className='footer-content'>Reset</div>
            </div>
        )
    
}
export default Footer;