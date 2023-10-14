import { ref } from "vue";
import { defineStore } from "pinia";
import { userInfo } from "../types/personalInfo"

const userStore = defineStore(
    "user",
    () => {
        const userSession = ref({
            name: "Not Logged In",
            avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        });

        const setUserInfo = (info: userInfo): void => {
            userSession.value.name = info.name;
            userSession.value.avatar = info.avatar;
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