import { appReducer, appStateType, setIsInitializedAC } from './appReducer';

// Определение типа для неизвестного действия
type UnknownAction = {
    type: 'UNKNOWN_ACTION';
};

// Тест для проверки экшена SET-IS-INITIALIZED
test('appReducer should handle SET-IS-INITIALIZED action', () => {
    const initialState: appStateType = {
        initialized: false
    };

    const expectedState: appStateType = {
        initialized: true
    };

    expect(appReducer(initialState, setIsInitializedAC())).toEqual(expectedState);
});
