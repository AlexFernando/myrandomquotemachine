import React from 'react';
import './Button.css';


const Button = ({onClick, title, color}) => {
    return (  
        <button className="button" style={{backgroundColor: color}} onClick={onClick}>{title}</button>
    );
}
 
export default Button;