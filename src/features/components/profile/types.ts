export type postData = {
    id: string
    post: string
    likesCount: number
}

export type ProfileStructure = {
    userId: number;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: Contacts;
    photos: Photos;
};

export type Contacts = {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
};

export type Photos = {
    small: string | undefined;
    large: string | undefined;
};

export type profilePage = {
    messagesData: postData[]
    //newPostText: string,
    profile: ProfileStructure | null
    status: string
}