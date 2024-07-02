import examplePhoto from "../../assets/defaultSmallUserImg.png";
import React from "react";
import styled from "styled-components";
import { userDataType } from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import { S } from "./Users.styles";

type UsersPropsType = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    users: Array<userDataType>;
    followingInProgress: number[];
    followHandler: (user: userDataType) => void;
    unfollowHandler: (user: userDataType) => void;
};

export const Users = ({
                          totalCount,
                          pageSize,
                          currentPage,
                          setCurrentPage,
                          users,
                          followHandler,
                          unfollowHandler,
                          followingInProgress
                      }: UsersPropsType) => {

    //let pagesCount = Math.ceil(totalCount / pageSize);
    let pagesCount = 10;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <S.PaginationContainer>
                {pages.map(page => (
                    <PageNumber
                        key={page}
                        active={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </PageNumber>
                ))}
            </S.PaginationContainer>
            {users.map(user => (
                <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <S.UserPhoto
                                    src={user.photos.small === null ? examplePhoto : user.photos.small}
                                    alt={"user photo"}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    onClick={() => unfollowHandler(user)}
                                    disabled={followingInProgress.includes(user.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => followHandler(user)}
                                    disabled={followingInProgress.includes(user.id)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};



const PageNumber = styled.span<{ active?: boolean }>`
    margin: 0 5px;
    padding: 3px 5px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${props => (props.active ? '#007bff' : '#f8f9fa')};
    color: ${props => (props.active ? '#fff' : '#000')};
    border: 1px solid ${props => (props.active ? '#007bff' : '#dee2e6')};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${props => (props.active ? '#0056b3' : '#e9ecef')};
        color: ${props => (props.active ? '#fff' : '#007bff')};
    }
`;
