
import {instance} from "../../../../common/instance/instance";
import {ProfileStructure} from "../types";

export const profileAPI = {
    getProfile: async (userId: number) => {
        const res = await instance.get<ProfileStructure>(`profile/${userId}`);
        return res.data;
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    },
    updateProfilePhoto: (file: File) => {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProfileInfo: (profile: ProfileStructure) => {
        return instance.put(`profile`, profile)
    }
}