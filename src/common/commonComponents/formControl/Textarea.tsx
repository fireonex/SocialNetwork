import React from "react";
import {WrappedFieldProps} from "redux-form";
import {FormControl} from "./FormControl";
import {CustomTextarea} from "../antdComponents/CustomTextarea";


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <CustomTextarea {...input} {...restProps} autoSize={{ minRows: 3, maxRows: 5 }} variant="filled"/>
    </FormControl>
}