import * as React from 'react';
import {NavLink} from "react-router-dom";
import {UserPhoto} from "./UserPhoto";
import {userData} from "../../types";


type Props = {
    user: userData
    followingInProgress: number[];
    followHandler: (user: userData) => void;
    unfollowHandler: (user: userData) => void;
};


export const User = ({user, unfollowHandler, followingInProgress, followHandler}: Props) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <UserPhoto user={user}/>
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
    );
};