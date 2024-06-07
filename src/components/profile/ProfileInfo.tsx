import React from 'react';
import { ProfileType } from "../../redux/profileReducer";
import {Preloader} from "../common/preloader/Preloader";

type ProfilePropsType = {
    avatarSrc: string;
    avatarAlt: string;
    description: string;
    profile: ProfileType;
};

export const ProfileInfo: React.FC<ProfilePropsType> = ({ avatarSrc, avatarAlt, description, profile }) => {
    return (
        <div>
            {!profile ? <Preloader/> :
                <>
                    <div>
                        <img
                            src={avatarSrc}
                            alt={avatarAlt}/>
                    </div>
                    <div>
                        <img
                            src={profile.photos?.large || 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                            alt={'Profile photo'}/>
                        <div>{description}</div>
                    </div>
                </>
            }
        </div>
    );
};
