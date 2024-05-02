import React from "react";
import {NavLink} from "react-router-dom";
import {S} from './Navbar.styles'
import {Friends} from "../friends/Friends";
import {StoreContext} from "../../StoreContext";
import {store} from "../redux/redux-store";


type NavbarPropsType = {
    //friendsData: friendsType[]
}


export const Navbar = ({}: NavbarPropsType) => {
    return (
        <StoreContext.Consumer>
            {context => {
                if (!context) return null; // Проверяем, что store не null

                const state = store.getState(); // Получаем текущее состояние


                return (
                    <S.Navigation>
                        <S.NavLinkWrapper>
                            <NavLink to={'/profile'}>Profile</NavLink>
                        </S.NavLinkWrapper>
                        <S.NavLinkWrapper>
                            <NavLink to={'/dialogs'}>Messages</NavLink>
                        </S.NavLinkWrapper>
                        <S.NavLinkWrapper>
                            <NavLink to={'/news'}>News</NavLink>
                        </S.NavLinkWrapper>
                        <S.NavLinkWrapper>
                            <NavLink to={'/music'}>Music</NavLink>
                        </S.NavLinkWrapper>
                        {/*<S.NavLinkWrapper>*/}
                        {/*    <NavLink to={'/friends'}>Friends</NavLink>*/}
                        {/*</S.NavLinkWrapper>*/}
                        <Friends friendsData={state.navbarPage.sidebarFriends}/>
                    </S.Navigation>
                );
            }}

        </StoreContext.Consumer>

    )
}


