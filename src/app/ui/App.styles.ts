import styled from 'styled-components';
import { Layout } from 'antd';
import { Theme } from "../../common/styles";

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
  padding: 0;
`;

// Прокручиваемая центральная часть
export const AppContent = styled(Content)`
  margin-top: 64px; /* Отступ для хедера */
  padding: 24px;
  background: ${(props) => props.theme?.token?.colorBgContainer || Theme.colors.NavbarLight};
  border-radius: ${(props) => props.theme?.token?.borderRadiusLG || '8px'};
  min-height: calc(100vh - 64px); /* Высота экрана минус высота хедера */
  overflow-y: auto;
`;

export const S = {
    AppWrapper,
    AppContent,
    AppSider,
    AppHeader,
};
