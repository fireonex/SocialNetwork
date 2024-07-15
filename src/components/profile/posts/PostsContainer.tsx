import {addPostAC} from "../../../redux/profileReducer";
import {Posts} from "./Posts";
import {rootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type postsContainerPropsType = {
    //store: Store<rootStateType, actionType>
    //messagesData: Array<postDataType>
}


// mapStateToProps подключает данные из Redux store
const mapStateToProps = (state: rootStateType) => ({
    messagesData: state.profilePage.messagesData,
});

// mapDispatchToProps создает функции, которые будут диспатчить экшены
const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPost: (newPostText: string) => {
        dispatch(addPostAC(newPostText));
    },
});


// connect подключает Posts к Redux store
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

