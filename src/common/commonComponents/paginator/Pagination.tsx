import React, {useState} from "react";
import styled from "styled-components";
import {S} from "../../../features/components/users/ui/Users.styles"

type Props = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    portionSize: number;
};

export const Pagination = ({
                               pageSize,
                               totalCount,
                               currentPage,
                               setCurrentPage,
                               portionSize = 10
                           }: Props) => {

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionSizeNum = (portionNumber - 1) * portionSize + 1;
    let rightPortionSizeNum = portionNumber * portionSize

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)


    return (
        <S.PaginationContainer>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>
                    PREV
                </button>
            )}
            {pages
                .filter(p => p >= leftPortionSizeNum && p <= rightPortionSizeNum)
                .map(page => (
                    <PageNumber
                        key={page}
                        active={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </PageNumber>
                ))}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </S.PaginationContainer>
    );
}


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
