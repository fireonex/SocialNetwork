import styled from 'styled-components';
import {Theme} from "../../../common/styles/styles";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, rgba(2,52,48,1) 46%, rgba(0,0,0,1) 89%);
    padding: 0 20px 0 0;
    height: 64px;
    color: ${Theme.colors.NavbarDark};
`;
export const AppHeader = styled(Header)`
    background: linear-gradient(90deg, rgba(2, 52, 48, 1) 46%, rgba(0, 0, 0, 1) 89%);
    position: fixed;
    top: 0;
    left: 200px; /* Ширина сайдбара */
    width: calc(100% - 200px); /* Учитываем ширину сайдбара */
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px; /* Увеличенная высота для иконки */
`;

const Logo = styled.img`
  height: 40px;
`;

const LoginBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    

    a {
        color: white;

        &:hover {
            color: #40a9ff;
        }
    }
`;

export const S = {
    Header,
    Logo,
    LoginBlock,
    AppHeader
};
