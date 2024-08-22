import React from 'react';
import {S} from './Post.styles'
import {Caption} from "../../../../../../common/commonComponents/textElements/Caption";
import {ProfileStructure} from "../../../types";
import baseAvatar from "common/assets/defaultSmallUserImg.png"
import {SmallHeading} from "../../../../../../common/commonComponents/textElements/SmallHeading";


export type Props = {
    message: string
    count: number
    profile: ProfileStructure | null
}


export const Post = ({message, profile, count}: Props) => {
    return (
        <div>
            <S.Post>
                <S.Avatar src={profile && profile.photos.small ? profile.photos.small : baseAvatar}
                     alt={'avatar'}/>
                <SmallHeading text={message}/>
                <S.LikeWrapper>
                    <Caption text={`like - ${count}`}/>
                </S.LikeWrapper>
            </S.Post>
        </div>
    );
};





