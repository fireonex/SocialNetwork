import {Button, ButtonProps} from "antd";
import styled from "styled-components";

const GButton = styled(Button)`
    font-family: "IM FELL English", serif;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0;;
    position: relative;
    overflow: hidden;
    border: none;
    color: #D6F2EC;
    padding: 10px 20px;
    font-weight: bold;
    background: linear-gradient(90deg, #5F888A 0%, #9BB6B3 100%);
    transition: background 0.5s ease, transform 0.2s ease;
    border-radius: 5px;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, #5F888A 0%, #9BB6B3 100%);
        transition: background 0.5s ease;
        z-index: -1;
        border-radius: inherit;
    }

    &:hover::before {
        background: linear-gradient(90deg, rgba(155, 182, 179, 1) 0%, rgb(211, 193, 160) 100%);
    }

    &:hover {
        transform: scale(1.05); 
        color: white; 
    }
`;

export const StyledButton = (props: ButtonProps) => {
    return (
        <GButton type={'primary'} {...props}/>
    );
};
