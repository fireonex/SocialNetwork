import { addPostAC, profileReducer, updateNewPostTextAC, setUserProfile } from "./profileReducer";
import { ProfileType, profilePageDataType } from "./profileReducer";

// Тест для проверки отправки нового сообщения
test('addPost should add new post to profile page', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: 1, post: 'How are you?', likesCount: 5 },
            { id: 2, post: 'Hello!!!', likesCount: 8 },
            { id: 3, post: 'This is my first post', likesCount: 10 },
        ],
        newPostText: 'hello',
        profile: {} as ProfileType
    };

    // создание экшена
    const action = addPostAC();

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что количество постов увеличится
    expect(newState.messagesData.length).toBe(initialState.messagesData.length + 1);
    // и последний пост будет иметь текст 'hello' (newPostText из начального состояния)
    expect(newState.messagesData[newState.messagesData.length - 1].post).toBe(initialState.newPostText);
});


// Тест для проверки обновления текста нового сообщения
test('updateNewPostText should change new post text', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: 1, post: 'How are you?', likesCount: 5 },
            { id: 2, post: 'Hello!!!', likesCount: 8 },
            { id: 3, post: 'This is my first post', likesCount: 10 },
        ],
        newPostText: 'hello',
        profile: {} as ProfileType
    };

    const newText = 'Updated message text';

    // создание экшена
    const action = updateNewPostTextAC(newText);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что текст нового сообщения изменится
    expect(newState.newPostText).toBe(newText);
});


// Тест для проверки установки профиля пользователя
test('setUserProfile should update profile data', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: 1, post: 'How are you?', likesCount: 5 },
            { id: 2, post: 'Hello!!!', likesCount: 8 },
            { id: 3, post: 'This is my first post', likesCount: 10 },
        ],
        newPostText: 'hello',
        profile: {} as ProfileType
    };

    const newProfile: ProfileType = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'Looking for a React developer job',
        fullName: 'John Doe',
        contacts: {
            github: 'github.com/johndoe',
            vk: 'vk.com/johndoe',
            facebook: 'facebook.com/johndoe',
            instagram: 'instagram.com/johndoe',
            twitter: 'twitter.com/johndoe',
            website: 'johndoe.com',
            youtube: 'youtube.com/johndoe',
            mainLink: 'johndoe.com'
        },
        photos: {
            small: 'small.jpg',
            large: 'large.jpg'
        }
    };

    // создание экшена
    const action = setUserProfile(newProfile);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что профиль обновится
    expect(newState.profile).toEqual(newProfile);
});
