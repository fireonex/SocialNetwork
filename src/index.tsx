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
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireThree()
store.subscribe(rerenderEntireThree)




