import React from 'react';
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile";
import { Route } from "react-router-dom";
import { News } from "./components/news/News";
import { Music } from "./components/music/Music";
import { S } from './App.styles';
import { DialogsContainer } from "./components/dialogs/DialogsContainer";

export type AppPropsType = {};

function App({}: AppPropsType) {
    return (
        <S.AppWrapper>
            <Header />
            <Navbar/>
            <S.AppContent>
                <Route path='/profile' exact component={Profile} />
                <Route path='/dialogs' exact component={DialogsContainer} />
                <Route path='/news' exact component={News} />
                <Route path='/music' exact component={Music} />
            </S.AppContent>
        </S.AppWrapper>
    );
}

export default App;
