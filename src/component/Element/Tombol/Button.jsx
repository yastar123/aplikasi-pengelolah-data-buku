
import React from "react";

const Button = (props) => {
    const {
        children,
        className,
        onClick = () => {}, 
        type='submit'
    } = props;
    const style = {
        marginTop: '1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        fontWeight: 'bold', 
        padding: '0.3rem 1rem', 
        borderRadius: '0.25rem' 
    };
    
    
    return (
        <button className={`${className}`} style={style}
            type={type}
            onClick={onClick} > 
            {children} 
        </button>
    )
}

export default Button;