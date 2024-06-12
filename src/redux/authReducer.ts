export type authActionsType = ReturnType<typeof setAuthUserDataAC>

export type authStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: authStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: authActionsType): authStateType=> {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: "SET-USER-DATA", data: {id, email, login}
}) as const


