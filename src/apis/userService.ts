import request from "./request";
import { loginInfo, registerInfo } from "../types/personalInfo";

export default class userService {
    static async login(data: loginInfo) : Promise<any> {
        return request({
            "headers": {
                "content-Type": "application/json"
            },
            method: "post",
            url: "/login",
            data: data
        });
    }

    static async register(data: registerInfo) : Promise<any> {
        return request({
            "headers": {
                "content-Type": "application/json"
            },
            method: "post",
            url: "/reg",
            data: data
        });
    }

    static async getBasicPersonalInformation() : Promise<any> {
        return request({
            "headers": {
                "content-Type": "application/json"
            },
            method: "get",
            url: "/api/user/info",
        });
    }
}