import styled from "styled-components";


const Header = styled.header `
    grid-area: h;
    background-color: #658d45
`

const Logo = styled.img `
    width: 30px;
`

const LoginBlock = styled.div `
    float: right;
    margin: 10px;
    a {
        color: aliceblue; 
    } 
`

export const S = {
    Header,
    Logo,
    LoginBlock
}