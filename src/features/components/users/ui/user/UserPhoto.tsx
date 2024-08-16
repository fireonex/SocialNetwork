import * as React from 'react';
import {S} from "../Users.styles";
import examplePhoto from "../../../../../common/assets/defaultSmallUserImg.png";
import {userData} from "../../types";


type Props = {
    user: userData
};
export const UserPhoto = ({user}: Props) => {
    return (
        <S.UserPhoto
            src={user.photos.small === null ? examplePhoto : user.photos.small}
            alt={"user photo"}
        />
    );
};