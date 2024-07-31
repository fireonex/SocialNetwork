import { dialogsReducer, sendMessageAC } from './dialogsReducer';

// Тест для проверки отправки нового сообщения
test('sendMessage should add new message to dialogs page', () => {
    // начальное состояние
    const initialState = {
        dialogsData: [
            {id: '1', personName: 'Sam'},
            {id: '2', personName: 'John'},
            {id: '3', personName: 'Sarah'},
            {id: '4', personName: 'Tom'},
            {id: '5', personName: 'Rebecca'}
        ],
        messagesInDialogsData: [
            {id: '1', text: 'Whats up bro??'},
            {id: '2', text: 'I love you'},
            {id: '3', text: 'Lets go to restaurant'},
            {id: '4', text: 'Hey, Im online'}
        ]
    };

    const newMessageText = 'New message text';

    // создание экшена
    const action = sendMessageAC(newMessageText);

    // получение нового состояния
    const newState = dialogsReducer(initialState, action);

    // ожидаем, что количество сообщений увеличится
    expect(newState.messagesInDialogsData.length).toBe(initialState.messagesInDialogsData.length + 1);

    // и последнее сообщение будет объектом с полями id и text
    expect(newState.messagesInDialogsData[newState.messagesInDialogsData.length - 1]).toEqual({
        id: expect.any(String),  // id будет строкой
        text: newMessageText  // текст сообщения должен совпадать с newMessageText
    });
});
