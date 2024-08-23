import React from "react";
import {S} from "./Pagination.styles"

type Props = {
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
                           }: Props) => {

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <S.PaginationWrapper>
            <S.StyledPagination
                current={currentPage}
                total={totalCount}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
            />
        </S.PaginationWrapper>
    );
};


