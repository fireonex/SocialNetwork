import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootStateType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";
import withAuth from "../../HOCs/withAuth";


const mapStateToProps = (state: rootStateType)=> {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesInDialogsData: state.dialogsPage.messagesInDialogsData,
        newMessageText: state.dialogsPage.newMessageText,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth(Dialogs));