import styled from "styled-components";

const Navigation = styled.nav`
    grid-area: n;
    background-color: rgba(101, 141, 69, 0.63);
    padding: 20px;
`

const NavLinkWrapper = styled.div `
    
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #56a43b;
    }

    & > a.active {
        text-decoration: none;
        color: #1f7312;
    }

    & > a:hover {
        color: #1a600d; /* Цвет ссылки */
    }
`

export const S = {
    Navigation,
    NavLinkWrapper
}