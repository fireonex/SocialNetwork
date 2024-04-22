import React from 'react';
import {Posts} from "./posts/Posts";
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles'
import {actionType, postDataType} from "../redux/State";


type profilePropsType = {
    messagesData: Array<postDataType>
    dispatch: (action: actionType) => void
}

export const Profile = ({messagesData, dispatch}: profilePropsType) => {

    return (
        <S.Profile>
            <ProfileInfo
                avatarSrc={'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                avatarAlt={'nature img'}
                description={'profile description'}

            />
            <Posts messagesData={messagesData}
                   dispatch={dispatch}
            />
        </S.Profile>
    );
};

