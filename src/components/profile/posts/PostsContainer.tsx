import React from 'react';
import {addPostAC, postDataType, updateNewPostTextAC} from "../../redux/profileReducer";
import {store} from "../../redux/redux-store";
import {Posts} from "./Posts";


type postsContainerPropsType = {
    messagesData: Array<postDataType>
}

export const PostsContainer = ({messagesData}: postsContainerPropsType) => {

    const addPostHandler = () => {
        store.dispatch(addPostAC())
        store.dispatch(updateNewPostTextAC(''))
    }

    const updateNewPostTextHandler = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <Posts updateNewPostText={updateNewPostTextHandler} addPost={addPostHandler} messagesData={messagesData}/>
    );
};

