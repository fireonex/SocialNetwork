import styled from "styled-components";
import {Pagination as AntdPagination} from "antd";

const StyledPagination = styled(AntdPagination)`
    .ant-pagination-item-active {
        background: linear-gradient(90deg, #547c7e 0%, #87a5a1 100%);
        border: none;
        transition: transform 0.3s;
    }

    .ant-pagination-item-active:hover {
        color: #D6F2EC;
        transform: translateY(-2px);
    }

    .ant-pagination-item a {
        color: #000000;
    }

    .ant-pagination-item-active a {
        color: #ffffff;
    }

    .ant-pagination-item-active:hover a {
        color: #a6bcb7;
    }
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const S = {
    StyledPagination,
    PaginationWrapper
}