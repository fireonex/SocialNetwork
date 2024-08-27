import {Dispatch} from "redux";
import {toggleFetching} from "../../users/model/usersReducer";
import {v1} from "uuid";
import {BaseThunk, InferActions} from "../../../../app/model/redux-store";
import {FormAction, stopSubmit} from "redux-form";
import actions from "redux-form/lib/actions";
import {profileAPI} from "../api/profileAPI";
import {Photos, ProfileStructure, profilePage} from "../types";
import {handleAsyncError} from "../../../../common/utils/handleAsyncError";
import {setErrorAC} from "../../../../app/model/appReducer";


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

export const setUserProfile = (profile: ProfileStructure) => ({
    type: SET_USER_PROFILE, profile
}) as const;

export const setStatus = (status: string) => ({
    type: SET_STATUS, status
}) as const;

export const setPhoto = (photos: Photos) => ({
    type: SET_PHOTO, photos
}) as const;


export type profilePageActions =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setPhoto>

// Initial State
let initialState: profilePage = {
    messagesData: [],
    profile: null,
    status: ''
};

// Reducer
export const profileReducer = (state = initialState, action: profilePageActions): profilePage => {
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
                ...state, profile: {...state.profile, photos: action.photos} as ProfileStructure
            }
        default:
            return state;
    }
};


//thunks

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    } finally {
        dispatch(toggleFetching(false));
    }
};

export const getStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    } finally {
        dispatch(toggleFetching(false));
    }
};

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            dispatch(setErrorAC(data.messages));
        }
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    } finally {
        dispatch(toggleFetching(false));
    }
};


export const updatePhotoTC = (file: File) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true));
    try {
        const data = await profileAPI.updateProfilePhoto(file);
        if (data.resultCode === 0) {
            dispatch(setPhoto(data.data.photos));
        } else {
            dispatch(setErrorAC(data.messages));
        }
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
    } finally {
        dispatch(toggleFetching(false));
    }
};


export const updateProfileInfoTC = (profile: ProfileStructure): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    try {
        const data = await profileAPI.updateProfileInfo(profile);
        if (data.resultCode === 0) {
            if (userId != null) {
                await dispatch(getUserProfileTC(userId));
            }
        } else {
            dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
            return Promise.reject(data.messages[0]);
        }
    } catch (error: unknown) {
        handleAsyncError(error, dispatch);
        return Promise.reject("Failed to update profile");
    }
};

type ActionsType = InferActions<typeof actions>
type ThunkType = BaseThunk<ActionsType | FormAction>
