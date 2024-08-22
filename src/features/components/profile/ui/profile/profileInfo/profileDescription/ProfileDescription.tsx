import {ReduxProfileDataForm} from "../profileData/ProfileDataForm";
import {ProfileData} from "../profileData/ProfileData";
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
import React, {useState} from "react";
import {ProfileStructure} from "../../../../types";
import styled from "styled-components";

type Props = {
    isOwner: boolean;
    profile: ProfileStructure;
    updateStatus: (status: string) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>;
    status: string;
};


export const ProfileDescription = ({isOwner, profile, updateStatus, updateProfileInfo, status}: Props) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmitHandler = (formData: ProfileStructure) => {
        updateProfileInfo(formData).then(() => {
            setEditMode(false);
        });
    };

    return (
        <ProfileRightSide>
            {editMode ? (
                <ReduxProfileDataForm
                    initialValues={profile}
                    onSubmit={onSubmitHandler}
                    profile={profile}
                />
            ) : (
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    setEditMode={() => setEditMode(true)}
                />
            )}
            <ProfileStatusWithHooks
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
            />
        </ProfileRightSide>
    );
};



const ProfileRightSide = styled.div`
  flex-grow: 1;
`;