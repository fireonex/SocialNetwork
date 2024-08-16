import React from 'react';
import {Post} from "./post/Post";
import {PostsFormDataType, ReduxAddPostForm} from "./AddPostForm";
import {postData} from "../../types";


type postsPropsType = {
    messagesData: Array<postData>
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
