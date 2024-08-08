import {LoginFormDataType, ReduxLoginForm} from "./LoginForm";
import React from "react";
import {Redirect} from "react-router-dom";

type LoginProps = {
    loggedInTC: (formData: LoginFormDataType) => void
    isAuth: boolean
    captchaUrl: string | null
};


export const Login = ({loggedInTC, isAuth, captchaUrl}: LoginProps) => {

    const onSubmitHandler = (formData: LoginFormDataType) => {
        loggedInTC(formData)
    }

    //     email: string
    //     password: string
    //     rememberMe: boolean

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <div style={{margin: '10%'}}>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onSubmitHandler} captchaUrl={captchaUrl}/>
            </div>
        );
    }

}