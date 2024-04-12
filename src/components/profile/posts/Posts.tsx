import React from 'react';
import {Post} from "./post/Post";
import {postDataType} from "../../redux/State";

type postsPropsType = {
    messagesData: Array<postDataType>
    addPost: (postText: string) => void
}

export const Posts = ({messagesData, addPost}: postsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
        }
    }

    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement}></textarea>
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

