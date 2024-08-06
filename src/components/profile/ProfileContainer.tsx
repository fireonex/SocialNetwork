import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppDispatch, rootStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, ProfileType, updatePhotoTC, updateStatusTC} from "../../redux/profileReducer";
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
    updatePhotoTC: (file: File) => void;
}

type PathParamsType = {
    userId: string;
}

type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        if (!this.props.profile) {
            return <div>кнопку login вверху нажми</div>;
        }
        return (
            <Profile
                isOwner={!this.props.match.params.userId }
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusTC}
                savePhoto={this.props.updatePhotoTC}
            />
        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedInUserID: state.auth.id
});

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => ({
    getUserProfileTC: (userId: number) => dispatch(getUserProfileTC(userId)),
    getStatusTC: (userId: number) => dispatch(getStatusTC(userId)),
    updateStatusTC: (status: string) => dispatch(updateStatusTC(status)),
    updatePhotoTC: async (file: File) => {
        console.log("Dispatching updatePhotoTC with file:", file); // Добавляем вывод в консоль
        try {
            await dispatch(updatePhotoTC(file));
            console.log("updatePhotoTC dispatched successfully");
        } catch (error) {
            console.error("Failed to update photo:", error);
        }
    }
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer);

