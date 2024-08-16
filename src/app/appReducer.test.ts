import { appReducer, setIsInitializedAC } from './appReducer';
import {appState} from "../common/types/types";

// Определение типа для неизвестного действия
type UnknownAction = {
    type: 'UNKNOWN_ACTION';
};

// Тест для проверки экшена SET-IS-INITIALIZED
test('appReducer should handle SET-IS-INITIALIZED action', () => {
    const initialState: appState = {
        initialized: false
    };

    const expectedState: appState = {
        initialized: true
    };

    expect(appReducer(initialState, setIsInitializedAC())).toEqual(expectedState);
});
