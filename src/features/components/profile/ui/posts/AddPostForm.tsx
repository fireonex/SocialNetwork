import * as React from 'react';
import { InjectedFormProps, reduxForm } from "redux-form";
import { MaxLengthCreator, MinLengthCreator } from "../../../../../common/utils/validators";
import { IconButton } from "../../../../../common/commonComponents/antdComponents/IconButton";
import { UploadOutlined } from "@ant-design/icons";
import { createField } from "../../../../../common/commonComponents/formControl/FormControl";
import { Textarea } from "../../../../../common/commonComponents/formControl/Textarea";
import styled from "styled-components";


export type PostsFormDataType = {
    newPostText: string
}

const maxLength = MaxLengthCreator(100);
const minLength = MinLengthCreator(3);

const AddPostForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <FormRow>
                <FieldContainer>
                    {createField('What\'s on your mind?', 'newPostText', [], Textarea)}
                </FieldContainer>
                <IconButtonWrapper>
                    <IconButton icon={<UploadOutlined />} htmlType="submit" />
                </IconButtonWrapper>
            </FormRow>
        </form>
    );
};

export const ReduxAddPostForm = reduxForm<PostsFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm);

const FormRow = styled.div`
    display: flex;
    align-items: flex-start; 
    justify-content: center;
    gap: 10px; 
`;

const FieldContainer = styled.div`
    width: 300px; 
`;

const IconButtonWrapper = styled.div`
    display: flex;
    align-items: center; 
`;
