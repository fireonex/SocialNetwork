import React from 'react';
import s from './Posts.module.css';
import {Post} from "./post/Post";


export const Posts = () => {
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
                    <Post message={"How are you?"} count={5}/>
                    <Post message={"Hello!!!"} count={8}/>
                    <Post message={"This is my first post"} count={10}/>
                </div>
            </div>

        </div>
    );
};

