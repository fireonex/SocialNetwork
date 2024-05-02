import React from "react";
import {StoreContext} from "../../StoreContext";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageTextAC} from "../redux/dialogsReducer";
import {store} from "../redux/redux-store";


type DialogsPropsType = {
    //dialogsData: Array<dialogsDataType>
    //messagesInDialogsData: Array<messagesInDialogsDataType>
}

export const DialogsContainer = ({}: DialogsPropsType) => {
    return (
        <StoreContext.Consumer>
            {context => {
                if (!context) return null; // Проверяем, что store не null

                const state = store.getState(); // Получаем текущее состояние
                const dialogsData = state.dialogsPage.dialogsData; // Допустим, у вас такие поля в state
                const messagesInDialogsData = state.dialogsPage.messagesInDialogsData;

                const sendMessage = () => {
                    store.dispatch(sendMessageAC()); // Убедитесь, что sendMessageAC правильно импортирован
                    store.dispatch(updateNewMessageTextAC('')); // Убедитесь, что updateNewMessageTextAC правильно импортирован
                }

                const updateNewMessageText = (message: string) => {
                    store.dispatch(updateNewMessageTextAC(message));
                }

                return (
                    <Dialogs
                        sendMessage={sendMessage}
                        updateNewMessageText={updateNewMessageText}
                        dialogsData={state.dialogsPage.dialogsData}
                        messagesInDialogsData={state.dialogsPage.messagesInDialogsData}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
