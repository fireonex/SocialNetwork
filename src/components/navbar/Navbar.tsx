import React from "react";
import {NavLink} from "react-router-dom";
import {S} from './Navbar.styles'
import {Friends} from "../friends/Friends";
import {friendsType} from "../redux/navbarReducer";


type NavbarPropsType = {
    friendsData: friendsType[]
}


export const Navbar = ({friendsData}: NavbarPropsType) => {
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
            <Friends friendsData={friendsData}/>
        </S.Navigation>
    )
}


