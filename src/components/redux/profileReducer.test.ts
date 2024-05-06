import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer";


// Тест для проверки отправки нового сообщения
test('addPost should add new post to profile page', () => {
    // начальное состояние
    const initialState = {
        messagesData: [
            { id: 1, post: 'How are you?', likesCount: 5 },
            { id: 2, post: 'Hello!!!', likesCount: 8 },
            { id: 3, post: 'This is my first post', likesCount: 10 },
        ],
        newPostText: 'hello'
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
    const initialState = {
        messagesData: [
            {id: 1, post: 'How are you?', likesCount: 5},
            {id: 2, post: 'Hello!!!', likesCount: 8},
            {id: 3, post: 'This is my first post', likesCount: 10},

        ],
        newPostText: 'hello'
    };

    const newText = 'Updated message text';

    // создание экшена
    const action = updateNewPostTextAC(newText);

    // получение нового состояния
    const newState = profileReducer(initialState, action);

    // ожидаем, что текст нового сообщения изменится
    expect(newState.newPostText).toBe(newText);
});

