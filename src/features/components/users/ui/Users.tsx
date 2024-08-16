import React from "react";
import {User} from "./user/User";
import {userData} from "../types";
import {Pagination} from "../../../../common/commonComponents/paginator/Pagination";

type Props = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    users: Array<userData>;
    followingInProgress: number[];
    followHandler: (user: userData) => void;
    unfollowHandler: (user: userData) => void;
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
                      }: Props) => {

    return (
        <div>
            <Pagination pageSize={pageSize} totalCount={totalCount} currentPage={currentPage}
                        setCurrentPage={setCurrentPage} portionSize={15}/>
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

