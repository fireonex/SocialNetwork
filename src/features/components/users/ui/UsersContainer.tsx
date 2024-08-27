import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {compose} from "redux";
import {userData} from "../types";
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
import {CustomSkeleton} from "../../../../common/commonComponents/antdComponents/CustomSkeleton";


type Props = {
    users: Array<userData>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    getUsersTC: (currentPage: number, pageSize: number, term?: string, friend?: boolean) => void;
    followUserTC: (user: userData) => void;
    unfollowUserTC: (user: userData) => void;
};

type State = {
    term: string;
    friend: boolean;
};

class UsersContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            term: '',
            friend: false
        };
    }

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersTC(currentPage, pageSize);
    }

    setCurrentPageHandler = (page: number) => {
        let {pageSize} = this.props;
        this.props.getUsersTC(page, pageSize, this.state.term, this.state.friend);
    };

    followHandler = (user: userData) => {
        this.props.followUserTC(user);
    };

    unfollowHandler = (user: userData) => {
        this.props.unfollowUserTC(user);
    };

    onFilterChange = (values: { userName: string, followed: boolean }) => {
        this.setState({
            term: values.userName,
            friend: values.followed
        }, () => {
            this.props.getUsersTC(this.props.currentPage, this.props.pageSize, values.userName, values.followed);
        });
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <CustomSkeleton/>
                    : <Users
                        totalCount={this.props.totalCount}
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.setCurrentPageHandler}
                        followingInProgress={this.props.followingInProgress}
                        followHandler={this.followHandler}
                        unfollowHandler={this.unfollowHandler}
                        onFilterChange={this.onFilterChange}
                    />}
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
