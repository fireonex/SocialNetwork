import styled from "styled-components";
import {Theme} from "../../../../common/styles/styles";

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 150px); 
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

const MessagesContainer = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 10px; 
    padding-right: 10px;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: ${Theme.colors.DarkGreen};
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const S = {
    ChatContainer, MessagesContainer
}