import styled from "styled-components";
import img from './../../../../common/assets/defaultSmallUserImg.png';
import { ChatMessageApi } from "../api/chat-api";
import { NavLink } from "react-router-dom";
import React from "react";
import {Theme} from "../../../../common/styles/styles";

type Props = {
    message: ChatMessageApi;
};

export const Message = ({ message }: Props) => {
    const isMyMessage = message.userId === 31083; // Это ваш id, замените его на динамический, если нужно

    return (
        <MessageWrapper isMyMessage={isMyMessage}>
            <MessageContent isMyMessage={isMyMessage}>
                <UserAvatar src={message.photo ? message.photo : img} alt={'avatar'} />
                <MessageText>{message.message}</MessageText>
            </MessageContent>
            <MessageAuthor isMyMessage={isMyMessage}>
                <NavLink to={`/profile/${message.userId}`}>{message.userName}</NavLink>
            </MessageAuthor>
        </MessageWrapper>
    );
};

// Стили для обертки одного сообщения
const MessageWrapper = styled.div<{ isMyMessage: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ isMyMessage }) => (isMyMessage ? "flex-end" : "flex-start")};
    margin-bottom: 10px;
    padding: 10px 15px;
`;

// Стили для основного содержимого сообщения
const MessageContent = styled.div<{ isMyMessage: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${({ isMyMessage }) => (isMyMessage ? Theme.colors.ButtonLight : "#f1f1f1")};
    color: ${({ isMyMessage }) => (isMyMessage ? 'black' : "#333")};
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 80%;
`;

// Стили для текста сообщения
const MessageText = styled.p`
    font-size: 1.2em;
    margin: 0 10px;
`;

// Стили для автора сообщения
const MessageAuthor = styled.span<{ isMyMessage: boolean }>`
    margin-top: 5px;
    font-size: 0.9em;
    color: ${({ isMyMessage }) => (isMyMessage ? "#6a6a6a" : "#aaa")};
`;


const UserAvatar = styled.img`
    width: 50px; // Уменьшение размера фото
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
`;