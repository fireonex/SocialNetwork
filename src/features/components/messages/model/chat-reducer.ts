import {Thunk, thunkDispatch} from "../../../../common/types/types";
import {handleAsyncError} from "../../../../common/utils/handleAsyncError";
import {toggleFetching} from "../../users/model/usersReducer";
import {chatAPI, ChatMessageApi, Status} from "../api/chat-api";
import {v1} from "uuid";

// Actions
const MESSAGES_RECEIVED = 'social-network/chat/MESSAGES-RECEIVED';
const STATUS_CHANGED = 'social-network/chat/STATUS-CHANGED';


// Types
export type chatPageActions =
    | ReturnType<typeof messagesReceived>
    | ReturnType<typeof statusChanged>

type ChatMessage = ChatMessageApi & { id: string }

export type chatState = {
    messages: ChatMessage[],
    status: Status
}

// Initial State
let initialState: chatState = {
    messages: [],
    status: 'pending',
};

// Reducer
export const chatReducer = (state = initialState, action: chatPageActions) => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            };
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

// Action Creators
export const messagesReceived = (messages: ChatMessageApi[]) => ({
    type: MESSAGES_RECEIVED, messages
}) as const;

export const statusChanged = (status: Status) => ({
    type: STATUS_CHANGED, status
}) as const;


let _newMessagesHandler: ((messages: ChatMessageApi[]) => void) | null = null

const newMessagesHandlerCreator = (dispatch: thunkDispatch) => {
    if (_newMessagesHandler === null) {
        _newMessagesHandler = (messages) => {
            dispatch(messagesReceived(messages))
        }
    }
    return _newMessagesHandler
}


let _statusChangedHandler: ((status: Status) => void) | null = null

const statusChangedHandlerCreator = (dispatch: thunkDispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status))
        }
    }
    return _statusChangedHandler
}


// Thunks
export const startMessagesListeningTC = (): Thunk =>
    async (dispatch: thunkDispatch) => {
        dispatch(toggleFetching(true));
        try {
            chatAPI.start()
            chatAPI.subscribe('messages-received', newMessagesHandlerCreator(dispatch))
            chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
        } catch (error: unknown) {
            handleAsyncError(error, dispatch);
        } finally {
            dispatch(toggleFetching(false));
        }
    };


export const stopMessagesListeningTC = (): Thunk =>
    async (dispatch: thunkDispatch) => {
        dispatch(toggleFetching(true));
        try {
            chatAPI.unsubscribe('messages-received', newMessagesHandlerCreator(dispatch))
            chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
            chatAPI.stop()
        } catch (error: unknown) {
            handleAsyncError(error, dispatch);
        } finally {
            dispatch(toggleFetching(false));
        }
    };

export const sendMessageTC = (message: string): Thunk =>
    async (dispatch: thunkDispatch) => {
        try {
            chatAPI.sendMessage(message);
        } catch (error: unknown) {
            handleAsyncError(error, dispatch);
        }
    };



