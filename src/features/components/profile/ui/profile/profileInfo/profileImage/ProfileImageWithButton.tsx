import { Image } from "antd";
import examplePhoto from "../../../../../../../common/assets/defaultSmallUserImg.png";
import { EyeOutlined, UploadOutlined } from "@ant-design/icons";
import { StyledButton } from "../../../../../../../common/commonComponents/antdComponents/StyledButton";
import React, { ChangeEvent, useRef } from "react";
import { ProfileStructure } from "../../../../types";
import styled from "styled-components";

type Props = {
    isOwner: boolean;
    savePhoto: (file: File) => void;
    profile: ProfileStructure;
};

export const ProfileImageWithButton = ({ isOwner, savePhoto, profile }: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Симулируем клик на input
        }
    };

    return (
        <ProfileLeftSide>
            <Image
                src={profile.photos?.large || examplePhoto}
                width={400}
                alt={'Profile photo'}
                preview={{
                    mask: <EyeOutlined style={{ fontSize: '24px', color: 'white' }} />,
                    movable: false,
                }}
            />
            {isOwner && (
                <UploadWrapper>
                    <StyledButton icon={<UploadOutlined />} className="upload-button" onClick={handleButtonClick}>
                        Change Profile Photo
                    </StyledButton>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={onMainPhotoSelected}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                </UploadWrapper>
            )}
        </ProfileLeftSide>
    );
};

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ProfileLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
