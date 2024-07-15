import * as React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostsFormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={'textarea'}
                      placeholder={'What\'s on your mind?'}/>
            <button>Add post</button>
        </form>
    );
};

export const ReduxAddPostForm = reduxForm<PostsFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)