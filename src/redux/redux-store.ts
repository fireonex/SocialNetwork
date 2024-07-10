import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profilePageActionsType, profilePageDataType, profileReducer} from "./profileReducer";
import {dialogsPageActionsType, dialogsPageType, dialogsReducer} from "./dialogsReducer";
import {navbarPageType, navbarReducer} from "./navbarReducer";
import {usersPageActionsType, usersPageType, usersReducer} from "./usersReducer";
import {authActionsType, authReducer, authStateType} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {FormStateMap, reducer as formReducer} from "redux-form";

export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
    navbarPage: navbarPageType
    auth: authStateType
    form: FormStateMap
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
    auth: authReducer,
    form: formReducer
});

export let store: Store<rootStateType, actionType> = createStore(reducers,  applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store