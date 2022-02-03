import React from 'react'
import './Checkbox.css'

const Checkbox = ({ checked, disabled, label, handleClick }) => {
    return (
        <div 
            className='container'
            onClick={() => {
                    if (disabled) return
                    
                    handleClick()
                }
            }
        >
            <div
                className={`checkbox${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}`}
                tabIndex={0}
            >
                {
                    checked && 
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.71564 1.18533C9.8727 1.34239 9.8727 1.59704 9.71564 1.75411L4.08498 7.38477C3.92791 7.54183 3.67326 7.54183 3.51619 7.38477L0.298674 4.16725C0.141609 4.01019 0.141608 3.75553 0.298673 3.59847L0.867456 3.02968C1.02452 2.87262 1.27917 2.87262 1.43624 3.02968L3.80059 5.39403L8.57807 0.616545C8.73514 0.45948 8.98979 0.45948 9.14685 0.616545L9.71564 1.18533Z" fill="white"/>
                    </svg>
                }
            </div>
            <label>{label}</label>
        </div>
    )
}

export default Checkbox;