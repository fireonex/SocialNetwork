import React, {ChangeEvent} from 'react';
import {Post} from "./post/Post";
import {postDataType} from "../../redux/State";


type postsPropsType = {
    messagesData: Array<postDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Posts = ({messagesData, addPost, updateNewPostText}: postsPropsType) => {

    const addPostHandler = () => {
        addPost();
        updateNewPostText('');
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value);
    }

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea onChange={onChangePostHandler}/>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>
                <div>
                    {
                        messagesData.map((el) =>
                            <Post key={el.id} message={el.post} count={el.likesCount}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

