import React from "react";

const Button = ({ text, onClick, color }) =>{
    
    return(
        <button style={{ background: color, border: 'none' }}  onClick={onClick} className="btn">{text}</button>
    )
}
export default Button;