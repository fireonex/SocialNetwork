import {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    userDataType
} from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import { rootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Preloader";

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
};

type UsersStateType = {};

export class UsersContainer extends React.Component<UsersAPIPropsType, UsersStateType> {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .finally(() => {
                this.props.toggleFetching(false);
            });
    }

    setCurrentPageHandler = (page: number) => {
        this.props.changeCurrentPage(page);
        this.props.toggleFetching(true);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
        )
            .then((response) => {
                this.props.setUsers(response.data.items);
            })
            .finally(() => {
                this.props.toggleFetching(false);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users totalCount={this.props.totalCount}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       setCurrentPage={this.setCurrentPageHandler}
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
        isFetching: state.usersPage.isFetching
    };
}

export default connect(mapStateToProps, {
    follow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleFetching
})(UsersContainer);
