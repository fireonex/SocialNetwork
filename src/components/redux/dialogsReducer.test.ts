import { dialogsReducer, sendMessageAC, updateNewMessageTextAC } from './dialogsReducer';

// Тест для проверки отправки нового сообщения
test('sendMessage should add new message to dialogs page', () => {
    // начальное состояние
    const initialState = {
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
        newMessageText: 'New message text',
    };

    // создание экшена
    const action = sendMessageAC();

    // получение нового состояния
    const newState = dialogsReducer(initialState, action);

    // ожидаем, что количество сообщений увеличится
    expect(newState.messagesInDialogsData.length).toBe(initialState.messagesInDialogsData.length + 1);
    // и последнее сообщение будет иметь текст из newMessageText
    expect(newState.messagesInDialogsData[newState.messagesInDialogsData.length - 1].text).toBe(initialState.newMessageText);
});

// Тест для проверки обновления текста нового сообщения
test('updateNewMessageText should change new message text', () => {
    // начальное состояние
    const initialState = {
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
        newMessageText: '',
    };

    const newText = 'Updated message text';

    // создание экшена
    const action = updateNewMessageTextAC(newText);

    // получение нового состояния
    const newState = dialogsReducer(initialState, action);

    // ожидаем, что текст нового сообщения изменится
    expect(newState.newMessageText).toBe(newText);
});

