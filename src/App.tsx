import React from 'react';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {S} from './App.styles'
import {rootStateType} from "./components/redux/State";



type AppPropsType = {
    state: rootStateType
    addPost: (postText: string) => void
}

function App({state, addPost}: AppPropsType) {
    return (
        <S.AppWrapper>
            <Header/>
            <Navbar friendsData={state.navbarPage.sidebarFriends}/>

            <S.AppContent>
                <Route path={'/profile'} exact render={() => <Profile
                    messagesData={state.profilePage.messagesData}
                    addPost={addPost}
                />}/>
                <Route path={'/dialogs'} exact render={() => <Dialogs
                    dialogsData={state.dialogsPage.dialogsData}
                    messagesInDialogsData={state.dialogsPage.messagesInDialogsData}/>}/>
                <Route path={'/news'} exact render={() => <News/>}/>
                <Route path={'/music'} exact render={() => <Music/>}/>
                {/*<Route path={'/friends'} exact render={() => <Friends friendsData={state.navbarPage.sidebarFriends}/>}/>*/}

            </S.AppContent>

        </S.AppWrapper>
    );
}


export default App;
