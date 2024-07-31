import {v1} from "uuid";


// Actions
const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';

// Types
export type sendMessageActionType = ReturnType<typeof sendMessageAC>;

export type dialogsDataType = {
    id: string;
    personName: string;
};

export type messagesInDialogsDataType = {
    id: string;
    text: string;
};

export type dialogsPageType = {
    dialogsData: dialogsDataType[];
    messagesInDialogsData: messagesInDialogsDataType[];
};

export type dialogsPageActionsType = sendMessageActionType;

// Initial State
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
};

// Reducer
export const dialogsReducer = (state = initialState, action: dialogsPageActionsType): dialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
        ...state,
                messagesInDialogsData: [...state.messagesInDialogsData, action.payload], // Добавляем объект
        }
        default:
            return state;
    }
};

// Action Creators
export const sendMessageAC = (newMessageBody: string) => ({
    type: SEND_MESSAGE,
    payload: { id: v1(), text: newMessageBody }
}) as const;
