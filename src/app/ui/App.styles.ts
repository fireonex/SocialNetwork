import styled from 'styled-components';
import { Layout } from 'antd';
import {Theme} from "../../common/styles";

const { Header, Content, Sider } = Layout;

// Задаем значения по умолчанию для случая, если тема не будет доступна
export const AppWrapper = styled(Layout)`
  height: 100vh;
    font-family: "IM FELL English";
`;

export const AppContent = styled(Content)`
    margin: 24px 16px 0;
    padding: 24px;
    background: ${(props) => props.theme?.token?.colorBgContainer || Theme.colors.NavbarLight};
    border-radius: ${(props) => props.theme?.token?.borderRadiusLG || '8px'};
    min-height: 360px;
`;

export const AppSider = styled(Sider)`
    background: linear-gradient(180.00deg, rgb(250, 234, 202),rgb(239, 207, 164) 100%);
`;

export const AppHeader = styled(Header)`
  background: ${(props) => props.theme?.token?.colorBgContainer || '#ffffff'};
  padding: 0;
`;

export const S = {
    AppWrapper,
    AppContent,
    AppSider,
    AppHeader,
};
