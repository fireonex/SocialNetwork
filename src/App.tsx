import React from 'react';
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {S} from './App.styles';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";



export type AppPropsType = {};


function App({}: AppPropsType) {
    return (
        <S.AppWrapper>
            <HeaderContainer />
            <Navbar/>
            <S.AppContent>
                <Route path='/profile/:userId?' exact component={ProfileContainer} />
                <Route path='/dialogs' exact component={DialogsContainer} />
                <Route path='/users' exact component={UsersContainer} />
                <Route path='/news' exact component={News} />
                <Route path='/music' exact component={Music} />
                <Route path='/login' exact component={Login} />
            </S.AppContent>
        </S.AppWrapper>
    );
}

export default App;
