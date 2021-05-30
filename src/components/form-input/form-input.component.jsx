import React from 'react';
import './form-input.style.css';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input type="text" onChange={handleChange} className="form-input" {...otherProps} />
        <label className={'innerLabel' + (otherProps.value.length ? ' shrink' : '')}>{otherProps.name}</label>
    </div>
)

export default FormInput;