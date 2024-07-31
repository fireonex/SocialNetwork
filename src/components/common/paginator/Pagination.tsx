import React from "react";
import styled from "styled-components";
import {S} from "../../users/Users.styles";

type PaginationPropsType = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
};

export const Pagination = ({
                              pageSize,
                              totalCount,
                              currentPage,
                              setCurrentPage,
                          }: PaginationPropsType) => {

    //let pagesCount = Math.ceil(totalCount / pageSize);
    let pagesCount = 10;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <S.PaginationContainer>
            {pages.map(page => (
                <PageNumber
                    key={page}
                    active={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </PageNumber>
            ))}
        </S.PaginationContainer>
    );
};


const PageNumber = styled.span<{ active?: boolean }>`
    margin: 0 5px;
    padding: 3px 5px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${props => (props.active ? '#007bff' : '#f8f9fa')};
    color: ${props => (props.active ? '#fff' : '#000')};
    border: 1px solid ${props => (props.active ? '#007bff' : '#dee2e6')};
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${props => (props.active ? '#0056b3' : '#e9ecef')};
        color: ${props => (props.active ? '#fff' : '#007bff')};
    }
`;
