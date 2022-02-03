import React from 'react'
import './Form.css'

const Form = ({ children, showFormState }) => {
    return (
        <div className='form-wrapper'>
            {children}
            <SubmitButton handleClick={showFormState}/>
        </div>
    )
}

const SubmitButton = ({ handleClick }) => {
    return (
        <button onClick={handleClick}>Submit</button>
    )
}

export default Form