import {S} from './Dialogs.styles'
import {Dialog} from "./dialog/Dialog";
import {Message} from "./dialog/Message";
import {dialogsDataType, messagesInDialogsDataType} from "../redux/State";



type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>
    messagesInDialogsData: Array<messagesInDialogsDataType>
}

// export const friendMessage0: FriendMessageType = {
//     id: 100,
//     user: {
//         avatar: avatar,
//         name: 'Friend'
//     },
//     message: {
//         text: 'зеркальное сообщение для тренировки css',
//         time: '22:00',
//     },
// }

export const Dialogs = ({dialogsData, messagesInDialogsData}: DialogsPropsType) => {

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

            </S.Messages>
        </S.Dialogs>
    )
}


