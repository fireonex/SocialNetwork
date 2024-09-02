import styled from "styled-components";
import {Theme} from "../../../../../../common/styles/styles";

const MessageWrapper = styled.div<{ isMyMessage: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ isMyMessage }) => (isMyMessage ? "flex-end" : "flex-start")};
    margin-bottom: 10px;
    padding: 10px 15px;
`;

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

const MessageText = styled.p`
    font-size: 1.2em;
    margin: 0 10px;
`;

const MessageAuthor = styled.span<{ isMyMessage: boolean }>`
    margin-top: 5px;
    font-size: 0.9em;
    color: ${({ isMyMessage }) => (isMyMessage ? "#6a6a6a" : "#aaa")};
`;


const UserAvatar = styled.img`
    width: 50px; 
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
`;

export const S = {
    MessageAuthor, MessageContent, MessageText, MessageWrapper, UserAvatar
}