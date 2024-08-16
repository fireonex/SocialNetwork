import React, {ChangeEvent, useState} from 'react';
import {Preloader} from "../../../../common/commonComponents/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import examplePhoto from "../../../../common/assets/defaultSmallUserImg.png";
import {ProfileData} from "./ProfileData";
import {ReduxProfileDataForm} from "./ProfileDataForm";
import {ProfileStructure} from "../types";


type Props = {
    status: string;
    profile: ProfileStructure;
    updateStatus: (status: string) => void;
    isOwner: boolean;
    savePhoto: (file: File) => void;
    updateProfileInfo: (profile: ProfileStructure) => Promise<any>
};


export const ProfileInfo: React.FC<Props> = ({
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

    const onSubmitHandler = (formData: ProfileStructure) => {
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
