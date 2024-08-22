import React from "react";
import {WrappedFieldProps} from "redux-form";
import {FormControl} from "./FormControl";
import styled from "styled-components";
import {Input} from "antd";
import {Theme} from "../../styles";

const { TextArea } = Input;


const CustomTextarea = styled(TextArea)`
    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen}; 
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35); 
    }
`;

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <CustomTextarea {...input} {...restProps} autoSize={{ minRows: 3, maxRows: 5 }} variant="filled"/>
    </FormControl>
}