import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles';
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type profileProps = {
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileType) => Promise<any>;
};

export const Profile: React.FC<profileProps> = ({
                                                        profile,
                                                        status,
                                                        updateStatus,
                                                        isOwner,
                                                        savePhoto,
                                                        updateProfileInfo
                                                    }) => {
    return (
        <S.Profile>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                status={status}
                profile={profile}
                updateStatus={updateStatus}
                updateProfileInfo={updateProfileInfo}
            />
            <PostsContainer/>
        </S.Profile>
    );
};
