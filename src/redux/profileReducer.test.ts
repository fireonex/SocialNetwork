import {addPostAC, profileReducer, setUserProfile, setStatus, deletePostAC} from "./profileReducer";
import { ProfileType, profilePageDataType } from "./profileReducer";

// Тест для проверки отправки нового сообщения
test('addPost should add new post to profile page', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: '1', post: 'How are you?', likesCount: 5 },
            { id: '2', post: 'Hello!!!', likesCount: 8 },
            { id: '3', post: 'This is my first post', likesCount: 10 },
        ],
        profile: null,
        status: ''
    };

    // текст нового сообщения
    const newPostText = 'hello';

    // создание экшена
    const action = addPostAC(newPostText);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что количество постов увеличится
    expect(newState.messagesData.length).toBe(initialState.messagesData.length + 1);
    // и последний пост будет иметь текст 'hello'
    expect(newState.messagesData[newState.messagesData.length - 1].post).toBe(newPostText);
});


// Тест для проверки удаления сообщения
test('deletePost should delete post from profile page', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: '1', post: 'How are you?', likesCount: 5 },
            { id: '2', post: 'Hello!!!', likesCount: 8 },
            { id: '3', post: 'This is my first post', likesCount: 10 },
        ],
        profile: null,
        status: ''
    };

    let postId = '2'

    // создание экшена
    const action = deletePostAC(postId);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что количество постов уменьшится
    expect(newState.messagesData.length).toBe(initialState.messagesData.length - 1);
    // ожидаем, что сообщение с указанным id удалено
    expect(newState.messagesData.find(post => post.id === postId)).toBeUndefined();
});


// Тест для проверки установки профиля пользователя
test('setUserProfile should update profile data', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: '1', post: 'How are you?', likesCount: 5 },
            { id: '2', post: 'Hello!!!', likesCount: 8 },
            { id: '3', post: 'This is my first post', likesCount: 10 },
        ],
        profile: null,
        status: ''
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

// Тест для проверки установки статуса пользователя
test('setStatus should update status', () => {
    // начальное состояние
    const initialState: profilePageDataType = {
        messagesData: [
            { id: '1', post: 'How are you?', likesCount: 5 },
            { id: '2', post: 'Hello!!!', likesCount: 8 },
            { id: '3', post: 'This is my first post', likesCount: 10 },
        ],
        profile: null,
        status: ''
    };

    const newStatus = 'Updated status';

    // создание экшена
    const action = setStatus(newStatus);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что статус обновится
    expect(newState.status).toBe(newStatus);
});
