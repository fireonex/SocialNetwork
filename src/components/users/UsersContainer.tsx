import {changeCurrentPage, follow, getUsersTC, toggleIsFollowingProgress, userDataType} from "../../redux/usersReducer";
import React from "react";
import {rootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


type UsersAPIPropsType = {
    follow: (id: number) => void;
    users: Array<userDataType>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    changeCurrentPage: (page: number) => void;
    isFetching: boolean;
    followingInProgress: [];
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
};


type UsersStateType = {};


export class UsersContainer extends React.Component<UsersAPIPropsType, UsersStateType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPageHandler = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                {/*<Users totalCount={this.props.totalCount}*/}
                <Users totalCount={60}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       setCurrentPage={this.setCurrentPageHandler}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = (state: rootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default connect(mapStateToProps, {
    follow,
    changeCurrentPage,
    toggleIsFollowingProgress,
    getUsersTC
})(UsersContainer);
