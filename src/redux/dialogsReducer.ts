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
}

export type dialogsPageActionsType = sendMessageActionType | updateNewMessageTextActionType

//-------------------------------------------------------------------//

let initialState: dialogsPageType = {
    dialogsData: [
        // {id: 1, personName: 'Sam'},
        // {id: 2, personName: 'John'},
        // {id: 3, personName: 'Sarah'},
        // {id: 4, personName: 'Tom'},
        // {id: 5, personName: 'Rebecca'}
    ],
    messagesInDialogsData: [
        // {id: 1, text: 'Whats up bro??'},
        // {id: 2, text: 'I love you'},
        // {id: 3, text: 'Lets go to restaurant'},
        // {id: 4, text: 'Hey, Im online'}
    ],

}

export const dialogsReducer = (state = initialState, action: dialogsPageActionsType) => {


    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...state,
                messagesInDialogsData: [...state.messagesInDialogsData, action.newMessageBody],
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


export const sendMessageAC = (newMessageBody: string) => ({
    type: 'SEND-MESSAGE', newMessageBody
}) as const

export const updateNewMessageTextAC = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
}) as const