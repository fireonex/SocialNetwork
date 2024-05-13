import React, {ChangeEvent} from 'react';
import {Post} from "./post/Post";
import {postDataType} from "../../../redux/profileReducer";


type postsPropsType = {
    messagesData: Array<postDataType>
    updateNewPostText: (text: string) => void;
    addPost: () => void;
    newPostText: string;
}

export const Posts = ({messagesData, updateNewPostText, addPost, newPostText}: postsPropsType) => {
    const addPostHandler = () => {
        addPost();
    };

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    };

    return (
        <div>
            my posts
            <div>
                <textarea value={newPostText} onChange={onChangePostHandler} /> {/* Здесь используем value */}
                <button onClick={addPostHandler}>Add post</button>
            </div>
            {messagesData.map(el =>
                <Post key={el.id} message={el.post} count={el.likesCount} />
            )}
        </div>
    );
};
