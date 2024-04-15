import friendAvatar from '../../assets/img.png'
import {rerenderEntireThree} from "../../render";


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
    newMessageText: string
}

export type profilePageDataType = {
    messagesData: postDataType[]
    newPostText: string
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

        ],
        newPostText: 'hello'
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
        ],
        newMessageText: 'hey friend'
    },

    navbarPage: {
        sidebarFriends: [
            {id: 1, friendName: 'Laezel', friendPhoto: friendAvatar},
            {id: 2, friendName: 'Astarion', friendPhoto: friendAvatar},
            {id: 3, friendName: 'Will', friendPhoto: friendAvatar},
        ]
    }
}

export const addPost = () => {
    const newPost =  {id: 4, post: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.messagesData.push(newPost)
    //state.profilePage.newPostText = ''
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

//-----------MESSAGE IN DIALOGS---------------------------------------------------------//

export const sendMessage = () => {
    const newMessage = {id: 5, text: state.dialogsPage.newMessageText};
    state.dialogsPage.messagesInDialogsData.push(newMessage)
    //state.dialogsPage.newMessageText = ''
    rerenderEntireThree(state)
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireThree(state)
}