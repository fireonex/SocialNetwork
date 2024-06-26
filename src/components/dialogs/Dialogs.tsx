import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./dialog/Message";
import React, {ChangeEvent} from "react";
import {dialogsDataType, messagesInDialogsDataType} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
    sendMessage: () => void
    updateNewMessageText: (message: string) => void
    newMessageText: string
}


export const Dialogs = ({dialogsData,
                            messagesInDialogsData,
                            sendMessage, updateNewMessageText,
                            newMessageText}: DialogsPropsType) => {

    const sendMessageHandler = () => {
        sendMessage();
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
    }

    return (
        <S.Dialogs>
            <S.DialogsItems>
                {dialogsData.map(el =>
                    <Dialog key={el.id} id={el.id} personName={el.personName}/>
                )}
            </S.DialogsItems>
            <S.Messages>
                {messagesInDialogsData.map(el =>
                    <Message key={el.id} text={el.text}/>
                )}
                <textarea value={newMessageText} onChange={onChangeMessageHandler}></textarea>
                <button onClick={sendMessageHandler}>Send message</button>
            </S.Messages>
        </S.Dialogs>
    )
}
