import styled from "styled-components";

const UserPhoto = styled.img`
    width: 65px;
    border-radius: 50%;
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const UsersContainer = styled.div`
    margin: 20px;
    padding: 10px;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;


export const S = {
    UserPhoto,
    PaginationContainer,
    PaginationWrapper,
    UsersContainer
}