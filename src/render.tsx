import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, rootStateType, sendMessage, updateNewMessageText, updateNewPostText} from "./components/redux/State";


export const rerenderEntireThree = (state: rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 sendMessage={sendMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
