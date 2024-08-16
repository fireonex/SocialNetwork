import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import React from "react";
import {ReduxAddMessageForm} from "./AddMessageForm";
import {Message} from "./dialog/Message";
import {messagesInDialogsData, dialogsData, DialogsFormData} from "../types"

type Props = {
    dialogsData: Array<dialogsData>
    messagesInDialogsData: Array<messagesInDialogsData>
    sendMessage: (message: string) => void
    updateNewMessageText: (message: string) => void
    newMessageText: string
}

export const Dialogs = ({
                            dialogsData,
                            messagesInDialogsData,
                            sendMessage,
                        }: Props) => {

    const onSubmitHandler = (formData: DialogsFormData) => {
        sendMessage(formData.newMessageText);
    }

    //if (!isAuth) return <Redirect to={'/login'}/>

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
            </S.Messages>
            <ReduxAddMessageForm onSubmit={onSubmitHandler}/>
        </S.Dialogs>
    )
}
