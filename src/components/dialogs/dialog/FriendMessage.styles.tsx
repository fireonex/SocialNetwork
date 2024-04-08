import styled from "styled-components";

const friendMessage = styled.div`
    margin: 131px 748px 154px 70px;
    width: 462px;
    height: 77px;
`

const friendImageAndText = styled.div`
    margin-top: 168px;

    img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
`

const friendText = styled.div`
    width: 414px;
    height: 60px;
    box-shadow: 0 1px 2px 0 rgba(29, 33, 38, 0.1), 0 5px 20px 0 rgba(29, 33, 38, 0.03);
    background: rgb(245, 247, 251);
`

const  friendName= styled.div`
         width: 35px;
         height: 20px;
         color: rgb(0, 0, 0);
         font-family: 'Montserrat', sans-serif;
         font-size: 16px;
         font-weight: 600;
         line-height: 20px;
         letter-spacing: 0;
         text-align: left;
`

const friendMessageText = styled.pre `
         width: 374px;
         height: 20px;

         color: rgb(0, 0, 0);
         font-family: Montserrat, sans-serif;
         font-size: 16px;
         font-weight: 400;
         line-height: 20px;
         letter-spacing: 0;
         text-align: left;
`

const friendTime = styled.div `
         width: 29px;
         height: 12px;
         color: rgb(0, 0, 0);
         font-family: 'Montserrat', sans-serif;
         font-size: 10px;
         font-weight: 600;
         line-height: 12px;
         letter-spacing: 0;
         text-align: left;
`


export const S = {
    friendMessage,
    friendImageAndText,
    friendText,
    friendName,
    friendMessageText,
    friendTime
}