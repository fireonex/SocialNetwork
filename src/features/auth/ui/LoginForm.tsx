import { InjectedFormProps, reduxForm } from "redux-form";
import React from "react";
import { InputFormComponent } from "../../../common/commonComponents/formControl/InputFormComponent";
import { createField, GetStringKeys } from "../../../common/commonComponents/formControl/FormControl";
import { LoginFormData } from "../types";
import { StyledButton } from "../../../common/commonComponents/antdComponents/StyledButton";
import {S} from "./Login.styles"

type Props = {
    captchaUrl: string | null;
};

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormData>;

const LoginForm: React.FC<InjectedFormProps<LoginFormData, Props> & Props> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <>
                <S.FieldWrapper>
                    {createField<LoginFormValuesTypeKeys>("email", "email", [], InputFormComponent)}
                </S.FieldWrapper>
                <S.FieldWrapper>
                    {createField<LoginFormValuesTypeKeys>("password", "password", [], InputFormComponent, { type: "password" })}
                </S.FieldWrapper>
                <S.CheckboxWrapper>
                    {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], InputFormComponent, { type: "checkbox" }, "Remember me")}
                </S.CheckboxWrapper>

                {captchaUrl && (
                    <>
                        <img src={captchaUrl} alt="captcha" />
                        <S.FieldWrapper>
                            {createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [], InputFormComponent)}
                        </S.FieldWrapper>
                    </>
                )}

                {error && <S.ErrorText>{error}</S.ErrorText>}

                <S.ButtonWrapper>
                    <StyledButton>Login</StyledButton>
                </S.ButtonWrapper>
            </>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<LoginFormData, Props>({
    form: "login"
})(LoginForm);
