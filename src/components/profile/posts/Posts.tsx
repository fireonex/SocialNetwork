import React from 'react';
import {Post} from "./post/Post";
import {postDataType} from "../../redux/State";

type postsPropsType = {
    messagesData: Array<postDataType>
}

export const Posts = ({messagesData}: postsPropsType) => {

    return (
        <div>

            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
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

