import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {toggleFetching} from "./usersReducer";
import {v1} from "uuid";

export type addPostActionType = ReturnType<typeof addPostAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setStatusActionType = ReturnType<typeof setStatus>

export type postDataType = {
    id: string
    post: string
    likesCount: number
}

export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
};

type ContactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
};

type PhotosType = {
    small: string | undefined;
    large: string | undefined;
};

export type profilePageDataType = {
    messagesData: postDataType[]
    //newPostText: string,
    profile: ProfileType | null
    status: string
}

export type profilePageActionsType = addPostActionType
    | setUserProfileActionType
    | setStatusActionType


let initialState: profilePageDataType = {
    messagesData: [
        // {id: 1, post: 'How are you?', likesCount: 5},
        // {id: 2, post: 'Hello!!!', likesCount: 8},
        // {id: 3, post: 'This is my first post', likesCount: 10},
    ],
    profile: null, // инициализируем profile как null
    status: ''
}

export const profileReducer = (state = initialState, action: profilePageActionsType): profilePageDataType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: v1(), post: action.newPostText, likesCount: 0};
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => ({
    type: "ADD-POST", newPostText
}) as const


export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE", profile
}) as const

export const setStatus = (status: string) => ({
    type: "SET-STATUS", status
}) as const


export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    usersAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    })
        .finally(() => {
            dispatch(toggleFetching(false));
        });
}


export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    profileAPI.getStatus(userId).then((res) => {
        dispatch(setStatus(res.data));
    })
        .finally(() => {
            dispatch(toggleFetching(false));
        });
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
        .finally(() => {
            dispatch(toggleFetching(false));
        });
}