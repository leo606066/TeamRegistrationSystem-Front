import { defineStore } from "pinia";

const userStore = defineStore(
    "user",
    () => {
        const userSession = reactive({
            user_id: -1
        })
    }, {
        persist: true;
    }
);

export default userStore;