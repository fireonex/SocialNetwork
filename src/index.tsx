import './index.css';
import {store} from "./components/redux/redux-store";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>

    </BrowserRouter>,
    document.getElementById('root')
)







