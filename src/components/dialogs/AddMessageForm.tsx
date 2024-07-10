import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsFormDataType = {
    newMessageText: string
}

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageText'}
                       component={'textarea'}
                       placeholder={'enter your message'}/>
                <button>Send</button>
            </div>
        </form>
    );
};

export const ReduxAddMessageForm = reduxForm<DialogsFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)