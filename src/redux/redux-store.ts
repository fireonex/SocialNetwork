import {combineReducers, createStore, Store} from "redux";
import {profilePageActionsType, profilePageDataType, profileReducer} from "./profileReducer";
import {dialogsPageActionsType, dialogsPageType, dialogsReducer} from "./dialogsReducer";
import {navbarPageType, navbarReducer} from "./navbarReducer";
import {usersPageActionsType, usersPageType, usersReducer} from "./usersReducer";
import {authActionsType, authReducer, authStateType} from "./authReducer";


export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
    navbarPage: navbarPageType
    auth: authStateType
}


export type actionType = profilePageActionsType
    | dialogsPageActionsType
    | usersPageActionsType
    | authActionsType


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbarPage: navbarReducer,
    auth: authReducer
});

export let store: Store<rootStateType, actionType> = createStore(reducers)

//@ts-ignore
window.store = store