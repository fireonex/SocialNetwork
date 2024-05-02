import './index.css';
import {store} from "./components/redux/redux-store";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {StoreContext} from "./StoreContext";


const rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={{store}}>
                <App />
            </StoreContext.Provider>

        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireThree()
store.subscribe(() => {
    rerenderEntireThree()
})




