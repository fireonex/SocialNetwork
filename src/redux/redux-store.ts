import {Action, AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profilePageActionsType, profilePageDataType, profileReducer} from "./profileReducer";
import {dialogsPageActionsType, dialogsPageType, dialogsReducer} from "./dialogsReducer";
import {navbarPageType, navbarReducer} from "./navbarReducer";
import {usersPageActionsType, usersPageType, usersReducer} from "./usersReducer";
import {authActionsType, authReducer, authStateType} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {FormStateMap, reducer as formReducer} from "redux-form";
import {appReducer, appStateType} from "./appReducer";


export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
    navbarPage: navbarPageType
    auth: authStateType
    app: appStateType
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
    app: appReducer,
    form: formReducer,
});

export type AppDispatch = ThunkDispatch<rootStateType, unknown, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, rootStateType, unknown, Action<string>>;
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, rootStateType, unknown, A>
export let store: Store<rootStateType, actionType> = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store