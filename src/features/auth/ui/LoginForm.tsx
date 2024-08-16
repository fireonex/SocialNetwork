import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../../common/commonComponents/formControl/Input";
import {createField, GetStringKeys} from "../../../common/commonComponents/formControl/FormControl";
import {RequiredField} from "../../../common/utils/validators";
import {LoginFormData} from "../types";


type Props = {
    captchaUrl: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormData>

const LoginForm: React.FC<InjectedFormProps<LoginFormData, Props> & Props> = ({handleSubmit
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

export const ReduxLoginForm = reduxForm<LoginFormData, Props>({
    form: 'login'
})(LoginForm)