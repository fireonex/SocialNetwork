import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void
    updateStatusTC: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType, MapDispatchPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '31083';
        }
        this.props.getUserProfileTC(Number(userId));
        this.props.getStatusTC(Number(userId))
    }

    render() {
        if (!this.props.profile) {
            return <div>Loading...</div>;
        }
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusTC}
            />
        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
    withRouter,
    //withAuth
)(ProfileContainer);
