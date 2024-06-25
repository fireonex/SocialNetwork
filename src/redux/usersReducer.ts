//---------types----------------------------------------------------//

import {Dispatch} from "redux";
import {API} from "../api/api";

export type usersPageActionsType = ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleIsFollowingProgress>


export type userPhotosType = {
    small: null | string,
    large: null | string
}


export type userDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: userPhotosType
    status: string | null
    followed: boolean
}


export type usersPageType = {
    users: userDataType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: []
}
//-----------------------------------------------------------------//

let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: usersPageActionsType) => {

    switch (action.type) {
        case 'CHANGE-FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, followed: !user.followed} : user
                )
            };
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            };
        case 'CHANGE-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


export const follow = (id: number) => ({
    type: "CHANGE-FOLLOW-USER", id
}) as const


export const setUsers = (users: Array<userDataType>) => ({
    type: "SET-USERS", users
}) as const


export const changeCurrentPage = (currentPage: number) => ({
    type: "CHANGE-CURRENT-PAGE", currentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT", totalUsersCount
}) as const

export const toggleFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING", isFetching
}) as const

export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING-PROGRESS", followingInProgress, userId
}) as const


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    API.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
        .finally(() => {
            dispatch(toggleFetching(false));
        });
}