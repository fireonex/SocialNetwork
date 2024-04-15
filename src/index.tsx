import './index.css';
import {
    addPost,
    sendMessage,
    state,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from "./components/redux/State";

import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


const rerenderEntireThree = () => {
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

rerenderEntireThree()
subscribe(rerenderEntireThree)




