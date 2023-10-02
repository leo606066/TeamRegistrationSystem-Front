import { reactive } from "vue";
import { defineStore } from "pinia";
import { userInfo } from "../types/personalInfo"

const userStore = defineStore(
    "user",
    () => {
        const userSession = reactive({
            user_id: -1,
            name: "Not Logged In",
            avatarURL: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        });

        const setUserInfo = (info: userInfo) : void => {
            userSession.user_id = info.user_id;
            userSession.name = info.name;
            userSession.avatarURL = info.avatarURL;
        };

        return {
            userSession,
            setUserInfo,
        };
    }, {
        persist: true,
    }
);

export default userStore;