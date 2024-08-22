import {Contact} from "./contact/Contact";
import React from "react";
import {Contacts, ProfileStructure} from "../../../../types";
import {SmallHeading} from "../../../../../../../common/commonComponents/textElements/SmallHeading";
import {LargeHeading} from "../../../../../../../common/commonComponents/textElements/LargeHeading";
import {IconButton} from "../../../../../../../common/commonComponents/antdComponents/IconButton";
import {EditOutlined} from "@ant-design/icons";
import {SpanWithText} from "common/commonComponents/textElements/SpanWithText";
import {S} from "./ProfileData.styles";
import {Title} from "../../../../../../../common/commonComponents/textElements/Title";


type Props = {
    profile: ProfileStructure;
    isOwner: boolean;
    setEditMode: () => void;
};

export const ProfileData = ({ profile, isOwner, setEditMode }: Props) => {
    return (
        <S.ProfileContainer>
            <S.HeaderContainer>
                <Title text={profile.fullName} />
                {isOwner && (
                    <IconButton
                        icon={<EditOutlined />}
                        onClick={setEditMode}
                    />
                )}
            </S.HeaderContainer>

            <S.SectionContainer>
                <SmallHeading text={"Looking for a job:"} />{" "}
                <SpanWithText text={profile.lookingForAJob ? "yes" : "no"}/>
            </S.SectionContainer>

            {profile.lookingForAJob && (
                <S.SectionContainer>
                    <SmallHeading text={"My professional skills:"} />{" "}
                    <SpanWithText text={profile.lookingForAJobDescription}/>
                </S.SectionContainer>
            )}

            <S.ContactContainer>
                <SmallHeading text={"Contacts:"} />
                {Object.keys(profile.contacts).map((key) =>
                    profile.contacts[key as keyof Contacts]?.length ? (
                        <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key as keyof Contacts]}
                        />
                    ) : null
                )}
            </S.ContactContainer>

            {profile.aboutMe && (
                <S.SectionContainer>
                    <SmallHeading text={"About me:"} />
                    <SpanWithText text={profile.aboutMe}/>
                </S.SectionContainer>
            )}


        </S.ProfileContainer>
    );
};
