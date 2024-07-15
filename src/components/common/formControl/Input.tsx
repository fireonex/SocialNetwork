import React from "react";
import {TextareaProps} from "./Textarea";
import {FormControlComponent} from "./FormControl";

export type InputProps = {
    name: string;
    value: any;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onFocus: () => void;
}

export const Input: React.FC<TextareaProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControlComponent input={input} meta={meta}>
            <input {...input} {...restProps} />
        </FormControlComponent>
    );
}