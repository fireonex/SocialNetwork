import React, { useState, useEffect } from "react";
import { S } from './Header.styles';
import { NavLink } from "react-router-dom";
import { StyledButton } from "../../../common/commonComponents/antdComponents/StyledButton";
import { Caption } from "../../../common/commonComponents/textElements/Caption";
import icon from "../../../common/assets/logo-sn-2.svg";

type Props = {
    isAuth: boolean;
    loggedOutTC: () => void;
    login: string | null;
};

export const Header = ({ isAuth, loggedOutTC, login }: Props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const logoutHandler = () => {
        loggedOutTC();
    };

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
        <S.AppHeader>
                {screenWidth <= 992 ? <S.Logo src={icon} alt="Icon" /> : <div></div>}
                <S.LoginBlock>
                    {isAuth ? (
                        <>
                            <Caption text={login ? login : ''}/>
                            <StyledButton onClick={logoutHandler}>Log out</StyledButton>
                        </>
                    ) : (
                        <NavLink to={'/login'}>
                            <Caption text={'Login'}/>
                        </NavLink>
                    )}
                </S.LoginBlock>
        </S.AppHeader>

    );
};
