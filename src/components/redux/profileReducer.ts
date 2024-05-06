import {actionType} from "./redux-store";

//---------types----------------------------------------------------//
export type addPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type postDataType = {
    id: number
    post: string
    likesCount: number
}

export type profilePageDataType = {
    messagesData: postDataType[]
    newPostText: string
}
//-----------------------------------------------------------------//

let initialState: profilePageDataType = {
    messagesData: [
        {id: 1, post: 'How are you?', likesCount: 5},
        {id: 2, post: 'Hello!!!', likesCount: 8},
        {id: 3, post: 'This is my first post', likesCount: 10},

    ],
    newPostText: 'hello'
}


export const profileReducer = (state = initialState, action: actionType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 4, post: state.newPostText, likesCount: 0};
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
                newPostText: ''
            }

            // const newPost = {id: 4, post: state.newPostText, likesCount: 0};
            // state.messagesData.push(newPost);
            // return state;
        case 'UPDATE-NEW-POST-TEXT':
            // return {
            //     ...state,
            //     newPostText: action.newText
            // }
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostAC = () => ({
    type: "ADD-POST"
}) as const


export const updateNewPostTextAC = (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text
}) as const