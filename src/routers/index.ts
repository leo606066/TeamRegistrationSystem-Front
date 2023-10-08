import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../pages/Home.vue";
import LoginVue from "../pages/Login.vue";
import RegisterVue from "../pages/Register.vue";
import ProfileVue from "../pages/Profile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeVue,
        meta: {
          title: '首页',
        },
    },
    {
        path: "/login",
        name: "Login",
        component: LoginVue,
        meta: {
          title: '用户登录',
        },
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterVue,
        meta: {
          title: '用户注册',
        },
    },
    {
        path: "/profile",
        name: "Profile",
        component: ProfileVue,
        meta: {
          title: '个人首页',
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;

