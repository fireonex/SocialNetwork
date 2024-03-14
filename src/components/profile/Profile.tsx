import React from 'react';
import s from './Profile.module.css';
import {Posts} from "./posts/Posts";


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                    alt={'nature img'}/>
            </div>
            <div>
                ava + description
            </div>
            <Posts/>
        </div>
    );
};

