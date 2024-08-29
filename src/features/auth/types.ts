import {setAuthUserDataAC, setCaptchaUrlAC, setIsLoggedInAC} from "./model/authReducer";

export type authPageActions =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setCaptchaUrlAC>;

export type authState = {
    id: number | null;
    email: string | null;
    isAuth: boolean;
    captchaUrl: null | string;
};

export type LoginFormData = {
    id?: number;
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: null | string;
}