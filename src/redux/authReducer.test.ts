import { authReducer, authStateType, setAuthUserDataAC } from "./authReducer";

describe('authReducer', () => {
    const initialState: authStateType = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    };

    it('should return the initial state when action type is unknown', () => {
        expect(authReducer(initialState, { type: 'UNKNOWN_ACTION' } as any)).toEqual(initialState);
    });

    it('should handle SET-USER-DATA action', () => {
        const action = setAuthUserDataAC(1, 'test@example.com', 'testuser');
        const expectedState = {
            id: 1,
            email: 'test@example.com',
            login: 'testuser',
            isAuth: true
        };

        expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it('should not mutate the initial state', () => {
        const action = setAuthUserDataAC(2, 'test2@example.com', 'testuser2');
        const initialStateCopy = { ...initialState };
        authReducer(initialState, action);

        expect(initialState).toEqual(initialStateCopy);
    });
});
