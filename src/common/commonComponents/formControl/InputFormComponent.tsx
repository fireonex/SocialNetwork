import React from "react";
import {FormControl} from "./FormControl";
import {WrappedFieldProps} from "redux-form";
import {CustomCheckbox} from "../checkbox/CustomCheckbox";
import {CustomInput} from "../antdComponents/CustomInput";


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

