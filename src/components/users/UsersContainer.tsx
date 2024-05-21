import {rootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changeCurrentPageAC, followAC, setTotalUsersCountAC, setUsersAC, userDataType} from "../../redux/usersReducer";
import {Users} from "./Users";

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);