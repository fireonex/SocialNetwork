import React from "react";
import styled from "styled-components";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators";


const FormControlStyle = styled.div<{ error: boolean }>`
    textarea {
        box-shadow: ${props => (props.error ? "0 0 2px 2px rgba(218, 34, 34, 0.54)" : "none")};
    }

    input {
        box-shadow: ${props => (props.error ? "0 0 2px 2px rgba(218, 34, 34, 0.54)" : "none")};
    }

    span {
        color: #971f1f;
    }

`;


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


