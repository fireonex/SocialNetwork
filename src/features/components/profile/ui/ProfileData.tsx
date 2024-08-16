import {Contact} from "./Contact";
import React from "react";
import {Contacts, ProfileStructure} from "../types";

type Props = {
    profile: ProfileStructure
    isOwner: boolean
    setEditMode: () => void
}
export const ProfileData = ({profile, isOwner, setEditMode}: Props) => {
    return (
        <>
            <h3>{profile.fullName}</h3>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            )}
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(
                (key) => <Contact key={key}
                                  contactTitle={key}
                                  contactValue={profile.contacts[key as keyof Contacts]
                                  }/>
            )}
            </div>
            {profile.aboutMe &&
                <div>
                    <b>About me</b>: {profile.aboutMe}
                </div>
            }
            {isOwner && <div><button onClick={setEditMode}>edit</button></div>}
        </>
    )
}