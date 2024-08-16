import {rootState} from "../../../../common/types/types";


export const getUsers = (state: rootState) => state.usersPage.users;
// export const getUsersSelector
//     = createSelector(getUsers,(users: userDataType[]) => users.filter(el => true))
//                                                          - createSelector возвращает мемоизированное значение
export const getPageSize = (state: rootState) => state.usersPage.pageSize;
export const getTotalUsersCount = (state: rootState) => state.usersPage.totalCount;
export const getCurrentPage = (state: rootState) => state.usersPage.currentPage;
export const getIsFetching = (state: rootState) => state.usersPage.isFetching;
export const getFollowingInProgress = (state: rootState) => state.usersPage.followingInProgress;

