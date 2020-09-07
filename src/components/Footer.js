import React from 'react';

class Footer extends React.Component{
    render () {
        return (
            <div className="footer">
                <div className='changelog'>Changelog</div>
                <div className='footer-content'>Save</div>
                <div className='footer-content'>Load</div>
                <div className='footer-content'>Reset</div>
            </div>
        )
    }
}
export default Footer;