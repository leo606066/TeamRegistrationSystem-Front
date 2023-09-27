import request from "./request";

export default class loginService {
    static async login(data: {
        account: string,
        password: string
    }) : Promise<any> {
        return request({
            "headers": {
                "content-Type": "application/json"
            },
            method: "post",
            url: "/api/user/login",
            data: data
        });
    }
}