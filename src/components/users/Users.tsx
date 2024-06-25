import examplePhoto from "../../assets/defaultSmallUserImg.png";
import React from "react";
import styled from "styled-components";
import {userDataType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {API} from "../../api/api";
import {S} from "./Users.styles"

type UsersPropsType = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    follow: (id: number) => void;
    setCurrentPage: (page: number) => void;
    users: Array<userDataType>;
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void;
    followingInProgress: [];
}

export const Users = ({
                          totalCount,
                          pageSize,
                          currentPage,
                          setCurrentPage,
                          users,
                          follow,
                          toggleIsFollowingProgress,
                          followingInProgress
                      }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <S.PaginationContainer>
                {pages.map(page => <PageNumber
                        key={page}
                        active={currentPage === page}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                    >
                        {page}
                    </PageNumber>
                )}
            </S.PaginationContainer>
            {
                users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <S.UserPhoto src={user.photos.small === null ? examplePhoto : user.photos.small}
                                           alt={'user photo'}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    toggleIsFollowingProgress(true, user.id)
                                    API.followUser(user).then((data) => {
                                        if (data.resultCode === 0) {
                                            follow(user.id)
                                        }
                                        toggleIsFollowingProgress(false, user.id)
                                    })
                                }
                                } disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>

                                : <button onClick={() => {
                                    toggleIsFollowingProgress(true, user.id)
                                    API.unfollowUser(user)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                follow(user.id)
                                            }
                                            toggleIsFollowingProgress(false, user.id)
                                        })
                                }
                                } disabled={followingInProgress.some(id => id === user.id)}>Follow</button>}
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
    );
}



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
