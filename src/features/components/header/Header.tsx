import React from "react";
import {S} from './Header.styles'
import {NavLink} from "react-router-dom";
import {StyledButton} from "../../../common/commonComponents/antdComponents/StyledButton";
import logo from "../../../common/assets/sprite.svg"
import {Icon} from "../../../common/commonComponents/icon/Icon";

type Props = {
    isAuth: boolean;
    loggedOutTC: () => void
    login: string | null;
}

export const Header = ({isAuth, loggedOutTC, login}: Props) => {

    const logoutHandler = () => {
        loggedOutTC()
    }

    return (
        <S.Header>
            <Icon iconId={'social-network-logo'} height={'100%'} width={'80px'} viewBox={'0 0 40 50'}/>
            <S.LoginBlock>
                {isAuth
                    ? <>
                        <div>{login}</div>
                        <StyledButton onClick={logoutHandler}>Log out</StyledButton>
                    </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </S.LoginBlock>
        </S.Header>
    )
}






