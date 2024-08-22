import styled from "styled-components";
import {Theme} from "../../styles";
import {Input} from "antd";

const {TextArea} = Input;

export const CustomTextarea = styled(TextArea)`
    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen};
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35);
    }

    cursor: pointer;
`;