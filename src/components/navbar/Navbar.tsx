import React from "react";
import {NavLink} from "react-router-dom";
import {S} from './Navbar.styles'


export const Navbar = () => {
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
        </S.Navigation>
    )
}


