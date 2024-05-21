 import { usersReducer, followAC, setUsersAC, usersPageType, userDataType } from './usersReducer';
//
// describe('usersReducer', () => {
//     let initialState: usersPageType;
//
//     beforeEach(() => {
//         initialState = {
//             users: [
//                 {
//                     id: 1,
//                     photos: { small: null, large: null },
//                     followed: false,
//                     name: 'John Snow',
//                     status: 'Hello everyone',
//                     uniqueUrlName: null
//                 },
//                 {
//                     id: 2,
//                     photos: { small: null, large: null },
//                     followed: true,
//                     name: 'Alla Smith',
//                     status: 'Im best!',
//                     uniqueUrlName: null
//                 },
//                 {
//                     id: 3,
//                     photos: { small: null, large: null },
//                     followed: false,
//                     name: 'Paul Anders',
//                     status: 'Send me now',
//                     uniqueUrlName: null
//                 },
//             ]
//         };
//     });
//
//     test('should toggle followed status of a user', () => {
//         const newState = usersReducer(initialState, followAC(1));
//         expect(newState.users[0].followed).toBe(true); // Check if followed is toggled
//         expect(newState.users[1].followed).toBe(true); // unchanged
//         expect(newState.users[2].followed).toBe(false); // unchanged
//     });
//
//     test('should add new users to the existing list', () => {
//         const newUsers: userDataType[] = [
//             {
//                 id: 4,
//                 photos: { small: null, large: null },
//                 followed: false,
//                 name: 'New User',
//                 status: 'I am new here',
//                 uniqueUrlName: null
//             }
//         ];
//         const newState = usersReducer(initialState, setUsersAC(newUsers));
//         expect(newState.users.length).toBe(4); // Checking the length of the users array
//         expect(newState.users[3].name).toBe('New User'); // Checking the details of the new user
//     });
//
//     test('should handle non-existing action', () => {
//         const newState = usersReducer(initialState, { type: "NON_EXISTING_ACTION" } as any);
//         expect(newState).toEqual(initialState); // Ensure state is unchanged on unknown action
//     });
// });
