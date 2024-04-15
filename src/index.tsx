import './index.css';
import {addPost, state, updateNewPostText} from "./components/redux/State";
import {rerenderEntireThree} from "./render";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// addPost(' Im cool!')


// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );


rerenderEntireThree(state)

