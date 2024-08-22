import React from "react";
import {S} from './Header.styles'
import {NavLink} from "react-router-dom";
import {StyledButton} from "../../../common/commonComponents/antdComponents/StyledButton";
import logo from "../../../common/assets/sprite.svg"
import {Icon} from "../../../common/commonComponents/icon/Icon";
import {SmallHeading} from "../../../common/commonComponents/textElements/SmallHeading";
import {Caption} from "../../../common/commonComponents/textElements/Caption";

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
                        <Caption text={login ? login : ''}/>
                        <StyledButton onClick={logoutHandler}>Log out</StyledButton>
                    </>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </S.LoginBlock>
        </S.Header>
    )
}






