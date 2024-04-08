import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {S} from './App.styles'
import {rootStateType} from "./components/redux/State";


type AppPropsType = {
    state: rootStateType
}

function App({state}: AppPropsType) {
    return (
        <S.AppWrapper>
            <Header/>
            <Navbar/>

            <S.AppContent>
                <Route path={'/profile'} exact render={() => <Profile messagesData={state.profilePage.messagesData}/>}/>
                <Route path={'/dialogs'} exact render={() => <Dialogs
                    dialogsData={state.dialogsPage.dialogsData}
                    messagesInDialogsData={state.dialogsPage.messagesInDialogsData}/>}/>
                <Route path={'/news'} exact render={() => <News/>}/>
                <Route path={'/music'} exact render={() => <Music/>}/>
            </S.AppContent>

        </S.AppWrapper>
    );
}


export default App;
