import styled from "styled-components";

export const StyledButton = styled.button`
    width:50px;
    height: 100%;
    padding: 0px 10px;
    background-color: ${(props) => getBackgroundColor(props.variant)};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: ${(props) => getHoverColor(props.variant)};
    }
`;

// 배경색
const getBackgroundColor = (variant) => {
    switch (variant) {
        case 'primary':
            return '#007BFF';
        case 'secondary':
            return '#6C757D';
        case 'success':
            return '#28A745';
        case 'danger':
            return '#DC3545';
        default:
            return '#007BFF';
    }
};

// 배경색 호버
const getHoverColor = (variant) => {
    switch (variant) {
        case 'primary':
            return '#0056b3';
        case 'secondary':
            return '#545b62';
        case 'success':
            return '#218838';
        case 'danger':
            return '#c82333';
        default:
            return '#0056b3';
    }
};