import React from 'react';
import {ProfileType} from "../../redux/profileReducer";
import {Preloader} from "../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

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
                            src={profile.photos?.large || 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                            alt={'Profile photo'}/>
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </>
            }
        </div>
    );
};
