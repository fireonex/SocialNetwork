import './index.css';
import {store} from "./components/redux/State";

import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


const rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 // addPost={store.addPost.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // sendMessage={store.sendMessage.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireThree()
store.subscribe(rerenderEntireThree)




