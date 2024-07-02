import axios from "axios";
import {ProfileType} from "../redux/profileReducer";
import {userDataType} from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "72046884-8665-4f22-8638-ad799be78564"
    }
})


export type AuthResponseType = {
    resultCode: number;
    messages: string[];
    data: {
        id: number;
        email: string;
        login: string;
    };
};


export const API = {
    getUsers: async (currentPage: number, pageSize: number) => {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    getUserProfile: async (userId: number) => {
        const res = await instance.get<ProfileType>(`profile/${userId}`);
        return res.data;
    },
    followUser: async (user: userDataType) => {
        const res = await instance.post(`follow/${user.id}`, {});
        return res.data;
    },
    unfollowUser: async (user: userDataType) => {
        const res = await instance.delete(`follow/${user.id}`);
        return res.data;
    },
    authMe: async () => {
        return await instance.get<AuthResponseType>(`auth/me`)
    }
}
