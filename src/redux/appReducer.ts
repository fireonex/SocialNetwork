import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {rootStateType} from "./redux-store";
import {authActionsType, getAuthMeTC} from "./authReducer";

export type appActionsType = ReturnType<typeof setIsInitializedAC>;

export type appStateType = {
    initialized: boolean;
};

let initialState: appStateType = {
    initialized: false
};

type ThunkType = ThunkAction<void, rootStateType, unknown, AnyAction>;

export const appReducer = (state = initialState, action: appActionsType): appStateType => {
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


export const initializeAppTC = (): ThunkType => (dispatch: ThunkDispatch<rootStateType,
    unknown,
    appActionsType | authActionsType>) => {

    let promise = dispatch(getAuthMeTC())
    Promise.all([promise])
        .then(() => {
        dispatch(setIsInitializedAC())
    })
};

