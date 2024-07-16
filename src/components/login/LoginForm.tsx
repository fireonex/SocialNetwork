import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/formControl/Input";
import {RequiredField} from "../../utils/validators";


export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha?: boolean | string
}



const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'login'} name={'login'} component={Input} validate={[RequiredField]}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={Input} validate={[RequiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const ReduxLoginForm = reduxForm<LoginFormDataType>({
    form: 'login'
})(LoginForm)