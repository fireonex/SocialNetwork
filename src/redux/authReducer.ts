import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginFormDataType} from "../components/login/LoginForm";

export type authActionsType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof setIsLoggedInAC>

export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: authActionsType): authStateType=> {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "SET-IS-LOGGED-IN":
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: "SET-USER-DATA", data: {id, email, login}
}) as const

export const setIsLoggedInAC = (formData: LoginFormDataType) => ({
    type: "SET-IS-LOGGED-IN", data: formData
}) as const


export const getAuthMeTC = () => (dispatch: Dispatch) => {
     authAPI.authMe().then((response) => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login));
        }
    });
}

export const loggedInTC = (formData: LoginFormDataType) => (dispatch: Dispatch) => {
    authAPI.login(formData).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(formData));
        }
    });
}