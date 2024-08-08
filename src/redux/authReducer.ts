import {AnyAction} from "redux";
import {authAPI, sequrityAPI} from "../api/api";
import {LoginFormDataType} from "../components/login/LoginForm";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

// Actions
const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';
const SET_IS_LOGGED_IN = 'social-network/auth/SET-IS-LOGGED-IN';
const SET_CAPTCHA_URL = 'social-network/auth/SET-CAPTCHA-URL';

// Types
export type authActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setCaptchaUrlAC>;

export type authStateType = {
    id: number | null;
    email: string | null;
    isAuth: boolean;
    captchaUrl: null | string;
};

type ThunkType = ThunkAction<void, rootStateType, unknown, authActionsType>;

// Initial State
let initialState: authStateType = {
    id: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

// Reducer
export const authReducer = (state = initialState, action: authActionsType): authStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_IS_LOGGED_IN:
            return {
                ...state,
                ...action.data,  // добавляем данные из формы
                isAuth: true // Установить isAuth в true при логине
            };
        case SET_CAPTCHA_URL:
            return {
                ...state, captchaUrl: action.url
            }
        default:
            return state;
    }
};

// Action Creators
export const setAuthUserDataAC = (id: number | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: { id, email, isAuth }
}) as const;

export const setIsLoggedInAC = (formData: LoginFormDataType) => ({
    type: SET_IS_LOGGED_IN,
    data: {
        id: formData.id || null,
        email: formData.email,
    }
}) as const;

export const setCaptchaUrlAC = (url: string) => ({
    type: SET_CAPTCHA_URL,
    url
}) as const;


// Thunks
export const getAuthMeTC = (): ThunkType => async (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    try {
        const response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            const { id, email } = response.data.data;
            dispatch(setAuthUserDataAC(id, email, true));
        }
    } catch (error) {
        console.error("Error in getAuthMeTC:", error);
    }
};

export const loggedInTC = (formData: LoginFormDataType): ThunkType => async (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    try {
        const response = await authAPI.login(formData);
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC());
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }

            const errorMessage = response.messages.length ? response.messages : 'Some Error';
            dispatch(stopSubmit('login', { _error: errorMessage }));
        }
    } catch (error) {
        console.error("Error in loggedInTC:", error);
    }
};

export const loggedOutTC = (): ThunkType => async (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    try {
        const response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, false));
        }
    } catch (error) {
        console.error("Error in loggedOutTC:", error);
    }
};

export const getCaptchaUrlTC = (): ThunkType => async (dispatch: ThunkDispatch<rootStateType, unknown, AnyAction>) => {
    try {
        const response = await sequrityAPI.getCaptchaUrl();
        const captchaURL = response.data.url
        dispatch(setCaptchaUrlAC(captchaURL))
    } catch (error) {
        console.error("Error in loggedOutTC:", error);
    }
};