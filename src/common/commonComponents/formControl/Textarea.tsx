import React from "react";
import {WrappedFieldProps} from "redux-form";
import {FormControl} from "./FormControl";


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}