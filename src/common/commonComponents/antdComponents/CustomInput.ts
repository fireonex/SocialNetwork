import styled from "styled-components";
import {Input} from "antd";
import {Theme} from "../../styles/styles";

export const CustomInput = styled(Input)`
    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen};
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35); /
    }
    cursor: pointer;
`;