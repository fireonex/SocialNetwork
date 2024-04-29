import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles'
import {postDataType} from "../redux/profileReducer";
import {PostsContainer} from "./posts/PostsContainer";


type profilePropsType = {
    messagesData: Array<postDataType>
}

export const Profile = ({messagesData}: profilePropsType) => {

    return (
        <S.Profile>
            <ProfileInfo
                avatarSrc={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                avatarAlt={'nature img'}
                description={'profile description'}

            />
            <PostsContainer messagesData={messagesData}/>
        </S.Profile>
    );
};

