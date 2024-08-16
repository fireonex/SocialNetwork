
import {instance} from "../../../common/instance/instance";
import {LoginFormData} from "../types";


type AuthResponse = {
    resultCode: number;
    messages: string[];
    data: {
        id: number;
        email: string;
        login: string;
    };
};


export const authAPI = {
    authMe: async () => {
        return await instance.get<AuthResponse>(`auth/me`)
    },
    login: async (formData: LoginFormData) => {
        const res = await instance.post<AuthResponse>("auth/login", {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha
        });
        return res.data;
    },
    logout: async () => {
        const res = await instance.delete(`auth/login`);
        return res.data;
    }
}