import {userDataType} from "../../redux/usersReducer";
import examplePhoto from '../../assets/img.png'
import styled from "styled-components";

type UsersPropsType = {
    changeUserFollow: (id: number) => void
    setUsers: (users: Array<userDataType>) => void
    users: Array<userDataType>
};


export const Users = ({changeUserFollow, setUsers, users}: UsersPropsType) => {

    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                avatarUrl: 'src/assets/img.png',
                followed: false,
                fullName: 'John Snow',
                status: 'Hello everyone',
                location: {country: 'USA', city: 'New York'}
            },
            {
                id: 2,
                avatarUrl: 'src/assets/img.png',
                followed: true,
                fullName: 'Alla Smith',
                status: 'Im best!',
                location: {country: 'USA', city: 'Los Angeles'}
            },
            {
                id: 3,
                avatarUrl: 'src/assets/img.png',
                followed: false,
                fullName: 'Paul Anders',
                status: 'Send me now',
                location: {country: 'France', city: 'Paris'}
            },
        ])
    }



    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <UserPhoto src={examplePhoto} alt={user.avatarUrl}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {changeUserFollow(user.id)}}>Unfollow</button>
                                : <button onClick={() => {changeUserFollow(user.id)}}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
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

