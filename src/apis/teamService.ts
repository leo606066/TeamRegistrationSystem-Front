import request from "./request";

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
            }
        });
    }
};