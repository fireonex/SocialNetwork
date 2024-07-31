import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootStateType} from "./redux-store";
import {updateObjectInArray} from "../utils/object-helpers";

// Actions
const FOLLOW_USER = 'social-network/users/FOLLOW-USER';
const UNFOLLOW_USER = 'social-network/users/UNFOLLOW-USER';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS';

// Types
export type usersPageActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleIsFollowingProgress>;

export type userPhotosType = {
    small: null | string;
    large: null | string;
};

export type userDataType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: userPhotosType;
    status: string | null;
    followed: boolean;
};

export type usersPageType = {
    users: userDataType[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
};

// Initial State
let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

// Reducer
export const usersReducer = (state = initialState, action: usersPageActionsType): usersPageType => {
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

export const setUsers = (users: userDataType[]) => ({
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
export const getUsersTC = (currentPage: number, pageSize: number): ThunkAction<void, rootStateType, unknown, usersPageActionsType> =>
    async (dispatch: ThunkDispatch<rootStateType, unknown, usersPageActionsType>) => {
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

export const followUserTC = (user: userDataType): ThunkAction<void, rootStateType, unknown, usersPageActionsType> =>
    async (dispatch: ThunkDispatch<rootStateType, unknown, usersPageActionsType>) => {
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

export const unfollowUserTC = (user: userDataType): ThunkAction<void, rootStateType, unknown, usersPageActionsType> =>
    async (dispatch: ThunkDispatch<rootStateType, unknown, usersPageActionsType>) => {
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
