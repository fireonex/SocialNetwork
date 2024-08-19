import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appState, rootState} from "../../common/types/types";
import {getAuthMeTC} from "../../features/auth/model/authReducer";
import {authActions} from "../../features/auth/types";

export type appActions = ReturnType<typeof setIsInitializedAC>;


let initialState: appState = {
    initialized: false
};

type Thunk = ThunkAction<void, rootState, unknown, AnyAction>;

export const appReducer = (state = initialState, action: appActions): appState => {
    switch (action.type) {
        case "SET-IS-INITIALIZED":
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};


export const setIsInitializedAC = () => ({
    type: "SET-IS-INITIALIZED",
}) as const;


export const initializeAppTC = (): Thunk => (dispatch: ThunkDispatch<rootState,
    unknown,
    appActions | authActions>) => {

    let promise = dispatch(getAuthMeTC())
    Promise.all([promise])
        .then(() => {
        dispatch(setIsInitializedAC())
    })
};

