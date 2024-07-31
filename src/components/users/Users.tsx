import React from "react";
import {userDataType} from "../../redux/usersReducer";
import {User} from "./user/User";
import {Pagination} from "../common/paginator/Pagination";

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
                          pageSize,
                          totalCount,
                          currentPage,
                          setCurrentPage,

                          users,
                          followHandler,
                          unfollowHandler,
                          followingInProgress
                      }: UsersPropsType) => {

    return (
        <div>
            <Pagination pageSize={pageSize} totalCount={totalCount} currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
            {users.map(user => (
                <User key={user.id}
                      user={user}
                      followingInProgress={followingInProgress}
                      followHandler={followHandler}
                      unfollowHandler={unfollowHandler}/>
            ))}
        </div>
    );
};

