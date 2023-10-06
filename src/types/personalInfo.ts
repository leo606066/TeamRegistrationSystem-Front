export interface loginInfo {
    account: string,
    password: string,
}

export interface registerInfo {
    name: string,
    phone: string,
    email: string,
    password: string,
    repassword: string,
}

export interface userInfo {
	user_id: number,
    name: string,
    avatarURL: string,
}