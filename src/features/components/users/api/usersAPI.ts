import {instance} from "../../../../common/instance/instance";
import {userData} from "../types";

export const usersAPI = {
    getUsers: async (currentPage: number, pageSize: number) => {
        const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    followUser: async (user: userData) => {
        const res = await instance.post(`follow/${user.id}`, {});
        return res.data;
    },
    unfollowUser: async (user: userData) => {
        const res = await instance.delete(`follow/${user.id}`);
        return res.data;
    },
}