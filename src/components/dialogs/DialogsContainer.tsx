import React from "react";
import {
    dialogsDataType,
    messagesInDialogsDataType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../redux/dialogsReducer";
import {actionType, store} from "../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
}


export const DialogsContainer = ({dialogsData, messagesInDialogsData}: DialogsPropsType) => {

    const sendMessage = () => {
        store.dispatch(sendMessageAC())
        store.dispatch(updateNewMessageTextAC(''))
    }

    const updateNewMessageText = (message: string) => {
        store.dispatch(updateNewMessageTextAC(message))
    }

    return (
        <Dialogs sendMessage={sendMessage}
                 updateNewMessageText={updateNewMessageText}
                 dialogsData={dialogsData}
                 messagesInDialogsData={messagesInDialogsData}/>
    )
}


