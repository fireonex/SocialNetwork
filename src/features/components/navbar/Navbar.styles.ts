import styled from 'styled-components';
import {Theme} from "../../../common/styles";

const Navigation = styled.nav`
    background: #20581e;
    padding: 20px;
    height: 100%;
`;

const NavLinkWrapper = styled.div`
    margin: 20px 0;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: ${Theme.colors.FontLightDark};
        padding: 10px;
        display: block;
        border-radius: 5px;

        &:hover {
            color: ${Theme.colors.NavbarLight};
        }

        &.active {
            background-color: ${Theme.colors.NavbarDark};
            color: ${Theme.colors.FontDark};
        }
    }
`;

export const S = {
    Navigation,
    NavLinkWrapper,
};
