import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormDataType} from "../components/login/LoginForm";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type authActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof setIsLoggedInAC>;

export type authStateType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
};

let initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

type ThunkType = ThunkAction<void, rootStateType, unknown, authActionsType>;

export const authReducer = (state = initialState, action: authActionsType): authStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            };
        case "SET-IS-LOGGED-IN":
            return {
                ...state,
                isAuth: true // Установить isAuth в true при логине
            };
        default:
            return state;
    }
};


export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "SET-USER-DATA",
    payload: {id, email, login, isAuth}
}) as const;

export const setIsLoggedInAC = (formData: LoginFormDataType) => ({
    type: "SET-IS-LOGGED-IN",
    data: formData
}) as const;


export const getAuthMeTC = () => (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    authAPI.authMe().then((response) => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        }
    });
};

export const loggedInTC = (formData: LoginFormDataType): ThunkType => (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    authAPI.login(formData).then((response) => {
        if (response.resultCode === 0) {
            //dispatch(setIsLoggedInAC(formData));
            dispatch(getAuthMeTC()); // Обновить данные пользователя после логинизации
        } else {
            //dispatch(stopSubmit('login', { _error: 'Email or password is wrong'}))
            let errorMessage = response.messages.length ? response.messages : 'Some Error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    });
};

export const loggedOutTC = () => (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    authAPI.logout().then((response) => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
        }
    });
};
