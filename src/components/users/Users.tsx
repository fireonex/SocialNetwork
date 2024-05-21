import {userDataType} from "../../redux/usersReducer";
import examplePhoto from '../../assets/defaultSmallUserImg.png'
import styled from "styled-components";
import axios from "axios";

type UsersPropsType = {
    changeUserFollow: (id: number) => void
    setUsers: (users: Array<userDataType>) => void
    users: Array<userDataType>
};


export const Users = ({changeUserFollow, setUsers, users}: UsersPropsType) => {

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            setUsers(response.data.items)
        });
    }


    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <UserPhoto src={user.photos.small === null ? examplePhoto : user.photos.small} alt={'user photo'}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {changeUserFollow(user.id)}}>Unfollow</button>
                                : <button onClick={() => {changeUserFollow(user.id)}}>Follow</button>}
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
};


const UserPhoto = styled.img`
    width: 65px;
    border-radius: 50%;
`

