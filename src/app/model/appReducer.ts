import {ThunkDispatch} from "redux-thunk";
import {appState, rootState, Thunk} from "../../common/types/types";
import {getAuthMeTC} from "../../features/auth/model/authReducer";
import {authPageActions} from "../../features/auth/types";

export type appActions = ReturnType<typeof setIsInitializedAC> | ReturnType<typeof setErrorAC>;

let initialState: appState = {
    initialized: false,
    error: null
};


export const appReducer = (state = initialState, action: appActions): appState => {
    switch (action.type) {
        case "SET-IS-INITIALIZED":
            return {
                ...state,
                initialized: true
            };
        case "SET-ERROR":
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};


export const setIsInitializedAC = () => ({
    type: "SET-IS-INITIALIZED",
}) as const;

export const setErrorAC = (error: string | null) => ({
    type: "SET-ERROR", error
}) as const;


export const initializeAppTC = (): Thunk => (dispatch: ThunkDispatch<rootState,
    unknown,
    appActions | authPageActions>) => {

    let promise = dispatch(getAuthMeTC())
    Promise.all([promise])
        .then(() => {
        dispatch(setIsInitializedAC())
    })
};

