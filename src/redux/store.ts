import {rootStateType} from "./redux-store";

export let rerenderEntireThree = (state: rootStateType) => {
    console.log('state changed')
}

//---------types of functions-------------------------------//
//
// type postDataType = {
//     id: number
//     post: string
//     likesCount: number
// }
//
// type dialogsDataType = {
//     id: number
//     personName: string
// }
//
// type messagesInDialogsDataType = {
//     id: number
//     text: string
// }
//
// type dialogsPageType = {
//     dialogsData: dialogsDataType[]
//     messagesInDialogsData: messagesInDialogsDataType[]
//     newMessageText: string
// }
//
// type profilePageDataType = {
//     messagesData: postDataType[]
//     newPostText: string
// }
//
// type friendsType = {
//     id: number
//     friendName: string
//     friendPhoto: string
// }
//
// type sidebarPageType = {
//     sidebarFriends: friendsType[]
// }
//
// //---------------------------------------------------------//
//
// type rootStateType = {
//     profilePage: profilePageDataType
//     dialogsPage: dialogsPageType
//     navbarPage: sidebarPageType
// }

//-------------types of actions----------------------------//

// export type addPostActionType = ReturnType<typeof addPostAC>
//
// export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

// export type sendMessageActionType = ReturnType<typeof sendMessageAC>
//
// export type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>


// type actionType = addPostActionType
//     | updateNewPostTextActionType
//     | sendMessageActionType
//     | updateNewMessageTextActionType
//
//
// //---------------------------------------------------------//
//
// export type StoreType = {
//     _state: rootStateType
//     getState: () => rootStateType
//     // _addPost: () => void
//     // _updateNewPostText: (newText: string) => void
//     // _sendMessage: () => void
//     // _updateNewMessageText: (newText: string) => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: actionType) => void
// }
//
// const store: StoreType = {
//     _state: {
//
//         profilePage: {
//             messagesData: [
//                 {id: 1, post: 'How are you?', likesCount: 5},
//                 {id: 2, post: 'Hello!!!', likesCount: 8},
//                 {id: 3, post: 'This is my first post', likesCount: 10},
//
//             ],
//             newPostText: 'hello'
//         },
//
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, personName: 'Sam'},
//                 {id: 2, personName: 'John'},
//                 {id: 3, personName: 'Sarah'},
//                 {id: 4, personName: 'Tom'},
//                 {id: 5, personName: 'Rebecca'}
//             ],
//             messagesInDialogsData: [
//                 {id: 1, text: 'Whats up bro??'},
//                 {id: 2, text: 'I love you'},
//                 {id: 3, text: 'Lets go to restaurant'},
//                 {id: 4, text: 'Hey, Im online'}
//             ],
//             newMessageText: ''
//         },
//
//         navbarPage: {
//             sidebarFriends: [
//                 {id: 1, friendName: 'Laezel', friendPhoto: friendAvatar},
//                 {id: 2, friendName: 'Astarion', friendPhoto: friendAvatar},
//                 {id: 3, friendName: 'Will', friendPhoto: friendAvatar},
//             ]
//         }
//     },
//
//     getState() {
//         return this._state
//     },

    // _addPost() {
    //     const newPost = {id: 4, post: this._state.profilePage.newPostText, likesCount: 0};
    //     this._state.profilePage.messagesData.push(newPost)
    //     rerenderEntireThree(this._state)
    // },
    //
    // _updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     rerenderEntireThree(this._state)
    // },
    //
    // _sendMessage() {
    //     const newMessage = {id: 5, text: this._state.dialogsPage.newMessageText};
    //     this._state.dialogsPage.messagesInDialogsData.push(newMessage)
    //     //state.dialogsPage.newMessageText = ''
    //     rerenderEntireThree(this._state)
    // },
    //
    // _updateNewMessageText(newText: string) {
    //     this._state.dialogsPage.newMessageText = newText
    //     rerenderEntireThree(this._state)
    // },

    // subscribe(observer: () => void) {
    //     rerenderEntireThree = observer //наблюдатель (паттерн)
    // },
    //
    // dispatch(action: actionType) {
    //
    //     this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //     this._state.navbarPage = navbarReducer(this._state.navbarPage, action)
    //
    //     rerenderEntireThree(this._state)

        // if (action.type === 'ADD-POST') {
        //     this._addPost()
        //
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._updateNewPostText(action.newText)
        //
        // } else if (action.type === 'SEND-MESSAGE') {
        //     this._sendMessage()
        //
        // } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._updateNewMessageText(action.newText)
        // }
//     }
// }


// export const addPostAC = () => ({
//     type: "ADD-POST"
// }) as const
//
//
// export const updateNewPostTextAC = (text: string) => ({
//     type: "UPDATE-NEW-POST-TEXT",
//     newText: text
// }) as const


// export const sendMessageAC = () => ({
//     type: 'SEND-MESSAGE'
// }) as const
//
//
// export const updateNewMessageTextAC = (text: string) => ({
//     type: 'UPDATE-NEW-MESSAGE-TEXT',
//     newText: text
// }) as const


