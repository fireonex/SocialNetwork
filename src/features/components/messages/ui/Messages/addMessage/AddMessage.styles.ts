import styled from "styled-components";
import TextArea from "antd/es/input/TextArea";
import {Theme} from "../../../../../../common/styles/styles";

const AddMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const MessageTextarea = styled(TextArea)`
    &.ant-input {
        resize: none; 
        height: 80px; 
        border-radius: 12px;
        padding: 10px;
        font-size: 14px;
    }

    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen};
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35);
    }
`;


export const S = {
    AddMessageWrapper, MessageTextarea
}