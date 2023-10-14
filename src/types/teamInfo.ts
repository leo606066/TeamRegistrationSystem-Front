import { userInfo } from "./personalInfo";

export interface teamInfo {
    id: number,
    team_name: string,
    captain_name: string,
    slogan: string,
    avatar: string,
    confirm: number,
    number: number,
}

export interface teamCompeleteInfo {
    id : number,
    team_name : string,
    signed : number,
    captain_name : string,
    slogan : string,
    avatar : string,
    confirm : number,
    number : number,
    users : userInfo[],
}