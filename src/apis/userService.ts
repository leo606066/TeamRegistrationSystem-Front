import request from "./request";
import { loginInfo, registerInfo, userSubmitInfo } from "../types/personalInfo";

export default class userService {
    static async login(data: loginInfo): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "post",
            url: "/api/login",
            data: data
        });
    }

    static async register(data: registerInfo): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "post",
            url: "/api/reg",
            data: data
        });
    }

    static async getBasicPersonalInformation(name: string): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "get",
            url: "/api/user/info",
            params: {
                name: name,
            },
        });
    }

    static async putBasicPersonalInformation(data: userSubmitInfo): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "put",
            url: "/api/user/info",
            data: data,
        });
    }

    static async uploadAvatar(data: FormData): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "multipart/form-data"
            },
            method: "post",
            url: "api/user/avatar",
            data: data,
        });
    }

    static async getMessage(): Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "get",
            url: "/api/user/message",
        });
    }
}