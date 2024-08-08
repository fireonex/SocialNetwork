import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {
    getStatusTC,
    getUserProfileTC,
    ProfileType, updatePhotoTC,
    updateProfileInfoTC,
    updateStatusTC
} from "../../redux/profileReducer";
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
    updateProfileInfoTC: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string;
}

type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = this.props.loggedInUserID ? String(this.props.loggedInUserID) : "";
        //     if (!userId) {
        //         this.props.history.push('/login');
        //         return;
        //     }
        // }
        // this.props.getUserProfileTC(Number(userId));
        // this.props.getStatusTC(Number(userId));
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedInUserID;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfileTC(userId)
            this.props.getStatusTC(userId)
        }
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
            return <div>загрузка...</div>;
        }
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusTC}
                savePhoto={this.props.updatePhotoTC}
                updateProfileInfo={this.props.updateProfileInfoTC}
            />
        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedInUserID: state.auth.id
});

// const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => ({
//     getUserProfileTC: (userId: number) => dispatch(getUserProfileTC(userId)),
//     getStatusTC: (userId: number) => dispatch(getStatusTC(userId)),
//     updateStatusTC: (status: string) => dispatch(updateStatusTC(status)),
//     updatePhotoTC: (file: File) => dispatch(updatePhotoTC(file)),
//     updateProfileInfoTC: (profile: ProfileFormData) => dispatch(updateProfileInfoTC(profile))
// });

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, updatePhotoTC, updateProfileInfoTC}),
    withRouter,
)(ProfileContainer);

