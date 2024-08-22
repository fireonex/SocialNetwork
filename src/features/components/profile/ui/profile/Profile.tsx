import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";

import {PostsContainer} from "../posts/PostsContainer";
import {ProfileStructure} from "../../types"
import styled from "styled-components";

type Props = {
    profile: ProfileStructure;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>;
};

const StyledProfile = styled.div `
    margin: 20px;
    padding: 10px;
`



export const Profile: React.FC<Props> = ({
                                                        profile,
                                                        status,
                                                        updateStatus,
                                                        isOwner,
                                                        savePhoto,
                                                        updateProfileInfo
                                                    }) => {
    return (
        <StyledProfile>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                status={status}
                profile={profile}
                updateStatus={updateStatus}
                updateProfileInfo={updateProfileInfo}
            />
            <PostsContainer isOwner={isOwner}/>
        </StyledProfile>
    );
};
