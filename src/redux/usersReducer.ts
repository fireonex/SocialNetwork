
//---------types----------------------------------------------------//
export type followUserActionType = ReturnType<typeof follow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type changeCurrentPageActionType = ReturnType<typeof changeCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleFetchingActionType = ReturnType<typeof toggleFetching>


export type usersPageActionsType = followUserActionType
    | setUsersActionType
    | changeCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleFetchingActionType


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
    isFetching: boolean
}
//-----------------------------------------------------------------//

let initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
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
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}


export const follow = (id: number) => ({
    type: "CHANGE-FOLLOW-USER", id
}) as const


export const setUsers = (users: Array<userDataType>) => ({
    type: "SET-USERS", users
}) as const


export const changeCurrentPage = (currentPage: number) => ({
    type: "CHANGE-CURRENT-PAGE", currentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET-TOTAL-USERS-COUNT", totalUsersCount
}) as const

export const toggleFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING", isFetching
}) as const