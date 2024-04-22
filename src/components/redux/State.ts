import friendAvatar from '../../assets/img.png'

let rerenderEntireThree = (state: rootStateType) => {
    console.log('state changed')
}

//---------types of functions-------------------------------//

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

//---------------------------------------------------------//

export type rootStateType = {
    profilePage: profilePageDataType
    dialogsPage: dialogsPageType
    navbarPage: sidebarPageType
}

//-------------types of actions----------------------------//

export type addPostActionType = {
    type: 'ADD-POST'
}

export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type sendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type updateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string

}

export type actionType = addPostActionType
                        | updateNewPostTextActionType
                        | sendMessageActionType
                        | updateNewMessageTextActionType


//---------------------------------------------------------//

export type StoreType = {
    _state: rootStateType
    getState: () => rootStateType
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _sendMessage: () => void
    _updateNewMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: actionType) => void
}

export const store: StoreType = {
    _state: {

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
    },

    getState() {
        return this._state
    },

    _addPost() {
        const newPost = {id: 4, post: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.messagesData.push(newPost)
        rerenderEntireThree(this._state)
    },

    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        rerenderEntireThree(this._state)
    },

    _sendMessage() {
        const newMessage = {id: 5, text: this._state.dialogsPage.newMessageText};
        this._state.dialogsPage.messagesInDialogsData.push(newMessage)
        //state.dialogsPage.newMessageText = ''
        rerenderEntireThree(this._state)
    },

    _updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        rerenderEntireThree(this._state)
    },

    subscribe(observer: () => void) {
        rerenderEntireThree = observer //наблюдатель (паттерн)
    },

    dispatch(action: actionType) {

        if (action.type === 'ADD-POST') {
            this._addPost()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)

        } else if (action.type === 'SEND-MESSAGE') {
            this._sendMessage()

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._updateNewMessageText(action.newText)
        }
    }
}


