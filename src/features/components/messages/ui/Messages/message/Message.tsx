import img from '../../../../../../common/assets/defaultSmallUserImg.png';
import {ChatMessageApi} from "../../../api/chat-api";
import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {rootState} from "../../../../../../common/types/types";
import {S} from "./Message.styles"

type Props = {
    message: ChatMessageApi;
};

export const Message = ({ message }: Props) => {
    const thisUserId = useSelector((state: rootState) => state.auth.id);

    const isMyMessage = message.userId === thisUserId;

    return (
        <S.MessageWrapper isMyMessage={isMyMessage}>
            <S.MessageContent isMyMessage={isMyMessage}>
                <S.UserAvatar src={message.photo ? message.photo : img} alt={'avatar'} />
                <S.MessageText>{message.message}</S.MessageText>
            </S.MessageContent>
            <S.MessageAuthor isMyMessage={isMyMessage}>
                <NavLink to={`/profile/${message.userId}`}>{message.userName}</NavLink>
            </S.MessageAuthor>
        </S.MessageWrapper>
    );
};

