import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./dialog/Message";
import {actionType, dialogsDataType, messagesInDialogsDataType} from "../redux/State";
import React, {ChangeEvent} from "react";


type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
    dispatch: (action: actionType) => void
    //sendMessage: () => void
    //updateNewMessageText: (newText: string) => void
}


export const Dialogs = ({dialogsData, messagesInDialogsData, dispatch}: DialogsPropsType) => {

    const sendMessageHandler = () => {
        dispatch({type: "SEND-MESSAGE"});
        // sendMessage();
        dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: ''})
        // updateNewMessageText('')
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: e.currentTarget.value})
        // updateNewMessageText(e.currentTarget.value)
    }

    return (
        <S.Dialogs>
            <S.DialogsItems>
                {
                    dialogsData.map(el =>
                        <Dialog key={el.id} id={el.id} personName={el.personName}/>
                    )
                }
            </S.DialogsItems>
            <S.Messages>
                {
                    messagesInDialogsData.map(el =>
                            <Message key={el.id} text={el.text}/>
                        // <FriendMessage key={el.id} text={el.text}/>
                    )
                }
                <textarea onChange={onChangeMessageHandler}></textarea>
                <button onClick={sendMessageHandler}>Send message</button>
            </S.Messages>
        </S.Dialogs>
    )
}


