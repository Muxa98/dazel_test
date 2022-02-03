import React from 'react'
import RadioButton from '../RadioButton'
import './RadioButtonGroup.css'

const RadioButtonGroup = ({ buttons, handleChange, selectedButton }) => {
    return (
        <div className='radio-button-group-wrapper'>
            {
                buttons.map((button, index) => (
                    <RadioButton 
                        label={button.label} 
                        key={'button-' + index} 
                        handleClick={() => handleChange(button.name)}
                        selected={button.name === selectedButton}
                    />
                ))
            }
        </div>
    )
}

export default RadioButtonGroup