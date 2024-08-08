import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/formControl/Input";
import {RequiredField} from "../../utils/validators";
import {createField, GetStringKeys} from "../common/formControl/FormControl";


export type LoginFormDataType = {
    id?: number;
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: null | string;
}

type LoginFormProps = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormDataType>

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginFormProps> & LoginFormProps> = ({handleSubmit
                                                                       , error, captchaUrl}) => {

    return <form onSubmit={handleSubmit}>
        {/*<div>*/}
        {/*    <Field placeholder={'email'} name={'email'} component={Input} validate={[RequiredField]}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Field placeholder={'password'} name={'password'} component={Input} validate={[RequiredField]}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me*/}
        {/*</div>*/}

        {createField<LoginFormValuesTypeKeys>('email', 'email', [RequiredField], Input)}
        {createField<LoginFormValuesTypeKeys>('password', 'password', [RequiredField], Input, {type: 'password'})}
        {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [RequiredField], Input, {})}

        <div style={{color: '#971f1f'}}>
            {error}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const ReduxLoginForm = reduxForm<LoginFormDataType, LoginFormProps>({
    form: 'login'
})(LoginForm)