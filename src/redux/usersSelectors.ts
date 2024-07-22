import {rootStateType} from "./redux-store";

export const getUsers = (state: rootStateType) => state.usersPage.users;
export const getPageSize = (state: rootStateType) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: rootStateType) => state.usersPage.totalCount;
export const getCurrentPage = (state: rootStateType) => state.usersPage.currentPage;
export const getIsFetching = (state: rootStateType) => state.usersPage.isFetching;
export const getFollowingInProgress = (state: rootStateType) => state.usersPage.followingInProgress;

