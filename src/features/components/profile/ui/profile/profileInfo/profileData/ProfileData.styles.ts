import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
`;

const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;


const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    h4 {
        margin: 0;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; 
`;


export const S = {
    ContactContainer, HeaderContainer, ProfileContainer, SectionContainer
}