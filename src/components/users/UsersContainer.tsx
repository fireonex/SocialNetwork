import {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers,
    toggleFetching, toggleIsFollowingProgress,
    userDataType
} from "../../redux/usersReducer";
import React from "react";
import {rootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {API} from "../../api/api";


type UsersAPIPropsType = {
    follow: (id: number) => void;
    setUsers: (users: Array<userDataType>) => void;
    users: Array<userDataType>;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    changeCurrentPage: (page: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    isFetching: boolean;
    toggleFetching: (isFetching: boolean) => void;
    followingInProgress: [];
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void
};


type UsersStateType = {};


export class UsersContainer extends React.Component<UsersAPIPropsType, UsersStateType> {
    componentDidMount() {
        this.props.toggleFetching(true);
        API.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
            .finally(() => {
                this.props.toggleFetching(false);
            });
    }

    setCurrentPageHandler = (page: number) => {
        this.props.changeCurrentPage(page);
        this.props.toggleFetching(true);
        API.getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
            })
            .finally(() => {
                this.props.toggleFetching(false);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
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
}

export default connect(mapStateToProps, {
    follow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleIsFollowingProgress
})(UsersContainer);
