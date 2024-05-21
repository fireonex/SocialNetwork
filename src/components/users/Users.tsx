import {changeCurrentPageAC, userDataType} from "../../redux/usersReducer";
import examplePhoto from '../../assets/defaultSmallUserImg.png'
import styled from "styled-components";
import axios from "axios";
import React from "react";

type UsersPropsType = {
    changeUserFollow: (id: number) => void
    setUsers: (users: Array<userDataType>) => void
    users: Array<userDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
};

type UsersStateType = {};

export class Users extends React.Component<UsersPropsType, UsersStateType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setCurrentPageHandler = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        // const changeCurrentPageHandler = () => {
        //     dispatch()
        // }

        return (
            <div>
                <PaginationContainer>
                    {pages.map(page => <PageNumber
                            key={page}
                            active={this.props.currentPage === page}
                            onClick={() => {this.setCurrentPageHandler(page)}}
                        >
                            {page}
                        </PageNumber>
                    )}
                </PaginationContainer>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <UserPhoto src={user.photos.small === null ? examplePhoto : user.photos.small}
                                           alt={'user photo'}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        this.props.changeUserFollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.changeUserFollow(user.id)
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
        );
    }
}

//props.currentPage === page
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

