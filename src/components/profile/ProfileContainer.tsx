import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { rootStateType } from "../../redux/redux-store";
import { ProfileType, setUserProfile } from "../../redux/profileReducer";

type ProfileContainerPropsType = {
    profile: ProfileType | null;
    setUserProfile: (profile: ProfileType) => void;
};

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get<ProfileType>(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        ).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        if (!this.props.profile) {
            return <div>Loading...</div>;
        }

        return (
            <Profile
                avatarSrc={this.props.profile.photos?.small || 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
                avatarAlt="Profile photo"
                description={this.props.profile.lookingForAJobDescription}
                profile={this.props.profile}
            />
        );
    }
}

const mapStateToProps = (state: rootStateType) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
