
//---------types----------------------------------------------------//
export type followUserActionType = ReturnType<typeof followAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

export type usersPageActionsType = followUserActionType | setUsersActionType

export type userLocationType = {
    country: string
    city: string
}

export type userDataType = {
    id: number
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: userLocationType
}

export type usersPageType = {
    users: userDataType[]
}
//-----------------------------------------------------------------//

let initialState: usersPageType = {
    users: [
        // {
        //     id: 1,
        //     avatarUrl: 'src/assets/img.png',
        //     followed: false,
        //     fullName: 'John Snow',
        //     status: 'Hello everyone',
        //     location: {country: 'USA', city: 'New York'}
        // },
        // {
        //     id: 2,
        //     avatarUrl: 'src/assets/img.png',
        //     followed: true,
        //     fullName: 'Alla Smith',
        //     status: 'Im best!',
        //     location: {country: 'USA', city: 'Los Angeles'}
        // },
        // {
        //     id: 3,
        //     avatarUrl: 'src/assets/img.png',
        //     followed: false,
        //     fullName: 'Paul Anders',
        //     status: 'Send me now',
        //     location: {country: 'France', city: 'Paris'}
        // },
    ]
}


export const usersReducer = (state = initialState, action: usersPageActionsType) => {

    switch (action.type) {
        case 'CHANGE-FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, followed: !user.followed} : user
                )
            };
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
}


export const followAC = (id: number) => ({
    type: "CHANGE-FOLLOW-USER", id
}) as const



export const setUsersAC = (users: Array<userDataType>) => ({
    type: "SET-USERS", users
}) as const