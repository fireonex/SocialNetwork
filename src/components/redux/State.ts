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

export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    sidebarPage: {}
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

    sidebarPage: {}
}