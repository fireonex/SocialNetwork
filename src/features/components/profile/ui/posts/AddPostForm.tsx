import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator, MinLengthCreator, RequiredField} from "../../../../../common/utils/validators";
import {Textarea} from "../../../../../common/commonComponents/formControl/Textarea";


export type PostsFormDataType = {
    newPostText: string
}


const maxLength = MaxLengthCreator(100);
const minLength = MinLengthCreator(3);


const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={Textarea}
                      placeholder={'What\'s on your mind?'}
                      validate={[RequiredField, maxLength, minLength]}
            />
            <button>Add post</button>
        </form>
    );
};

export const ReduxAddPostForm = reduxForm<PostsFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)