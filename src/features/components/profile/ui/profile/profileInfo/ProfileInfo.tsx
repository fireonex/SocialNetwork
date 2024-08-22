import React from 'react';
import {Preloader} from "../../../../../../common/commonComponents/preloader/Preloader";
import {ProfileStructure} from "../../../types";
import styled from "styled-components";
import {ProfileImageWithButton} from "./profileImage/ProfileImageWithButton";
import {ProfileDescription} from "./profileDescription/ProfileDescription";


type Props = {
    status: string;
    profile: ProfileStructure;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>;
};

const ProfileWrapper = styled.div`
    display: flex;
    gap: 40px; /* Расстояние между блоками */
`;


export const ProfileInfo = ({
                                status,
                                profile,
                                updateStatus,
                                isOwner,
                                savePhoto,
                                updateProfileInfo
                            }: Props) => {


    if (!profile) {
        return <Preloader/>;
    }

    return (
        <ProfileWrapper>
            <ProfileImageWithButton profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
            <ProfileDescription
                profile={profile}
                isOwner={isOwner}
                updateProfileInfo={updateProfileInfo}
                updateStatus={updateStatus}
                status={status}/>
        </ProfileWrapper>
    );
};
