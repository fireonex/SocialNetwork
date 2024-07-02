import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import withAuth from "../../HOCs/withAuth";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfileTC(Number(userId))
    }

    render() {
        if (!this.props.profile) {
            return <div>Loading...</div>;
        }

        //if (!this.props.isAuth) return <Redirect to={'/login'}/>

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

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfileTC })(withAuth(WithUrlDataContainer));
