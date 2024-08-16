import React from "react";
import styled from "styled-components";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators";


const FormControlStyle = styled.div<{ error: boolean }>`
    textarea {
        border: ${props => (props.error ? "solid red 2px" : "none")};
    }

    input {
        border: ${props => (props.error ? "solid red 2px" : "none")};
    }

    span {
        color: #971f1f;
    }

`;

// export const FormControl: React.FC<TextareaProps & { children: React.ReactNode }> =
//     ({meta: {touched, error}, children }) => {
//
//     const hasError = touched && error;
//     return (
//         <FormControl error={!!hasError}>
//             <div>
//                 {children}
//             </div>
//             {hasError && <span>{error}</span>}
//         </FormControl>
//     );
// }

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <FormControlStyle error={!!hasError}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </FormControlStyle>
    )
}




export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>


