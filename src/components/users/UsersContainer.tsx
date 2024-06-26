import React from "react";
import { connect } from "react-redux";
import { rootStateType } from "../../redux/redux-store";
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Preloader";
import {
    getUsersTC,
    followUserTC,
    unfollowUserTC,
    userDataType
} from "../../redux/usersReducer";

type UsersAPIPropsType = {
    users: Array<userDataType>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    getUsersTC: (currentPage: number, pageSize: number) => void;
    followUserTC: (user: userDataType) => void;
    unfollowUserTC: (user: userDataType) => void;
};

type UsersStateType = {};

class UsersContainer extends React.Component<UsersAPIPropsType, UsersStateType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPageHandler = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize);
    };

    followHandler = (user: userDataType) => {
        this.props.followUserTC(user);
    };

    unfollowHandler = (user: userDataType) => {
        this.props.unfollowUserTC(user);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    totalCount={this.props.totalCount}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    setCurrentPage={this.setCurrentPageHandler}
                    followingInProgress={this.props.followingInProgress}
                    followHandler={this.followHandler}
                    unfollowHandler={this.unfollowHandler}
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
    getUsersTC,
    followUserTC,
    unfollowUserTC
})(UsersContainer);
