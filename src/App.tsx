import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {S} from './App.styles'


function App() {
    return (
        <BrowserRouter>
            <S.AppWrapper>
                <Header/>
                <Navbar/>

                <S.AppContent>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                </S.AppContent>

            </S.AppWrapper>
        </BrowserRouter>
    );
}



export default App;
