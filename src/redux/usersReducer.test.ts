import { usersReducer, followAC, setUsersAC, usersPageType, userDataType } from './usersReducer';

describe('usersReducer', () => {
    let initialState: usersPageType;

    beforeEach(() => {
        initialState = {
            users: [
                {
                    id: 1,
                    avatarUrl: 'src/assets/img.png',
                    followed: false,
                    fullName: 'How are you?',
                    status: 'Hello everyone',
                    location: { country: 'USA', city: 'New York' }
                },
                {
                    id: 2,
                    avatarUrl: 'src/assets/img.png',
                    followed: true,
                    fullName: 'Hello!!!',
                    status: 'Im best!',
                    location: { country: 'USA', city: 'Los Angeles' }
                },
                {
                    id: 3,
                    avatarUrl: 'src/assets/img.png',
                    followed: false,
                    fullName: 'This is my first post',
                    status: 'Send me now',
                    location: { country: 'France', city: 'Paris' }
                },
            ]
        };
    });

    test('should toggle followed status of a user', () => {
        const newState = usersReducer(initialState, followAC(1));
        expect(newState.users[0].followed).toBe(true); // Check if followed is toggled
        expect(newState.users[1].followed).toBe(true); // unchanged
        expect(newState.users[2].followed).toBe(false); // unchanged
    });

    test('should add new users to the existing list', () => {
        const newUsers: userDataType[] = [
            {
                id: 4,
                avatarUrl: 'src/assets/img2.png',
                followed: false,
                fullName: 'New User',
                status: 'I am new here',
                location: { country: 'Germany', city: 'Berlin' }
            }
        ];
        const newState = usersReducer(initialState, setUsersAC(newUsers));
        expect(newState.users.length).toBe(4); // Checking the length of the users array
        expect(newState.users[3].fullName).toBe('New User'); // Checking the details of the new user
    });

    test('should handle non-existing action', () => {
        const newState = usersReducer(initialState, { type: "NON_EXISTING_ACTION" } as any);
        expect(newState).toEqual(initialState); // Ensure state is unchanged on unknown action
    });
});
