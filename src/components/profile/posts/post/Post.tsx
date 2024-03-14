import React from 'react';
import s from './Post.module.css';

export type PostPropsType = {
    message: string
    count: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src={'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69447950/1/?bust=1698331747&width=720'}
                     alt={'avatar'}/>
                {props.message}
                <div className={s.like}>
                    <span>like - {props.count}</span>
                </div>
            </div>
        </div>
    );
};

