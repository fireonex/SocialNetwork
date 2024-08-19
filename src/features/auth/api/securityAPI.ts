import {instance} from "../../../common/instance/instance";

export const securityAPI = {
    getCaptchaUrl: async () => {
        return await instance.get('security/get-captcha-url')
    }
}