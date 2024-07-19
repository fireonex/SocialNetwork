import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null;
    status: string;
    loggedInUserID: number | null;
}

type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => void;
    getStatusTC: (userId: number) => void;
    updateStatusTC: (status: string) => void;
}

type PathParamsType = {
    userId: string;
}

type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedInUserID ? String(this.props.loggedInUserID) : "";
            if (!userId) {
                this.props.history.push('/login');
                return;
            }
        }
        this.props.getUserProfileTC(Number(userId));
        this.props.getStatusTC(Number(userId));
    }

    render() {
        if (!this.props.profile) {
            return <div>кнопку login вверху нажми</div>;
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
    status: state.profilePage.status,
    loggedInUserID: state.auth.id
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
    withRouter,
)(ProfileContainer);
