import { usersReducer, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching } from './usersReducer';
import {userData} from "../types";

describe('usersReducer', () => {
    let initialState: any;

    beforeEach(() => {
        initialState = {
            users: [
                { id: 1, name: 'John', followed: false, photos: { small: null, large: null }, status: null, uniqueUrlName: null },
                { id: 2, name: 'Jane', followed: true, photos: { small: null, large: null }, status: null, uniqueUrlName: null },
                { id: 3, name: 'Doe', followed: false, photos: { small: null, large: null }, status: null, uniqueUrlName: null }
            ],
            pageSize: 5,
            totalCount: 0,
            currentPage: 1,
            isFetching: true
        };
    });

    it('should handle FOLLOW action', () => {
        const action = follow(1);
        const newState = usersReducer(initialState, action);

        expect(newState.users[0].followed).toBe(true);
        expect(newState.users[1].followed).toBe(true);
        expect(newState.users[2].followed).toBe(false);
    });

    it('should handle SET_USERS action', () => {
        const newUsers: userData[] = [
            { id: 4, name: 'Anna', followed: false, photos: { small: null, large: null }, status: null, uniqueUrlName: null },
            { id: 5, name: 'Elsa', followed: false, photos: { small: null, large: null }, status: null, uniqueUrlName: null }
        ];
        const action = setUsers(newUsers);
        const newState = usersReducer(initialState, action);

        expect(newState.users.length).toBe(2);
        expect(newState.users[0].name).toBe('Anna');
        expect(newState.users[1].name).toBe('Elsa');
    });

    it('should handle CHANGE_CURRENT_PAGE action', () => {
        const action = setCurrentPage(2);
        const newState = usersReducer(initialState, action);

        expect(newState.currentPage).toBe(2);
    });

    it('should handle SET_TOTAL_USERS_COUNT action', () => {
        const action = setTotalUsersCount(100);
        const newState = usersReducer(initialState, action);

        expect(newState.totalCount).toBe(100);
    });

    it('should handle TOGGLE_IS_FETCHING action', () => {
        const action = toggleFetching(false);
        const newState = usersReducer(initialState, action);

        expect(newState.isFetching).toBe(false);
    });
});

