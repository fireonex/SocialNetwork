import React from "react";
import styled from "styled-components";
import {TextareaProps} from "./Textarea";


const FormControl = styled.div<{ error: boolean }>`
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

export const FormControlComponent: React.FC<TextareaProps & { children: React.ReactNode }> =
    ({meta, children }) => {

    const hasError = meta.touched && meta.error;
    return (
        <FormControl error={!!hasError}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </FormControl>
    );
}


