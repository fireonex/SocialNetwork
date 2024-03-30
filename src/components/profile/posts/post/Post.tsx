import React from 'react';
import {S} from './Post.styles'


export type PostPropsType = {
    message: string
    count: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div>
            <S.Post>
                <S.Avatar src={'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69447950/1/?bust=1698331747&width=720'}
                     alt={'avatar'}/>
                {props.message}
                <S.LikeWrapper>
                    <span>like - {props.count}</span>
                </S.LikeWrapper>
            </S.Post>
        </div>
    );
};





