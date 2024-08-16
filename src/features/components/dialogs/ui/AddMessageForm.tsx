import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator, RequiredField} from "../../../../common/utils/validators";
import {Textarea} from "../../../../common/commonComponents/formControl/Textarea";
import {DialogsFormData} from "../types";


const maxLength = MaxLengthCreator(80);

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormData>> = (props) => {
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

export const ReduxAddMessageForm = reduxForm<DialogsFormData>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)