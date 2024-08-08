import {ProfileType} from "../../redux/profileReducer";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/formControl/Input";
import {Textarea} from "../common/formControl/Textarea";
import {createField, GetStringKeys} from "../common/formControl/FormControl";
import {UrlValidator} from "../../utils/validators";

type ProfileDataProps = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>
//
// const maxLength = MaxLengthCreator(50);
// const minLength = MinLengthCreator(2);

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataProps> & ProfileDataProps> = ({handleSubmit, profile, error}) => {
    // const { profile, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div style={{color: '#971f1f;'}}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>

        <div>
            <b>About me</b>:
            { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} style={{color: '#971f1f;'}}>
                {/* todo: create some solution for embedded objects */}
                <b>{key}: {createField(key, "contacts." + key, [UrlValidator], Input)}</b>
            </div>
        })}
        </div>
    </form>
    )
}

export const ReduxProfileDataForm = reduxForm<ProfileType, ProfileDataProps>({
    form: 'profileInfoForm'
})(ProfileDataForm);
