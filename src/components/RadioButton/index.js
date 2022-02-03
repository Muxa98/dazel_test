import React from 'react'
import './RadioButton.css'

const RadioButton = ({ selected, label, handleClick }) => {
    return (
        <div className='container' onClick={handleClick}>
            <span className={`radio-button${selected ? ' selected' : ''}`}></span>
            <label>{label}</label>
        </div>
    )
}

export default RadioButton