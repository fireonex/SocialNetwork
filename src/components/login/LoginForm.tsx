import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'login'} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)