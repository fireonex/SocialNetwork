import friendAvatar from "../assets/img.png";

export type friendsType = {
    id: number
    friendName: string
    friendPhoto: string
}

export type navbarPageType = {
    sidebarFriends: friendsType[]
}

let initialState: navbarPageType = {
    sidebarFriends: [
        {id: 1, friendName: 'Laezel', friendPhoto: friendAvatar},
        {id: 2, friendName: 'Astarion', friendPhoto: friendAvatar},
        {id: 3, friendName: 'Will', friendPhoto: friendAvatar},
    ]
}

export const navbarReducer = (state = initialState, action: any) => {
    return state
}