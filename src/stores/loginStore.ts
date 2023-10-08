import { ref } from "vue";
import { defineStore } from "pinia";

const loginStore = defineStore(
    "login",
    () => {
        const loginSession = ref(false)
        const setLogin = (loginNewSession : boolean) => {
            loginSession.value = loginNewSession;
        };

        return {
            loginSession,
            setLogin,
        }
    }, {
        persist: true,
    }
);

export default loginStore;