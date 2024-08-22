import React from "react";
import {Field, WrappedFieldArrayProps} from "redux-form";
import {InputFormComponent} from "../../../../../../../../common/commonComponents/formControl/InputFormComponent";
import {Caption} from "../../../../../../../../common/commonComponents/textElements/Caption";
import {SpanWithText} from "../../../../../../../../common/commonComponents/textElements/SpanWithText";
import styled from "styled-components";

type Props = {
    contactTitle: string;
    contactValue: string | null;
};


export const Contact = ({ contactTitle, contactValue }: Props) => (
    <Caption text={`${contactTitle}: ${contactValue}`} />
)

const renderContacts = ({ fields, meta: { error, submitFailed } }: WrappedFieldArrayProps<Props>) => (
    <div>

        {fields.map((contact, index) => (
            <div key={index}>
                <b>{fields.get(index).contactTitle}:</b>
                <Field
                    name={`${contact}.contactValue`}
                    type="text"
                    component={InputFormComponent}
                    placeholder="Contact Value"
                />
            </div>
        ))}
        {submitFailed && error && <span>{String(error)}</span>}
    </div>
);

export default renderContacts