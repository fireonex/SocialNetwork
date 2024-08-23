import React from "react";
import { User } from "./user/User";
import { userData } from "../types";
import {S} from "./Users.styles"
import { Row, Col } from "antd";
import {Pagination} from "../../../../common/commonComponents/paginator/Pagination";
import {Title} from "../../../../common/commonComponents/textElements/Title";

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
        <S.UsersContainer>
            <Title text={'Our users'}/>
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
                        xs={24}  // Полная ширина на малых экранах (мобильных)
                        sm={12}  // Половина ширины на небольших экранах (планшеты)
                        md={8}   // Треть ширины на средних экранах (небольшие ноутбуки)
                        lg={6}   // Четверть ширины на больших экранах (широкие экраны)
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


