import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileStructure} from "../types";
import {createField, GetStringKeys} from "../../../../common/commonComponents/formControl/FormControl";
import {Input} from "../../../../common/commonComponents/formControl/Input";
import {Textarea} from "../../../../common/commonComponents/formControl/Textarea";
import {UrlValidator} from "../../../../common/utils/validators";


type Props = {
    profile: ProfileStructure
}

type ProfileKeys = GetStringKeys<ProfileStructure>
//
// const maxLength = MaxLengthCreator(50);
// const minLength = MinLengthCreator(2);

const ProfileDataForm: React.FC<InjectedFormProps<ProfileStructure, Props> & Props> = ({handleSubmit, profile, error}) => {
    // const { profile, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div style={{color: '#971f1f;'}}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField<ProfileKeys>("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField<ProfileKeys>("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>

        <div>
            <b>About me</b>:
            { createField<ProfileKeys>("About me", "aboutMe", [], Textarea  )}
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

export const ReduxProfileDataForm = reduxForm<ProfileStructure, Props>({
    form: 'profileInfoForm'
})(ProfileDataForm);
