import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import {Posts} from "./Posts";
import {rootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type postsContainerPropsType = {
    //store: Store<rootStateType, actionType>
    //messagesData: Array<postDataType>
}

// export const PostsContainer = ({}: postsContainerPropsType) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {context => {
//                 if (!context) return null;  // Добавьте проверку на null
//
//
//                 let state = store.getState();
//                 const addPostHandler = () => {
//                     store.dispatch(addPostAC());
//                     store.dispatch(updateNewPostTextAC(''));
//                 };
//
//                 const updateNewPostTextHandler = (text: string) => {
//                     store.dispatch(updateNewPostTextAC(text));
//                 };
//
//                 return (
//                     <Posts updateNewPostText={updateNewPostTextHandler} addPost={addPostHandler}
//                            messagesData={state.profilePage.messagesData}// Убедитесь, что используете правильный путь к данным
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//
//
//     );
// };


// mapStateToProps подключает данные из Redux store
const mapStateToProps = (state: rootStateType) => ({
    messagesData: state.profilePage.messagesData,
    newPostText: state.profilePage.newPostText
});

// mapDispatchToProps создает функции, которые будут диспатчить экшены
const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPost: () => {
        dispatch(addPostAC());
        dispatch(updateNewPostTextAC(''));
    },
    updateNewPostText: (text: string) => {
        dispatch(updateNewPostTextAC(text));
    }
});

// connect подключает Posts к Redux store
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

