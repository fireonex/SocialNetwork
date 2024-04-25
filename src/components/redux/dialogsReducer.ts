import {actionType, dialogsPageType} from "./State";


export type sendMessageActionType = ReturnType<typeof sendMessageAC>

export type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>



export const dialogsReducer = (state: dialogsPageType, action: actionType) => {


    switch (action.type) {
        case 'SEND-MESSAGE':
            // const newMessage = {id: 5, text: state.newMessageText};
            // state.messagesInDialogsData.push(newMessage);
            // return state;

            const newMessage = { id: state.messagesInDialogsData.length + 1, text: state.newMessageText };
            return {
                ...state,
                messagesInDialogsData: [...state.messagesInDialogsData, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}


export const sendMessageAC = () => ({
    type: 'SEND-MESSAGE'
}) as const

export const updateNewMessageTextAC = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
}) as const