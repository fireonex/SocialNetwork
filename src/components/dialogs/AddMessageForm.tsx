import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator, RequiredField} from "../../utils/validators";
import {Textarea} from "../common/formControl/Textarea";


export type DialogsFormDataType = {
    newMessageText: string
}

const maxLength = MaxLengthCreator(80);

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageText'}
                       component={Textarea}
                       placeholder={'enter your message'}
                       validate={[RequiredField, maxLength]}
                />
                <button>Send</button>
            </div>
        </form>
    );
};

export const ReduxAddMessageForm = reduxForm<DialogsFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)