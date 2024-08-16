import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import React from "react";
import {sendMessageAC} from "../model/dialogsReducer";
import withAuth from "../../../../common/HOCs/withAuth";
import {rootState} from "../../../../common/types/types";


const mapStateToProps = (state: rootState) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesInDialogsData: state.dialogsPage.messagesInDialogsData,
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
            // dispatch(updateNewMessageTextAC(''));
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuth
)(Dialogs);
