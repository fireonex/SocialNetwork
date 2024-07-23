import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {S} from './Profile.styles';
import {PostsContainer} from "./posts/PostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type profilePropsType = {
    profile: ProfileType;
    status: string
    updateStatus: (status: string) => void
};

export const Profile: React.FC<profilePropsType> = ({
                                                        profile,
                                                        status,
                                                        updateStatus
                                                        }) => {

    return (
        <S.Profile>
            <ProfileInfo
                status={status}
                profile={profile}
                updateStatus={updateStatus}
            />
            <PostsContainer />
        </S.Profile>
    );
};
