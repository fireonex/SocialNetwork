import React, {ChangeEvent} from 'react';
import {Post} from "./post/Post";
import {addPostAC, postDataType, updateNewPostTextAC} from "../../redux/profileReducer";
import {actionType} from "../../redux/redux-store";


type postsPropsType = {
    messagesData: Array<postDataType>
    dispatch: (action: actionType) => void
}

export const Posts = ({messagesData, dispatch}: postsPropsType) => {

    const addPostHandler = () => {
        dispatch(addPostAC())
        //dispatch({type: "ADD-POST"});
        dispatch(updateNewPostTextAC(''))
        //dispatch({type: "UPDATE-NEW-POST-TEXT", newText: ''});
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
        //dispatch({type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value});
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

