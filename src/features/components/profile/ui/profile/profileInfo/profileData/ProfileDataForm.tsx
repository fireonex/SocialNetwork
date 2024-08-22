import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileStructure} from "../../../../types";
import {createField, GetStringKeys} from "../../../../../../../common/commonComponents/formControl/FormControl";
import {InputFormComponent} from "../../../../../../../common/commonComponents/formControl/InputFormComponent";
import {Textarea} from "../../../../../../../common/commonComponents/formControl/Textarea";
import {UrlValidator} from "../../../../../../../common/utils/validators";
import {Caption} from "../../../../../../../common/commonComponents/textElements/Caption";
import {SmallHeading} from "../../../../../../../common/commonComponents/textElements/SmallHeading";
import {SaveOutlined} from "@ant-design/icons";
import {IconButton} from "../../../../../../../common/commonComponents/antdComponents/IconButton";
import {S} from "./ProfileDataForm.styles"

type Props = {
    profile: ProfileStructure
}

type ProfileKeys = GetStringKeys<ProfileStructure>

// const maxLength = MaxLengthCreator(50);
// const minLength = MinLengthCreator(2);



export const ProfileDataForm: React.FC<InjectedFormProps<ProfileStructure, Props> & Props> = ({
                                                                                                  handleSubmit,
                                                                                                  profile,
                                                                                                  error,
                                                                                              }) => {
    return (
        <S.Container>
            <S.FormWrapper onSubmit={handleSubmit}>
                <S.ButtonWrapper>
                    <IconButton icon={<SaveOutlined />} htmlType="submit"/>
                </S.ButtonWrapper>

                {error && <S.ErrorWrapper>{error}</S.ErrorWrapper>}
                <SmallHeading text={'Personal Details'}/>
                <S.FieldWrapper>
                    <Caption text={'Full name'}/>
                    {createField<ProfileKeys>('Full name', 'fullName', [], InputFormComponent)}
                </S.FieldWrapper>

                <S.FieldWrapper>
                    <Caption text={'Looking for a job'}/>
                    {createField<ProfileKeys>('', 'lookingForAJob', [], InputFormComponent, { type: 'checkbox' })}
                </S.FieldWrapper>

                <S.FieldWrapper>
                    <Caption text={'My professional skills'}/>
                    {createField<ProfileKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </S.FieldWrapper>

                <S.FieldWrapper>
                    <Caption text={'About me'}/>
                    {createField<ProfileKeys>('About me', 'aboutMe', [], Textarea)}
                </S.FieldWrapper>

                <S.ContactsWrapper>
                    <SmallHeading text={'Contacts'}/>
                    {Object.keys(profile.contacts).map((key) => (
                        <S.FieldWrapper key={key}>
                            <Caption text={key}/>
                            {createField(key, 'contacts.' + key, [UrlValidator], InputFormComponent)}
                        </S.FieldWrapper>
                    ))}
                </S.ContactsWrapper>
            </S.FormWrapper>
        </S.Container>
    );
};

export const ReduxProfileDataForm = reduxForm<ProfileStructure, Props>({
    form: 'profileInfoForm'
})(ProfileDataForm);
