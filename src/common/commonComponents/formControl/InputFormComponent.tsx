import React from "react";
import {FormControl} from "./FormControl";
import {WrappedFieldProps} from "redux-form";
import {Input} from 'antd';
import styled from "styled-components";
import {Theme} from "../../styles";
import {CustomCheckbox} from "../checkbox/CustomCheckbox";

const CustomInput = styled(Input)`
    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen};
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35); /
    }
`;


export const InputFormComponent: React.FC<WrappedFieldProps & { type?: string }> = (props) => {
    const {input, meta, type, ...restProps} = props;

    return (
        <FormControl {...props}>
            {type === 'checkbox'
                ? <CustomCheckbox
                    checked={input.value}
                    onChange={input.onChange}
                />
                : <CustomInput {...input} {...restProps} variant="filled"/>
            }
        </FormControl>
    );
};

