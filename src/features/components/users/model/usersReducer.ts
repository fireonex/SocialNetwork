import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {updateObjectInArray} from "../../../../common/utils/object-helpers";
import {usersAPI} from "../api/usersAPI";
import {rootState} from "../../../../common/types/types";
import {userData, usersPage} from "../types";

// Actions
const FOLLOW_USER = 'social-network/users/FOLLOW-USER';
const UNFOLLOW_USER = 'social-network/users/UNFOLLOW-USER';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS';

// Types
export type usersPageActions =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleIsFollowingProgress>;



// Initial State
let initialState: usersPage = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

// Reducer
export const usersReducer = (state = initialState, action: usersPageActions): usersPage => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: true })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: false })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

// Action Creators
export const follow = (id: number) => ({
    type: FOLLOW_USER,
    id
}) as const;

export const unfollow = (id: number) => ({
    type: UNFOLLOW_USER,
    id
}) as const;

export const setUsers = (users: userData[]) => ({
    type: SET_USERS,
    users
}) as const;

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const;

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const;

export const toggleFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const;

export const toggleIsFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
}) as const;


// Thunks
export const getUsersTC = (currentPage: number, pageSize: number): ThunkAction<void, rootState, unknown, usersPageActions> =>
    async (dispatch: ThunkDispatch<rootState, unknown, usersPageActions>) => {
        dispatch(toggleFetching(true));
        try {
            const data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
        } finally {
            dispatch(toggleFetching(false));
        }
    };

export const followUserTC = (user: userData): ThunkAction<void, rootState, unknown, usersPageActions> =>
    async (dispatch: ThunkDispatch<rootState, unknown, usersPageActions>) => {
        dispatch(toggleIsFollowingProgress(true, user.id));
        try {
            const data = await usersAPI.followUser(user);
            if (data.resultCode === 0) {
                dispatch(follow(user.id));
            }
        } finally {
            dispatch(toggleIsFollowingProgress(false, user.id));
        }
    };

export const unfollowUserTC = (user: userData): ThunkAction<void, rootState, unknown, usersPageActions> =>
    async (dispatch: ThunkDispatch<rootState, unknown, usersPageActions>) => {
        dispatch(toggleIsFollowingProgress(true, user.id));
        try {
            const data = await usersAPI.unfollowUser(user);
            if (data.resultCode === 0) {
                dispatch(unfollow(user.id));
            }
        } finally {
            dispatch(toggleIsFollowingProgress(false, user.id));
        }
    };
