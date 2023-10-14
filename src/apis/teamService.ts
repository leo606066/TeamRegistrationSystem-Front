import request from "./request";
import { teamPermission } from "../types/teamInfo";

export default class teamService {
    static async getTeamInfo(team_data : string) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "get",
            url: "/api/team",
            params: {
                team_data : team_data,
            },
        });
    }
    static async getTeamCompeleteInfo(id : number) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "get",
            url: "/api/team/info",
            params: {
                id : id,
            },
        });
    }
    static async joinTeam(data : teamPermission) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "post",
            url: "/api/team",
            data: data,
        });
    }
    static async quitTeam(id : number) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "delete",
            url: "/api/team",
            params: {
                id : id,
            },
        });
    }
    static async delTeam(id : number) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "delete",
            url: "/api/team/delete",
            params: {
                id : id,
            },
        });
    }
    static async putSignIn(id : number) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "put",
            url: "/api/team/submit",
            params: {
                id : id,
            },
        });
    }
    static async putSignOut(id : number) : Promise<any> {
        return request({
            "headers": {
                "Content-Type": "application/json"
            },
            method: "put",
            url: "/api/team/cancel",
            params: {
                id : id,
            },
        });
    }
};