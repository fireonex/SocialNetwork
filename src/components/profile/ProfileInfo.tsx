import React, {ChangeEvent, useState} from 'react';
import {ProfileType} from "../../redux/profileReducer";
import {Preloader} from "../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import examplePhoto from "../../assets/defaultSmallUserImg.png";
import {ProfileData} from "./ProfileData";
import {ReduxProfileDataForm} from "./ProfileDataForm";

type ProfilePropsType = {
    status: string;
    profile: ProfileType;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileType) => Promise<any>
};


export const ProfileInfo: React.FC<ProfilePropsType> = ({
                                                            status,
                                                            profile,
                                                            updateStatus,
                                                            isOwner,
                                                            savePhoto,
                                                            updateProfileInfo
                                                        }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmitHandler = (formData: ProfileType) => {
        //setEditMode(false);
        //updateProfileInfo(formData)
        updateProfileInfo(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };


    // const initialValues = {
    //     newFullName: profile.fullName,
    //     newLookingForAJob: profile.lookingForAJob,
    //     newProfessionalSkills: profile.lookingForAJobDescription || "",
    //     newAboutMe: profile.aboutMe || "",
    //     contacts: Object.keys(profile.contacts).map(key => ({
    //         contactTitle: key,
    //         contactValue: profile.contacts[key as keyof ContactsType]
    //     }))
    // };


    return (
        <div>
            <>
                <div>
                    <img
                        src={profile.photos?.large || examplePhoto}
                        alt={'Profile photo'}/>
                    {isOwner && <div>
                        <input type={'file'} onChange={onMainPhotoSelected}/>
                    </div>}
                    {editMode ?
                        <ReduxProfileDataForm initialValues={profile} onSubmit={onSubmitHandler} profile={profile}/>
                        : <ProfileData profile={profile} isOwner={isOwner} setEditMode={() => {
                            setEditMode(true)
                        }}/>
                    }
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </>
        </div>
    );
};
