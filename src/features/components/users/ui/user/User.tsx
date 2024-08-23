import React from 'react';
import { NavLink } from "react-router-dom";
import { UserPhoto } from "./UserPhoto";
import { userData } from "../../types";
import { StyledButton } from "../../../../../common/commonComponents/antdComponents/StyledButton";
import { SpanWithText } from "../../../../../common/commonComponents/textElements/SpanWithText";
import { SmallHeading } from "../../../../../common/commonComponents/textElements/SmallHeading";
import {S} from "./User.styles"

type Props = {
    user: userData;
    followingInProgress: number[];
    followHandler: (user: userData) => void;
    unfollowHandler: (user: userData) => void;
};

export const User = ({ user, unfollowHandler, followingInProgress, followHandler }: Props) => {
    return (
        <S.UserContainer>
            <S.UserContent>
                <NavLink to={`/profile/${user.id}`}>
                    <UserPhoto user={user} />
                </NavLink>
                <SmallHeading text={user.name} />
                <SpanWithText text={user.status ? user.status : ''} />
                {user.followed ? (
                    <StyledButton
                        onClick={() => unfollowHandler(user)}
                        disabled={followingInProgress.includes(user.id)}
                    >
                        Unfollow
                    </StyledButton>
                ) : (
                    <StyledButton
                        onClick={() => followHandler(user)}
                        disabled={followingInProgress.includes(user.id)}
                    >
                        Follow
                    </StyledButton>
                )}
            </S.UserContent>
        </S.UserContainer>
    );
};


