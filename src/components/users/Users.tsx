import {userDataType} from "../../redux/usersReducer";
import examplePhoto from '../../assets/defaultSmallUserImg.png'
import styled from "styled-components";
import axios from "axios";
import React from "react";

type UsersPropsType = {
    changeUserFollow: (id: number) => void
    setUsers: (users: Array<userDataType>) => void
    users: Array<userDataType>
};

type UsersStateType = {};

export class Users extends React.Component<UsersPropsType, UsersStateType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <UserPhoto src={user.photos.small === null ? examplePhoto : user.photos.small} alt={'user photo'}/>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {this.props.changeUserFollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {this.props.changeUserFollow(user.id)}}>Follow</button>}
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


const UserPhoto = styled.img`
    width: 65px;
    border-radius: 50%;
`

