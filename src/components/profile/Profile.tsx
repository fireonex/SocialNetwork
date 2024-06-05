import React from 'react';
import { ProfileInfo } from "./ProfileInfo";
import { S } from './Profile.styles';
import { PostsContainer } from "./posts/PostsContainer";
import { ProfileType } from "../../redux/profileReducer";

type profilePropsType = {
    avatarSrc: string;
    avatarAlt: string;
    description: string;
    profile: ProfileType;
};

export const Profile: React.FC<profilePropsType> = ({ avatarSrc, avatarAlt, description, profile }) => {
    return (
        <S.Profile>
            <ProfileInfo
                avatarSrc={avatarSrc}
                avatarAlt={avatarAlt}
                description={description}
                profile={profile}
            />
            <PostsContainer />
        </S.Profile>
    );
};
