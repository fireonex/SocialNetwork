import styled from "styled-components";
import { useSelector } from "react-redux";
import { rootState } from "../../../../common/types/types";
import React, { useEffect, useRef, useState } from "react";
import { Message } from "./Message";

type Props = {};

export const Messages = ({}: Props) => {
    const messages = useSelector((state: rootState) => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const [lastMessageCount, setLastMessageCount] = useState(messages.length);

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    };

    useEffect(() => {
        if (isAutoScroll && messages.length !== lastMessageCount) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'auto' });
            setLastMessageCount(messages.length);
        }
    }, [messages, isAutoScroll, lastMessageCount]);

    return (
        <MessagesWrapper onScroll={scrollHandler}>
            {messages.map((m) => (
                <Message key={m.id} message={m} />
            ))}
            <div ref={messagesAnchorRef}></div>
        </MessagesWrapper>
    );
};

// Стили для обертки сообщений
const MessagesWrapper = styled.div`
    height: fit-content;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
        border: 2px solid #f1f1f1;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
`;
