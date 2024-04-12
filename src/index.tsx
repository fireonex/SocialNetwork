import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./components/redux/State";
import {addPost} from "./components/redux/State";
import {BrowserRouter} from "react-router-dom";

// addPost(' Im cool!')

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost}/>
    </BrowserRouter>,
  document.getElementById('root')
);