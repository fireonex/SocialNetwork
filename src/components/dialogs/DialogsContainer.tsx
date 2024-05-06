import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootStateType} from "../redux/redux-store";
import {sendMessageAC, updateNewMessageTextAC} from "../redux/dialogsReducer";
import {Dispatch} from "redux";


type DialogsPropsType = {
    //dialogsData: Array<dialogsDataType>
    //messagesInDialogsData: Array<messagesInDialogsDataType>
}

// export const DialogsContainer = ({}: DialogsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {context => {
//                 if (!context) return null; // Проверяем, что store не null
//
//                 const state = store.getState(); // Получаем текущее состояние
//                 const dialogsData = state.dialogsPage.dialogsData; // Допустим, у вас такие поля в state
//                 const messagesInDialogsData = state.dialogsPage.messagesInDialogsData;
//
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageAC()); // Убедитесь, что sendMessageAC правильно импортирован
//                     store.dispatch(updateNewMessageTextAC('')); // Убедитесь, что updateNewMessageTextAC правильно импортирован
//                 }
//
//                 const updateNewMessageText = (message: string) => {
//                     store.dispatch(updateNewMessageTextAC(message));
//                 }
//
//                 return (
//                     <Dialogs
//                         sendMessage={sendMessage}
//                         updateNewMessageText={updateNewMessageText}
//                         dialogsData={state.dialogsPage.dialogsData}
//                         messagesInDialogsData={state.dialogsPage.messagesInDialogsData}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };



const mapStateToProps = (state: rootStateType)=> {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesInDialogsData: state.dialogsPage.messagesInDialogsData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
            dispatch(updateNewMessageTextAC(''));
        },
        updateNewMessageText: (message: string) => {
            dispatch(updateNewMessageTextAC(message));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);