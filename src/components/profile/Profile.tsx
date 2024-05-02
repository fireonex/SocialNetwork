import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles'
import {PostsContainer} from "./posts/PostsContainer";


type profilePropsType = {
    //messagesData: Array<postDataType>
    //store: Store<rootStateType, actionType>
}

export const Profile = ({}: profilePropsType) => {

    return (
        <S.Profile>
            <ProfileInfo
                avatarSrc={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                avatarAlt={'nature img'}
                description={'profile description'}

            />
            <PostsContainer/>
        </S.Profile>
    );
};

