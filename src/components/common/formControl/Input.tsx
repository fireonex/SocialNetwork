import React from "react";
import {FormControl} from "./FormControl";
import {WrappedFieldProps} from "redux-form";

// export type InputProps = {
//     name: string;
//     value: any;
//     onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
//     onBlur: () => void;
//     onFocus: () => void;
//     type?: string;
// }

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}