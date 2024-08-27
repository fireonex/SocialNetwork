import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {rootState} from "../types/types";
import {setErrorAC} from "../../app/model/appReducer";


export const handleAsyncError = (
    error: unknown,
    dispatch: ThunkDispatch<rootState, unknown, AnyAction>
): void => {
    if (error instanceof Error) {
        dispatch(setErrorAC(error.message));
    } else {
        dispatch(setErrorAC("Unknown error"));
    }
};
