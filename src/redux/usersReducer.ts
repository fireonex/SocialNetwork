
//---------types----------------------------------------------------//
export type followUserActionType = ReturnType<typeof followAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type changeCurrentPageActionType = ReturnType<typeof changeCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>


export type usersPageActionsType = followUserActionType
    | setUsersActionType
    | changeCurrentPageActionType
    | setTotalUsersCountActionType


export type userPhotosType = {
    small: null | string,
    large: null | string
}


export type userDataType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: userPhotosType
    status: string | null
    followed: boolean
}


export type usersPageType = {
    users: userDataType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
//-----------------------------------------------------------------//

let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
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
                users: action.users
            };
        case 'CHANGE-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalCount: action.totalUsersCount
            }
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


export const changeCurrentPageAC = (currentPage: number) => ({
    type: "CHANGE-CURRENT-PAGE", currentPage
}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT", totalUsersCount
}) as const