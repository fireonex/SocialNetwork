import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageTC} from "../../../model/chat-reducer";
import {rootState} from "../../../../../../common/types/types";
import {StyledButton} from "../../../../../../common/commonComponents/antdComponents/StyledButton";
import {S} from "./AddMessage.styles"

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
        <S.AddMessageWrapper>
            <S.MessageTextarea
                onChange={(e: any) => setMessage(e.currentTarget.value)}
                value={message}
                placeholder="Type a message..."
                disabled={status !== "ready"}
                variant="filled"
            />
            <StyledButton onClick={sendMessage} disabled={status !== "ready"}>
                Send
            </StyledButton>
        </S.AddMessageWrapper>
    );
};

