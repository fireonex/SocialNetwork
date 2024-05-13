import {Users} from "./Users";
import {rootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, userDataType} from "../../redux/usersReducer";

const mapStateToProps = (state: rootStateType)=> {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeUserFollow: (id: number) => {
            dispatch(followAC(id))
        },
        setUsers: (users: Array<userDataType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);