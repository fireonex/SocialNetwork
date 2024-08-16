import styled from "styled-components";

const FriendsTitle = styled.h4 `
    font-size: 20px;
    color: #1a600d; /* Цвет ссылки */
    margin: 10px 0;
`

const FriendsWrapper = styled.div `
    display: flex;
    justify-content: space-between;
`

const FriendWrapper = styled.div `
    margin: 5px;
    text-align: center;
`

const FriendAvatar = styled.img `
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const FriendName = styled.p `
    color: #1a600d;
    margin-top: 2px;
`

export const S = {
    FriendsTitle,
    FriendsWrapper,
    FriendWrapper,
    FriendAvatar,
    FriendName
}