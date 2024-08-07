import { S } from './Dialogs.styles'
import { Dialog } from "./dialog/Dialog";
import React from "react";
import { dialogsDataType, messagesInDialogsDataType } from "../../redux/dialogsReducer";
import { DialogsFormDataType, ReduxAddMessageForm } from "./AddMessageForm";
import { Message } from "./dialog/Message";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
    sendMessage: (message: string) => void
    updateNewMessageText: (message: string) => void
    newMessageText: string
}

export const Dialogs = ({
                            dialogsData,
                            messagesInDialogsData,
                            sendMessage,
                        }: DialogsPropsType) => {

    const onSubmitHandler = (formData: DialogsFormDataType) => {
        sendMessage(formData.newMessageText);
    }

    //if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <S.Dialogs>
            <S.DialogsItems>
                {dialogsData.map(el =>
                    <Dialog key={el.id} id={el.id} personName={el.personName} />
                )}
            </S.DialogsItems>
            <S.Messages>
                {messagesInDialogsData.map(el =>
                    <Message key={el.id} text={el.text} />
                )}
            </S.Messages>
            <ReduxAddMessageForm onSubmit={onSubmitHandler} />
        </S.Dialogs>
    )
}
