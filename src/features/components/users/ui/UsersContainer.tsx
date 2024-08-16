import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import {compose} from "redux";
import {userData} from "../types";
import {Preloader} from "../../../../common/commonComponents/preloader/Preloader";
import {rootState} from "../../../../common/types/types";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../model/usersSelectors";
import {followUserTC, getUsersTC, unfollowUserTC} from "../model/usersReducer";


type Props = {
    users: Array<userData>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    getUsersTC: (currentPage: number, pageSize: number) => void;
    followUserTC: (user: userData) => void;
    unfollowUserTC: (user: userData) => void;
};

type State = {};

class UsersContainer extends React.Component<Props, State> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsersTC(currentPage, pageSize);
    }

    setCurrentPageHandler = (page: number) => {
        let {pageSize} = this.props
        this.props.getUsersTC(page, pageSize);
    };

    followHandler = (user: userData) => {
        this.props.followUserTC(user);
    };

    unfollowHandler = (user: userData) => {
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

const mapStateToProps = (state: rootState) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};



export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersTC,
        followUserTC,
        unfollowUserTC
    })
)(UsersContainer);
