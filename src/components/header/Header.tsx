import React from "react";
import {S} from './Header.styles'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean;
    login: string | null;
}
export const Header = ({isAuth, login}:HeaderPropsType) => {
    return (
        <S.Header>
            <S.Logo
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU'}
                alt={'logo'}/>
            <S.LoginBlock>
                {isAuth ? login : <NavLink to={'/login'}>Login</NavLink>}
            </S.LoginBlock>
        </S.Header>
    )
}




