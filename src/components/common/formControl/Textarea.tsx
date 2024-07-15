import React from "react";
import {InputProps} from "./Input";
import {FormControlComponent} from "./FormControl";

export type TextareaProps = {
    input: InputProps;
    meta: MetaProps;
}

type MetaProps = {
    touched: boolean;
    error?: string;
    warning?: string;
}

export const Textarea: React.FC<TextareaProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControlComponent input={input} meta={meta}>
            <textarea {...input} {...restProps} />
        </FormControlComponent>
    );
}