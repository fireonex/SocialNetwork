import {actionType, profilePageDataType} from "./State";

export type addPostActionType = ReturnType<typeof addPostAC>

export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>


export const profileReducer = (state: profilePageDataType, action: actionType) => {


    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 4, post: state.newPostText, likesCount: 0};
            state.messagesData.push(newPost);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
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