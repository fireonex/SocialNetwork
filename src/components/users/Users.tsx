import examplePhoto from "../../assets/defaultSmallUserImg.png";
import React from "react";
import styled from "styled-components";
import {userDataType} from "../../redux/usersReducer";

type UsersPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    changeUserFollow: (id: number) => void
    setCurrentPageHandler: (page: number) => void
    users: Array<userDataType>
}

export const Users = ({totalCount,
                          pageSize,
                          currentPage,
                          setCurrentPageHandler,
                          users,
                          changeUserFollow}: UsersPropsType) => {

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <PaginationContainer>
                {pages.map(page => <PageNumber
                        key={page}
                        active={currentPage === page}
                        onClick={() => {
                            setCurrentPageHandler(page)
                        }}
                    >
                        {page}
                    </PageNumber>
                )}
            </PaginationContainer>
            {
                users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <UserPhoto src={user.photos.small === null ? examplePhoto : user.photos.small}
                                       alt={'user photo'}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    changeUserFollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    changeUserFollow(user.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </div>
                </div>)
            }
        </div>
    )
}
const UserPhoto = styled.img`
    width: 65px;
    border-radius: 50%;
`
const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;
const PageNumber = styled.span<{ active?: boolean }>`
    margin: 0 5px;
    padding: 3px 5px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${props => props.active ? '#007bff' : '#f8f9fa'};
    color: ${props => props.active ? '#fff' : '#000'};
    border: 1px solid ${props => props.active ? '#007bff' : '#dee2e6'};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${props => props.active ? '#0056b3' : '#e9ecef'};
        color: ${props => props.active ? '#fff' : '#007bff'};
    }
`;