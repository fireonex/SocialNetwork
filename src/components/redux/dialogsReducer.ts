import {actionType} from "./redux-store";

//---------types----------------------------------------------------//
export type sendMessageActionType = ReturnType<typeof sendMessageAC>

export type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type dialogsDataType = {
    id: number
    personName: string
}

export type messagesInDialogsDataType = {
    id: number
    text: string
}

export type dialogsPageType = {
    dialogsData: dialogsDataType[]
    messagesInDialogsData: messagesInDialogsDataType[]
    newMessageText: string
}

//-------------------------------------------------------------------//

let initialState: dialogsPageType = {
    dialogsData: [
        {id: 1, personName: 'Sam'},
        {id: 2, personName: 'John'},
        {id: 3, personName: 'Sarah'},
        {id: 4, personName: 'Tom'},
        {id: 5, personName: 'Rebecca'}
    ],
    messagesInDialogsData: [
        {id: 1, text: 'Whats up bro??'},
        {id: 2, text: 'I love you'},
        {id: 3, text: 'Lets go to restaurant'},
        {id: 4, text: 'Hey, Im online'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: actionType) => {


    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage = {id: state.messagesInDialogsData.length + 1, text: state.newMessageText};
            return {
                ...state,
                messagesInDialogsData: [...state.messagesInDialogsData, newMessage],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newText
            };
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