import React from 'react';
import { ProfileInfo } from "./ProfileInfo";
import { S } from './Profile.styles';
import { PostsContainer } from "./posts/PostsContainer";
import { ProfileType } from "../../redux/profileReducer";

type profilePropsType = {
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
};

export const Profile: React.FC<profilePropsType> = ({
                                                        profile,
                                                        status,
                                                        updateStatus,
                                                        isOwner,
                                                        savePhoto
                                                    }) => {
    return (
        <S.Profile>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                status={status}
                profile={profile}
                updateStatus={updateStatus}
            />
            <PostsContainer />
        </S.Profile>
    );
};
