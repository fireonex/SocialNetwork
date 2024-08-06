import React, { ChangeEvent, useState } from 'react';
import { ProfileType } from "../../redux/profileReducer";
import { Preloader } from "../common/preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import examplePhoto from "../../assets/defaultSmallUserImg.png";

type ProfilePropsType = {
    status: string;
    profile: ProfileType;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
};

export const ProfileInfo: React.FC<ProfilePropsType> = ({
                                                            status,
                                                            profile,
                                                            updateStatus,
                                                            isOwner,
                                                            savePhoto
                                                        }) => {
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            {!profile ? <Preloader /> :
                <>
                    <div>
                        <img
                            src={profile.photos?.large || examplePhoto}
                            alt={'Profile photo'} />
                        {isOwner && <div>
                            <input type={'file'} onChange={onMainPhotoSelected} />
                        </div>}
                        <h3>{profile.fullName}</h3>
                        <ProfileStatus status={status} updateStatus={updateStatus} />
                    </div>
                </>
            }
        </div>
    );
};
