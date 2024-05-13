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

export type profilePageActionsType = addPostActionType | updateNewPostTextActionType
//-----------------------------------------------------------------//

let initialState: profilePageDataType = {
    messagesData: [
        {id: 1, post: 'How are you?', likesCount: 5},
        {id: 2, post: 'Hello!!!', likesCount: 8},
        {id: 3, post: 'This is my first post', likesCount: 10},

    ],
    newPostText: 'hello'
}


export const profileReducer = (state = initialState, action: profilePageActionsType):profilePageDataType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: state.messagesData.length + 1, post: state.newPostText, likesCount: 0};
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
                newPostText: ''  // Сброс поля ввода
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText  // Обновление текста поля ввода
            };
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