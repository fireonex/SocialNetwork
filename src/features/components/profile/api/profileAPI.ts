import {instance} from "../../../../common/instance/instance";
import {ProfileStructure} from "../types";


export const profileAPI = {
    getProfile: async (userId: number) => {
        const res = await instance.get<ProfileStructure>(`profile/${userId}`);
        return res.data;
    },
    getStatus: async (userId: number) => {
        const res = await instance.get(`profile/status/${userId}`)
        return res.data;
    },
    updateStatus: async (status: string) => {
        const res = await instance.put(`profile/status`, {status})
        return res.data;
    },
    updateProfilePhoto: async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);
        const res = await instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    },
    updateProfileInfo: async (profile: ProfileStructure) => {
        const res = await instance.put(`profile`, profile)
        return res.data;
    }
}