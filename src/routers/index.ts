import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../pages/Home.vue";
import LoginVue from "../pages/Login.vue";
import RegisterVue from "../pages/Register.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeVue
    },
    {
        path: "/login",
        name: "Login",
        component: LoginVue
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;

