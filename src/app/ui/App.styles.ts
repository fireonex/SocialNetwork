import styled from 'styled-components';
import { Layout } from 'antd';
import { Theme } from "../../common/styles/styles";


const { Header, Content, Sider } = Layout;

// Задаем значения по умолчанию для случая, если тема не будет доступна
export const AppWrapper = styled(Layout)`
  display: flex;
  height: 100vh;
  font-family: "IM FELL English";
`;

// Фиксируем боковое меню
export const AppSider = styled(Sider)`
  background: linear-gradient(180deg, rgb(250, 234, 202), rgb(239, 207, 164) 100%);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 900;
`;

// Фиксируем хэдер
export const AppHeader = styled(Header)`
  background: ${(props) => props.theme?.token?.colorBgContainer || '#ffffff'};
  position: fixed;
  top: 0;
  left: 200px; /* Ширина сайдбара */
  width: calc(100% - 200px); /* Учитываем ширину сайдбара */
  z-index: 1000;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const AppContent = styled(Content)`
    margin-top: 64px;
    padding: 24px;
    background: ${(props) => props.theme?.token?.colorBgContainer || Theme.colors.NavbarLight};
    min-height: calc(100vh - 64px);
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;



export const S = {
    AppWrapper,
    AppContent,
    AppSider,
    AppHeader,
};
