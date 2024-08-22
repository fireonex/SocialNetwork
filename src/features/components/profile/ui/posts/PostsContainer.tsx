import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addPostAC} from "../../model/profileReducer";
import {rootState} from "../../../../../common/types/types";


const mapStateToProps = (state: rootState) => ({
    messagesData: state.profilePage.messagesData,
    profile: state.profilePage.profile
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPost: (newPostText: string) => {
        dispatch(addPostAC(newPostText));
    },
});




// connect подключает Posts к Redux store
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

