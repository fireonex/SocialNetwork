import friendAvatar from '../../assets/img.png'

export type postDataType = {
    id: number
    post: string
    likesCount: number
}

export type dialogsDataType = {
    id: number
    personName: string
}

export type messagesInDialogsDataType = {
    id: number
    text: string
}

export type dialogsPageType = {
    dialogsData: dialogsDataType[]
    messagesInDialogsData: messagesInDialogsDataType[]
}

export type profilePageDataType = {
    messagesData: postDataType[]
}

export type friendsType = {
    id: number
    friendName: string
    friendPhoto: string
}

export type sidebarPageType = {
    sidebarFriends: friendsType[]
}

export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    navbarPage: sidebarPageType
}

export const state: rootStateType = {

    profilePage: {
        messagesData: [
            {id: 1, post: 'How are you?', likesCount: 5},
            {id: 2, post: 'Hello!!!', likesCount: 8},
            {id: 3, post: 'This is my first post', likesCount: 10},
        ]
    },

    dialogsPage: {
        dialogsData: [
            {id: 1, personName: 'Sam'},
            {id: 2, personName: 'John'},
            {id: 3, personName: 'Sarah'},
            {id: 4, personName: 'Tom'},
            {id: 5, personName: 'Rebecca'}
        ],
        messagesInDialogsData: [
            {id: 1, text: 'Whats up bro??'},
            {id: 2, text: 'I love you'},
            {id: 3, text: 'Lets go to restaurant'},
            {id: 4, text: 'Hey, Im online'}
        ]
    },

    navbarPage: {
        sidebarFriends: [
            {id: 1, friendName: 'Laezel', friendPhoto: friendAvatar},
            {id: 2, friendName: 'Astarion', friendPhoto: friendAvatar},
            {id: 3, friendName: 'Will', friendPhoto: friendAvatar},
        ]
    }
}

export const addPost = (postText: string) => {
    let newPost =  {id: 4, post: postText, likesCount: 0};
    state.profilePage.messagesData.push(newPost)
}