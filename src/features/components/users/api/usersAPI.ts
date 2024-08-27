import {instance} from "../../../../common/instance/instance";
import {userData} from "../types";

export const usersAPI = {
    getUsers: async (currentPage: number, pageSize: number, term: string = '', friend: boolean | null = null) => {
        const res = await instance.get(`users`, {
            params: {
                page: currentPage,
                count: pageSize,
                term,
                friend
            }
        });
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