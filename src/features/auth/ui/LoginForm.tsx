import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {InputFormComponent} from "../../../common/commonComponents/formControl/InputFormComponent";
import {createField, GetStringKeys} from "../../../common/commonComponents/formControl/FormControl";
import {RequiredField} from "../../../common/utils/validators";
import {LoginFormData} from "../types";
import {StyledButton} from "../../../common/commonComponents/antdComponents/StyledButton";


type Props = {
    captchaUrl: string | null
}




type LoginFormValuesTypeKeys = GetStringKeys<LoginFormData>

const LoginForm: React.FC<InjectedFormProps<LoginFormData, Props> & Props> = ({handleSubmit
                                                                       , error, captchaUrl}) => {

    return <form onSubmit={handleSubmit}>
        <>
            {createField<LoginFormValuesTypeKeys>('email', 'email', [RequiredField], InputFormComponent)}
            {createField<LoginFormValuesTypeKeys>('password', 'password', [RequiredField], InputFormComponent, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], InputFormComponent, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [RequiredField], InputFormComponent, {})}

            <div style={{color: '#971f1f'}}>
                {error}
            </div>
            <div>
                <StyledButton>Login</StyledButton>
            </div>
        </>
    </form>
}

export const ReduxLoginForm = reduxForm<LoginFormData, Props>({
    form: 'login'
})(LoginForm)