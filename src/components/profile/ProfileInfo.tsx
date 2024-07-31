import React from 'react';
import {ProfileType} from "../../redux/profileReducer";
import {Preloader} from "../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import examplePhoto from "../../assets/defaultSmallUserImg.png";

type ProfilePropsType = {
    status: string;
    profile: ProfileType;
    updateStatus: (status: string) => void;
};

export const ProfileInfo: React.FC<ProfilePropsType> = ({
                                                            status,
                                                            profile,
                                                            updateStatus}) => {
    return (
        <div>
            {!profile ? <Preloader/> :
                <>
                    <div>
                        <img
                            src={profile.photos?.large || examplePhoto}
                            alt={'Profile photo'}/>
                        <h3>{profile.fullName}</h3>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </>
            }
        </div>
    );
};
