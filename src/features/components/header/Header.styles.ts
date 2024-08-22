import styled from 'styled-components';
import {Theme} from "../../../common/styles";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(90deg, rgba(32,88,30,1) 50%, rgba(0,0,0,1) 100%);
    padding: 0 20px 0 0;
    height: 64px;
    color: ${Theme.colors.NavbarDark};
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
};
