import styled from "styled-components";

const AppWrapper = styled.div`
    display: grid;
    width: 800px;
    margin: 0 auto;
    grid-template-areas:
        'h h'
        'n c';

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`

const AppContent = styled.div `
    grid-area: c;
    background-color: #4ba69d;
`


export const S = {
    AppWrapper,
    AppContent
}