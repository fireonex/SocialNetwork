import {changeCurrentPageAC, followAC, setTotalUsersCountAC, setUsersAC, userDataType} from "../../redux/usersReducer";
import axios from "axios";
import React from "react";
import {Users} from "./Users";
import {rootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type UsersAPIPropsType = {
    changeUserFollow: (id: number) => void
    setUsers: (users: Array<userDataType>) => void
    users: Array<userDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
};

type UsersStateType = {};

export class UsersContainer extends React.Component<UsersAPIPropsType, UsersStateType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setCurrentPageHandler = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return (
            <Users totalCount={this.props.totalCount}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   changeUserFollow={this.props.changeUserFollow}
                   setCurrentPageHandler={this.setCurrentPageHandler}
            />
        );
    }
}

const mapStateToProps = (state: rootStateType)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeUserFollow: (id: number) => {
            dispatch(followAC(id))
        },
        setUsers: (users: Array<userDataType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page: number) => {
            dispatch(changeCurrentPageAC(page))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);