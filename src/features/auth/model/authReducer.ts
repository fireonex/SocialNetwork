import {Action, AnyAction} from "redux";
import {securityAPI} from "../api/securityAPI";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/authAPI";
import {rootState} from "../../../common/types/types";
import {authPageActions, authState, LoginFormData} from "../types";
import {handleAsyncError} from "../../../common/utils/handleAsyncError";

// Actions
const SET_USER_DATA = 'social-network/auth/SET-USER-DATA';
const SET_IS_LOGGED_IN = 'social-network/auth/SET-IS-LOGGED-IN';
const SET_CAPTCHA_URL = 'social-network/auth/SET-CAPTCHA-URL';



type ThunkLoggedIn = ThunkAction<void, rootState, unknown, Action<string>>;
type Thunk = ThunkAction<void, rootState, unknown, authPageActions>;

// Initial State
let initialState: authState = {
    id: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

// Reducer
export const authReducer = (state = initialState, action: authPageActions): authState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_IS_LOGGED_IN:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export const setIsLoggedInAC = (formData: LoginFormData) => ({
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
export const getAuthMeTC = (): Thunk => async (dispatch: ThunkDispatch<rootState, unknown, AnyAction>) => {
    try {
        const data = await authAPI.authMe();
        if (data.resultCode === 0) {
            const { id, email } = data.data;
            dispatch(setAuthUserDataAC(id, email, true));
        }
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    }
};



export const loggedInTC = (formData: LoginFormData): ThunkLoggedIn => async (dispatch) => {
    try {
        const response = await authAPI.login(formData);
        if (response.resultCode === 0) {
            dispatch(getAuthMeTC());
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrlTC());
            }

            const errorMessage = response.messages.length ? response.messages[0] : 'Some Error';
            dispatch(stopSubmit('login', { _error: errorMessage }));
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(stopSubmit('login', { _error: error.message }));
        } else {
            dispatch(stopSubmit('login', { _error: 'Unknown error occurred' }));
        }
    }
};



export const loggedOutTC = (): Thunk => async (dispatch: ThunkDispatch<rootState, unknown, AnyAction>) => {
    try {
        const response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, false));
        }
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    }
};

export const getCaptchaUrlTC = (): Thunk => async (dispatch: ThunkDispatch<rootState, unknown, AnyAction>) => {
    try {
        const response = await securityAPI.getCaptchaUrl();
        const captchaURL = response.data.url
        dispatch(setCaptchaUrlAC(captchaURL))
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    }
};