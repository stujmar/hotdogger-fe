import React from 'react';
import { Link } from 'react-router-dom';
import { baseStyle } from '../styles/Button.module.css';

class Button extends React.Component{
  
    render () {
        return (
            // <button className="base-styles" style={{backgroundColor: "rgb(255, 94, 0)"}} onClick={this.clickHandler}>{this.props.content}</button>
            <Link className={baseStyle} style={this.props.style} to={this.props.path}>{this.props.content}</Link>
        )
    }
}
export default Button;