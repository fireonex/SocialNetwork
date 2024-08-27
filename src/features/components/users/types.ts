type userPhotos = {
    small: null | string;
    large: null | string;
};

export type userData = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: userPhotos;
    status: string | null;
    followed: boolean;
};

export type UsersFilters = {
    term: string;
    friend: boolean | null;
}

export type usersPage = {
    users: userData[];
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    filters: UsersFilters
};