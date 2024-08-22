import React, {ChangeEvent, useState} from 'react';
import {Preloader} from "../../../../../../common/commonComponents/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import examplePhoto from "../../../../../../common/assets/defaultSmallUserImg.png";
import {ProfileData} from "./profileData/ProfileData";
import {ReduxProfileDataForm} from "./profileData/ProfileDataForm";
import {ProfileStructure} from "../../../types";
import {Image} from "antd";
import styled from "styled-components";
import {EyeOutlined, UploadOutlined} from '@ant-design/icons';
import {StyledButton} from "../../../../../../common/commonComponents/antdComponents/StyledButton";


type Props = {
    status: string;
    profile: ProfileStructure;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>
};


const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .upload-button {
    margin-top: 10px;
  }
`;

export const ProfileInfo = ({
                                                 status,
                                                 profile,
                                                 updateStatus,
                                                 isOwner,
                                                 savePhoto,
                                                 updateProfileInfo
                                             }: Props) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />;
    }

    const onSubmitHandler = (formData: ProfileStructure) => {
        updateProfileInfo(formData).then(() => {
            setEditMode(false);
        });
    };

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <Image
                src={profile.photos?.large || examplePhoto}
                alt={'Profile photo'}
                preview={{
                    mask: <EyeOutlined style={{ fontSize: '24px', color: 'white' }} />,
                    movable: false,
                }}
            />
            {isOwner && (
                <UploadWrapper>
                    <label htmlFor="file-upload">
                        <StyledButton icon={<UploadOutlined />} className="upload-button">
                            Change Profile Photo
                        </StyledButton>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={onMainPhotoSelected}
                        style={{ display: 'none' }}
                    />
                </UploadWrapper>
            )}
            {editMode ? (
                <ReduxProfileDataForm initialValues={profile} onSubmit={onSubmitHandler} profile={profile} />
            ) : (
                <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => setEditMode(true)} />
            )}
            <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
    );
};

