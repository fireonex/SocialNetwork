import styled from "styled-components";

const AlertContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

const AlertContent = styled.div`
    background-color: #f8d7da;
    border: 1px solid #f5c2c7;
    color: #721c24;
    padding: 15px 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const AlertIcon = styled.span`
    margin-right: 10px;
    font-size: 24px;
`;

const AlertMessage = styled.span`
    font-weight: bold;
`;

export const S = {
    AlertContainer,
    AlertContent,
    AlertIcon,
    AlertMessage
}