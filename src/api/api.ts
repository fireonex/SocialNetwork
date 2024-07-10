import axios from "axios";
import {ProfileType} from "../redux/profileReducer";
import {userDataType} from "../redux/usersReducer";
import {LoginFormDataType} from "../components/login/LoginForm";


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


export const usersAPI = {
    getUsers: async (currentPage: number, pageSize: number) => {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    getUserProfile: async (userId: number) => {
        // const res = await instance.get<ProfileType>(`profile/${userId}`);
        // return res.data;
        console.warn('Outdated method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
    followUser: async (user: userDataType) => {
        const res = await instance.post(`follow/${user.id}`, {});
        return res.data;
    },
    unfollowUser: async (user: userDataType) => {
        const res = await instance.delete(`follow/${user.id}`);
        return res.data;
    },

}

export const profileAPI = {
    getProfile: async (userId: number) => {
        const res = await instance.get<ProfileType>(`profile/${userId}`);
        return res.data;
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    authMe: async () => {
        return await instance.get<AuthResponseType>(`auth/me`)
    },
    login: async (formData: LoginFormDataType) => {
        const res = await instance.post(`auth/login`, formData);
        return res.data;
    }
}