import React from 'react';
import {StyledButton} from './styled'

const Button = ({ title, onClick, disabled = false, type = 'button', variant = 'primary' }) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            variant={variant}
        >
            {title}
        </StyledButton>
    );
}

export default Button;