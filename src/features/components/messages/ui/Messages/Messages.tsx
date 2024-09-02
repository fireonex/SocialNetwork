import {useSelector} from "react-redux";
import {rootState} from "../../../../../common/types/types";
import React, {useEffect, useRef, useState} from "react";
import {Message} from "./message/Message";
import {S} from "./Messages.styles"

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
        <S.MessagesWrapper onScroll={scrollHandler}>
            {messages.map((m) => (
                <Message key={m.id} message={m} />
            ))}
            <div ref={messagesAnchorRef}></div>
        </S.MessagesWrapper>
    );
};


