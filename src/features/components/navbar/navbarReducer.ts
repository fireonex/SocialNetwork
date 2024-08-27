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
    sidebarFriends: []
}

export const navbarReducer = (state = initialState, action: any) => {
    return state
}