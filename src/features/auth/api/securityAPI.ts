import {instance} from "../../../common/instance/instance";

export const securityAPI = {
    getCaptchaUrl: async () => {
        const res = await instance.get('security/get-captcha-url')
        return res.data
    }
}