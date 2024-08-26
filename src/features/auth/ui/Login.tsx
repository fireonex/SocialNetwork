import React from "react";
import { Redirect } from "react-router-dom";
import { LoginFormData } from "../types";
import { ReduxLoginForm } from "./LoginForm";
import {S} from "./Login.styles"

type Props = {
    loggedIn: (formData: LoginFormData) => void;
    isAuth: boolean;
    captchaUrl: string | null;
};

export const Login = ({ loggedIn, isAuth, captchaUrl }: Props) => {

    const onSubmitHandler = (formData: LoginFormData) => {
        loggedIn(formData);
    };

    if (isAuth) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <S.LoginContainer>
            <S.LoginTitle>Login</S.LoginTitle>
            <ReduxLoginForm onSubmit={onSubmitHandler} captchaUrl={captchaUrl} />
        </S.LoginContainer>
    );
};

