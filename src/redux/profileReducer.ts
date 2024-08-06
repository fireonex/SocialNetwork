import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {toggleFetching} from "./usersReducer";
import {v1} from "uuid";


//---------types----------------------------------------------------//

export type postDataType = {
    id: string
    post: string
    likesCount: number
}

export type ProfileType = {
    userId: number;
    aboutMe: string;
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


// Actions
const ADD_POST = 'social-network/profile/ADD-POST';
const DELETE_POST = 'social-network/profile/DELETE-POST';
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'social-network/profile/SET-STATUS';
const SET_PHOTO = 'social-network/profile/SET-PHOTO';

// Action Creators
export const addPostAC = (newPostText: string) => ({
    type: ADD_POST, newPostText
}) as const;

export const deletePostAC = (postId: string) => ({
    type: DELETE_POST, postId
}) as const;

export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
}) as const;

export const setStatus = (status: string) => ({
    type: SET_STATUS, status
}) as const;

export const setPhoto = (photos: PhotosType) => ({
    type: SET_PHOTO, photos
}) as const;



// Action Types
export type addPostActionType = ReturnType<typeof addPostAC>;
export type deletePostActionType = ReturnType<typeof deletePostAC>;
export type setUserProfileActionType = ReturnType<typeof setUserProfile>;
export type setStatusActionType = ReturnType<typeof setStatus>;
export type setPhotoActionType = ReturnType<typeof setPhoto>;

export type profilePageActionsType =
    | addPostActionType
    | deletePostActionType
    | setUserProfileActionType
    | setStatusActionType
    | setPhotoActionType;

// Initial State
let initialState: profilePageDataType = {
    messagesData: [
        // {id: '1', post: 'How are you?', likesCount: 5},
        // {id: '2', post: 'Hello!!!', likesCount: 8},
        // {id: '3', post: 'This is my first post', likesCount: 10},
    ],
    profile: null,
    status: ''
};

// Reducer
export const profileReducer = (state = initialState, action: profilePageActionsType): profilePageDataType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), post: action.newPostText, likesCount: 0};
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                messagesData: state.messagesData.filter(post => post.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state, status: action.status
            };
        case SET_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;
    }
};


//thunks

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const data = await usersAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
    } finally {
        dispatch(toggleFetching(false));
    }
};

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const res = await profileAPI.getStatus(userId);
        dispatch(setStatus(res.data));
    } finally {
        dispatch(toggleFetching(false));
    }
};

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const res = await profileAPI.updateStatus(status);
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } finally {
        dispatch(toggleFetching(false));
    }
};


export const updatePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const res = await profileAPI.updateProfilePhoto(file);
        if (res.data.resultCode === 0) {
            dispatch(setPhoto(res.data.data.photos));
        } else {
            console.error("Failed to update photo:", res.data.messages);
        }
    } catch (error) {
        console.error("Network error:", error);
    } finally {
        dispatch(toggleFetching(false));
    }
};

