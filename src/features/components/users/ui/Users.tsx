import React from "react";
import { User } from "./user/User";
import { userData } from "../types";
import {S} from "./Users.styles"
import { Row, Col } from "antd";
import {Pagination} from "../../../../common/commonComponents/paginator/Pagination";
import {Title} from "../../../../common/commonComponents/textElements/Title";
import {UsersFiltration} from "./UsersFiltration";

type Props = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    users: Array<userData>;
    followingInProgress: number[];
    followHandler: (user: userData) => void;
    unfollowHandler: (user: userData) => void;
    onFilterChange: (values: {userName: string; followed: boolean;}) => void;
};

export const Users = ({
                          pageSize,
                          totalCount,
                          currentPage,
                          setCurrentPage,
                          users,
                          followHandler,
                          unfollowHandler,
                          followingInProgress,
                            onFilterChange
                      }: Props) => {

    return (
        <S.UsersContainer>
            <Title text={'Our users'}/>
            <UsersFiltration onFilterChange={onFilterChange}/>
            <S.PaginationWrapper>
                <Pagination
                    pageSize={pageSize}
                    totalCount={totalCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </S.PaginationWrapper>
            <Row gutter={[24, 24]}>
                {users.map(user => (
                    <Col
                        key={user.id}
                        xs={24}  // Полная ширина на малых экранах
                        sm={12}  // Половина ширины на небольших экранах
                        md={8}   // Треть ширины на средних экранах
                        lg={6}   // Четверть ширины на больших экранах
                        xl={4}   // Одна шестая ширины на очень больших экранах
                    >
                        <User
                            user={user}
                            followingInProgress={followingInProgress}
                            followHandler={followHandler}
                            unfollowHandler={unfollowHandler}
                        />
                    </Col>
                ))}
            </Row>
        </S.UsersContainer>
    );
};


