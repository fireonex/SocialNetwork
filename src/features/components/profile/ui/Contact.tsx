import React from "react";
import {Field, WrappedFieldArrayProps} from "redux-form";
import {Input} from "../../../../common/commonComponents/formControl/Input";

type Props = {
    contactTitle: string;
    contactValue: string | null;
};

export const Contact = ({ contactTitle, contactValue }: Props) => (
    <div>
        <b>{contactTitle}:</b> {contactValue}
    </div>
);

const renderContacts = ({ fields, meta: { error, submitFailed } }: WrappedFieldArrayProps<Props>) => (
    <div>

        {fields.map((contact, index) => (
            <div key={index}>
                <b>{fields.get(index).contactTitle}:</b>
                <Field
                    name={`${contact}.contactValue`}
                    type="text"
                    component={Input}
                    placeholder="Contact Value"
                />
            </div>
        ))}
        {submitFailed && error && <span>{String(error)}</span>}
    </div>
);

export default renderContacts