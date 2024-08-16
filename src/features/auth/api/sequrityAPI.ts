import {instance} from "../../../common/instance/instance";

export const sequrityAPI = {
    getCaptchaUrl: async () => {
        return await instance.get('security/get-captcha-url')
    }
}