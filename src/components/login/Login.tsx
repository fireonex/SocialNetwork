import {LoginFormDataType, ReduxLoginForm} from "./LoginForm";
import React from "react";

type Props = {

};


export const Login = () => {

    const onSubmitHandler = (formData: LoginFormDataType) => {
        //dispatch собранных данных
    }


    return (
        <div style={{margin: '10%'}}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmitHandler}/>
        </div>
    );

}