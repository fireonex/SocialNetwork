import {profilePage} from "../../features/components/profile/types";
import {usersPage} from "../../features/components/users/types";
import {navbarPage} from "../../features/components/navbar/navbarReducer";
import {FormStateMap} from "redux-form";
import {authState} from "../../features/auth/types";
import {dialogsPage} from "../../features/components/dialogs/types"
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export type appState = {
    initialized: boolean;
    error: string | null
};

export type rootState = {
    profilePage: profilePage
    dialogsPage: dialogsPage
    usersPage: usersPage
    navbarPage: navbarPage
    auth: authState
    app: appState
    form: FormStateMap
}

export type Thunk = ThunkAction<void, rootState, unknown, AnyAction>;
export type thunkDispatch = ThunkDispatch<rootState, unknown, AnyAction>

