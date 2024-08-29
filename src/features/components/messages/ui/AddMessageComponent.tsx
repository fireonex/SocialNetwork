import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageTC} from "../model/chat-reducer";
import {rootState} from "../../../../common/types/types";
import styled from "styled-components";
import {StyledButton} from "../../../../common/commonComponents/antdComponents/StyledButton";
import TextArea from "antd/es/input/TextArea";
import {Theme} from "../../../../common/styles/styles";

type Props = {};

export const AddMessageComponent = ({}: Props) => {
    const status = useSelector((state: rootState) => state.chat.status);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const sendMessage = () => {
        if (!message) return;
        dispatch(sendMessageTC(message));
        setMessage('');
    };

    return (
        <AddMessageWrapper>
            <MessageTextarea
                onChange={(e: any) => setMessage(e.currentTarget.value)}
                value={message}
                placeholder="Type a message..."
                disabled={status !== "ready"}
                variant="filled"
            />
            <StyledButton onClick={sendMessage} disabled={status !== "ready"}>
                Send
            </StyledButton>
        </AddMessageWrapper>
    );
};

const AddMessageWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const MessageTextarea = styled(TextArea)`
    &.ant-input {
        resize: none; 
        height: 80px; 
        border-radius: 12px;
        padding: 10px;
        font-size: 14px;
    }

    &.ant-input:focus,
    &.ant-input-focused {
        border-color: ${Theme.colors.DarkGreen};
        box-shadow: 0 0 2px 2px rgba(32, 88, 30, 0.35);
    }
`;
