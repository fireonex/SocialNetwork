import React from "react";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";

const CheckboxContainer = styled.label`
    display: inline-block;
    cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? "linear-gradient(90deg, #5F888A 0%, #9BB6B3 100%);" : "#eaeaea")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms;
  border: 2px solid ${(props) => (props.checked ? "#5F888A" : "#cccccc")};

    
  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    color: white;
    font-size: 16px;
  }
`;

export const CustomCheckbox = ({ checked, onChange }: { checked: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
            <CheckOutlined />
        </StyledCheckbox>
    </CheckboxContainer>
);
