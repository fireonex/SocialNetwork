import {Button, ButtonProps} from "antd";
import React from "react";
import styled from "styled-components";

const IconButtonStyle = styled(Button)`
    
    background: linear-gradient(90deg, #547c7e 0%, #87a5a1 100%);
    transition: background 0.5s ease;
    border: none;
    color: white;
    font-size: 18px;
`;

type Props = Omit<ButtonProps, 'type'> & {
    htmlType?: "button" | "submit" | "reset";
    icon: React.ReactNode;
};

export const IconButton = ({ icon, htmlType = "button", ...props }: Props) => {
    return (
        <IconButtonStyle
            icon={icon}
            htmlType={htmlType}
            shape={'circle'}
            size={'large'}
            {...props}
        />
    );
};