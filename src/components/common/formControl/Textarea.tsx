import React from "react";

import {WrappedFieldProps} from "redux-form";
import {FormControl} from "./FormControl";

// export type TextareaProps = {
//     input: InputProps;
//     meta: MetaProps;
// }

// type MetaProps = {
//     touched: boolean;
//     error?: string;
//     warning?: string;
// }

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}