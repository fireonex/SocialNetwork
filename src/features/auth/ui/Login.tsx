import React from "react";
import {Redirect} from "react-router-dom";
import {LoginFormData} from "../types";
import {ReduxLoginForm} from "./LoginForm";

type Props = {
    loggedInTC: (formData: LoginFormData) => void
    isAuth: boolean
    captchaUrl: string | null
};


export const Login = ({loggedInTC, isAuth, captchaUrl}: Props) => {

    const onSubmitHandler = (formData: LoginFormData) => {
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