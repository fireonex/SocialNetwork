import { Messages } from "./Messages";
import { AddMessageComponent } from "./AddMessageComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startMessagesListeningTC, stopMessagesListeningTC } from "../model/chat-reducer";
import { rootState } from "../../../../common/types/types";
import { ErrorNotification } from "../../../../common/commonComponents/errorNotification/errorNotification";
import styled from "styled-components";
import { Theme } from "../../../../common/styles/styles";

type Props = {};

const ChatWithHooks = ({}: Props) => {
    const status = useSelector((state: rootState) => state.chat.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListeningTC());
        return () => {
            dispatch(stopMessagesListeningTC());
        };
    }, []);

    return (
        <ChatContainer>
            {status === 'error' && (
                <ErrorNotification message={'Some error occurred. Please refresh the page'} />
            )}
            <MessagesContainer>
                <Messages />
            </MessagesContainer>
            <AddMessageComponent />
        </ChatContainer>
    );
};

export default ChatWithHooks;

// Стилизация чата
const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 150px); // Увеличение отступа от хедера
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

const MessagesContainer = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px; // Уменьшение расстояния между блоками
    padding-right: 10px;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: ${Theme.colors.DarkGreen};
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
