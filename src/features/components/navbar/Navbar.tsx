import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { S } from './Navbar.styles';
import icon from "../../../common/assets/logo-sn-2.svg";

type Props = {
    //friendsData: friendsType[]
};

export const Navbar = ({}: Props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <S.Navigation>
            {screenWidth > 992 && <img src={icon} width={'50px'} alt="Icon" />}
            <S.NavLinkWrapper>
                <NavLink to={'/profile'}>Profile</NavLink>
            </S.NavLinkWrapper>
            <S.NavLinkWrapper>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </S.NavLinkWrapper>
            <S.NavLinkWrapper>
                <NavLink to={'/users'}>Users</NavLink>
            </S.NavLinkWrapper>
            <S.NavLinkWrapper>
                <NavLink to={'/news'}>News</NavLink>
            </S.NavLinkWrapper>
            <S.NavLinkWrapper>
                <NavLink to={'/music'}>Music</NavLink>
            </S.NavLinkWrapper>
        </S.Navigation>
    );
};
