import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles'
import {postDataType} from "../redux/State";


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
            <Posts messagesData={messagesData}/>
        </S.Profile>
    );
};

