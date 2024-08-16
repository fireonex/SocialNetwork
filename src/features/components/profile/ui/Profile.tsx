import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles';
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileStructure} from "../types"

type Props = {
    profile: ProfileStructure;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>;
};

export const Profile: React.FC<Props> = ({
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
