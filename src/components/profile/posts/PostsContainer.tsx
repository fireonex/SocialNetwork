import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profileReducer";
import {Posts} from "./Posts";
import {StoreContext} from "../../../StoreContext";
import {store} from "../../redux/redux-store";


type postsContainerPropsType = {
    //store: Store<rootStateType, actionType>
    //messagesData: Array<postDataType>
}

export const PostsContainer = ({}: postsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {context => {
                if (!context) return null;  // Добавьте проверку на null


                let state = store.getState();
                const addPostHandler = () => {
                    store.dispatch(addPostAC());
                    store.dispatch(updateNewPostTextAC(''));
                };

                const updateNewPostTextHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text));
                };

                return (
                    <Posts updateNewPostText={updateNewPostTextHandler} addPost={addPostHandler}
                           messagesData={state.profilePage.messagesData}// Убедитесь, что используете правильный путь к данным
                    />
                );
            }}
        </StoreContext.Consumer>


    );
};

