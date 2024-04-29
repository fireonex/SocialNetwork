import {combineReducers, createStore} from "redux";
import {addPostActionType, profilePageDataType, profileReducer, updateNewPostTextActionType} from "./profileReducer";
import {dialogsPageType, dialogsReducer, sendMessageActionType, updateNewMessageTextActionType} from "./dialogsReducer";
import {navbarPageType, navbarReducer} from "./navbarReducer";


export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    navbarPage: navbarPageType
}

export type actionType = addPostActionType
    | updateNewPostTextActionType
    | sendMessageActionType
    | updateNewMessageTextActionType





let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer
});

export let store = createStore(reducers)