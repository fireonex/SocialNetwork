import { authReducer, setAuthUserDataAC, setIsLoggedInAC } from "./authReducer";
import {authState} from "../types";

describe('authReducer', () => {
    const initialState: authState = {
        id: null,
        email: null,
        isAuth: false,
        captchaUrl: null
    };

    it('should return the initial state when action type is unknown', () => {
        expect(authReducer(initialState, { type: 'UNKNOWN_ACTION' } as any)).toEqual(initialState);
    });

    it('should handle SET-USER-DATA action', () => {
        const action = setAuthUserDataAC(1, 'test@example.com', true);
        const expectedState = {
            id: 1,
            email: 'test@example.com',
            isAuth: true,
            captchaUrl: null
        };

        expect(authReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET-IS-LOGGED-IN action', () => {
        const formData = { email: 'test2@example.com', password: 'password', rememberMe: false };
        const action = setIsLoggedInAC(formData);
        const expectedState = {
            ...initialState,
            email: 'test2@example.com',
            isAuth: true // isAuth должно быть true, если пользователь залогинен
        };

        expect(authReducer(initialState, action)).toEqual(expectedState);
    });


    it('should not mutate the initial state', () => {
        const action = setAuthUserDataAC(2, 'test2@example.com', true);
        const initialStateCopy = { ...initialState };
        authReducer(initialState, action);

        expect(initialState).toEqual(initialStateCopy);
    });
});
