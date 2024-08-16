import {Action, AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profilePageActions, profileReducer} from "../features/components/profile/model/profileReducer";
import {dialogsPageActions, dialogsReducer} from "../features/components/dialogs/model/dialogsReducer";
import {navbarReducer} from "../features/components/navbar/navbarReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";
import {rootState} from "../common/types/types";
import {usersPageActions, usersReducer} from "../features/components/users/model/usersReducer";
import {authActions} from "../features/auth/types";
import {authReducer} from "../features/auth/model/authReducer";


type action = profilePageActions
    | dialogsPageActions
    | usersPageActions
    | authActions


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbarPage: navbarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

export type AppDispatch = ThunkDispatch<rootState, unknown, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, rootState, unknown, Action<string>>;
export type InferActions<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunk<A extends Action = Action, R = Promise<void>> = ThunkAction<R, rootState, unknown, A>
export let store: Store<rootState, action> = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store