import {v1} from "uuid";
import {dialogsPage} from "../types";

// Actions
const SEND_MESSAGE = 'social-network/dialogs/SEND-MESSAGE';

// Types
export type dialogsPageActions = ReturnType<typeof sendMessageAC>;

// Initial State
let initialState: dialogsPage = {
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
export const dialogsReducer = (state = initialState, action: dialogsPageActions): dialogsPage => {
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
