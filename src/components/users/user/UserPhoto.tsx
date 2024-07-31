import * as React from 'react';
import {S} from "../Users.styles";
import examplePhoto from "../../../assets/defaultSmallUserImg.png";
import {userDataType} from "../../../redux/usersReducer";

type UserPhotoProps = {
    user: userDataType
};
export const UserPhoto = ({user}: UserPhotoProps) => {
    return (
        <S.UserPhoto
            src={user.photos.small === null ? examplePhoto : user.photos.small}
            alt={"user photo"}
        />
    );
};