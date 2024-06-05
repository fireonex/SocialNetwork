export type addPostActionType = ReturnType<typeof addPostAC>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>

export type postDataType = {
    id: number
    post: string
    likesCount: number
}

export type ProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ContactsType;
    photos: PhotosType;
};

type ContactsType = {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
};

type PhotosType = {
    small: string | undefined;
    large: string | undefined;
};

export type profilePageDataType = {
    messagesData: postDataType[]
    newPostText: string,
    profile: ProfileType | null
}

export type profilePageActionsType = addPostActionType | updateNewPostTextActionType | setUserProfileActionType

let initialState: profilePageDataType = {
    messagesData: [
        { id: 1, post: 'How are you?', likesCount: 5 },
        { id: 2, post: 'Hello!!!', likesCount: 8 },
        { id: 3, post: 'This is my first post', likesCount: 10 },
    ],
    newPostText: 'hello',
    profile: null // инициализируем profile как null
}

export const profileReducer = (state = initialState, action: profilePageActionsType): profilePageDataType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = { id: state.messagesData.length + 1, post: state.newPostText, likesCount: 0 };
            return {
                ...state,
                messagesData: [...state.messagesData, newPost],
                newPostText: '' // Сброс поля ввода
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText // Обновление текста поля ввода
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
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

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE", profile
}) as const
