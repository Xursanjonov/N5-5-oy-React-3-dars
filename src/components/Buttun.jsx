import React from 'react'

const Buttun = ({ id, className, onClick, children, type = "button", }) => {
    return <button id={id} className={className + " btn"} onClick={onClick} type={type} > {children} </button>
};

export default Buttun