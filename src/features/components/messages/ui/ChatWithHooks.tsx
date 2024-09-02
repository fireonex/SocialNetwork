import {Messages} from "./Messages/Messages";
import {AddMessageComponent} from "./Messages/addMessage/AddMessageComponent";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListeningTC, stopMessagesListeningTC} from "../model/chat-reducer";
import {rootState} from "../../../../common/types/types";
import {ErrorNotification} from "../../../../common/commonComponents/errorNotification/errorNotification";
import {S} from "./ChatWithHooks.styles"

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
        <S.ChatContainer>
            {status === 'error' && (
                <ErrorNotification message={'Some error occurred. Please refresh the page'} />
            )}
            <S.MessagesContainer>
                <Messages />
            </S.MessagesContainer>
            <AddMessageComponent />
        </S.ChatContainer>
    );
};

export default ChatWithHooks;


