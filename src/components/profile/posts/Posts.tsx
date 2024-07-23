import React from 'react';
import {Post} from "./post/Post";
import {postDataType} from "../../../redux/profileReducer";
import {PostsFormDataType, ReduxAddPostForm} from "./AddPostForm";


type postsPropsType = {
    messagesData: Array<postDataType>
    addPost: (newPostText: string) => void;
}

export const Posts = ({messagesData, addPost}: postsPropsType) => {

    const onSubmitHandler = (formData: PostsFormDataType) => {
        addPost(formData.newPostText);
        //alert(formData.newPostText)
    };

    return (
        <div>
            my posts
            <ReduxAddPostForm onSubmit={onSubmitHandler}/>
            {messagesData.map(el =>
                <Post key={el.id} message={el.post} count={el.likesCount} />
            )}
        </div>
    );
};
