import React, {ChangeEvent} from 'react';
import {Post} from "./post/Post";
import {actionType, addPostActionType, postDataType} from "../../redux/State";


type postsPropsType = {
    messagesData: Array<postDataType>
    dispatch: (action: actionType) => void
    //addPost: () => void
    //newPostText: string
    //updateNewPostText: (newText: string) => void
}

export const Posts = ({messagesData, dispatch}: postsPropsType) => {

    const addPostHandler = () => {
        dispatch({type: "ADD-POST"});
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: ''});
        // addPost();
        // updateNewPostText('');

    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value});
        //updateNewPostText(e.currentTarget.value);
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

