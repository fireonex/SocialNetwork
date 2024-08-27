import {Button, ButtonProps} from "antd";
import React from "react";
import styled from "styled-components";

const IconButtonStyle = styled(Button)`
  position: relative;
  background: linear-gradient(90deg, #547c7e 0%, #87a5a1 100%);
  transition: background 0.5s ease;
  border: none;
  color: white;
  font-size: 18px;

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

  &:hover .anticon {
    color: white; 
  }

  &:hover::before {
    background: linear-gradient(90deg, rgba(155, 182, 179, 1) 0%, rgb(211, 193, 160) 100%);
  }
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