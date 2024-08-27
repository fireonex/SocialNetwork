import { appReducer, setIsInitializedAC } from './appReducer';
import {appState} from "../../common/types/types";


test('appReducer should handle SET-IS-INITIALIZED action', () => {
    const initialState: appState = {
        initialized: false,
        error: null,
    };

    const expectedState: appState = {
        initialized: true,
        error: null,
    };

    expect(appReducer(initialState, setIsInitializedAC())).toEqual(expectedState);
});
