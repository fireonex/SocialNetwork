import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./dialog/Message";
import {dialogsDataType, messagesInDialogsDataType} from "../redux/State";
import React from "react";


type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
}


export const Dialogs = ({dialogsData, messagesInDialogsData}: DialogsPropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessageHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            alert(text)
        }
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessageHandler}>Send message</button>
            </S.Messages>
        </S.Dialogs>
    )
}


