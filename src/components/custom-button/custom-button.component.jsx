import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';
import './custom.style.css';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={(isGoogleSignIn ? 'google-button ' : '') + 'custom-button'} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;