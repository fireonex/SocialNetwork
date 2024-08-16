import friendAvatar from "../../../common/assets/defaultSmallUserImg.png";

export type friends = {
    id: number
    friendName: string
    friendPhoto: string
}

export type navbarPage = {
    sidebarFriends: friends[]
}

let initialState: navbarPage = {
    sidebarFriends: [
        {id: 1, friendName: 'Laezel', friendPhoto: friendAvatar},
        {id: 2, friendName: 'Astarion', friendPhoto: friendAvatar},
        {id: 3, friendName: 'Will', friendPhoto: friendAvatar},
    ]
}

export const navbarReducer = (state = initialState, action: any) => {
    return state
}