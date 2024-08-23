import styled from "styled-components";

const UserContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Добавляем тень */
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35); 
    }
`;

const UserContent = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const S = {
    UserContainer, UserContent
}