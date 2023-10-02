<script setup lang="ts">
import { ref } from 'vue';
import router from "../routers";
import { Search } from '@element-plus/icons-vue';
import loginStore from '../stores/loginStore.ts';
import userStore from '../stores/userStore.ts';
import { storeToRefs } from 'pinia';

const newLoginStore = loginStore();
const newUserStore = userStore();
const { loginSession } = storeToRefs(newLoginStore);
const { userSession } = storeToRefs(newUserStore);

const input = ref('');

const pushToLogin = () => {
  router.push("/login");
};

const pushToRegister = () => {
  router.push("/register");
};
</script>

<template>
  <div class="container">
    <el-menu
      class="top-nav"
      :default-active="$route.path"
      mode="horizontal"
      :ellipsis="false"
      router
    >
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <div class="flex-grow" />
      <el-input
        v-model="input"
        placeholder="Search"
        class="search"
      >
        <template #append>
          <el-button>
            <el-icon><Search /></el-icon>
          </el-button>
        </template>
      </el-input>
      <div class="flex-grow" />
      <div v-show="!loginSession" :key="1" class="userStatus">
        <el-button type="primary" @click="pushToLogin" class="button">
          登录
        </el-button>
        <el-button type="primary" @click="pushToRegister" class="button">
          注册
        </el-button>
      </div>
      <div v-show="loginSession" :key="2" class="userStatus">
        <el-icon><Bell /></el-icon>
        &ensp;
        &ensp;
        &ensp;
        <el-avatar />
      </div>
      &ensp;
    </el-menu>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.flex-grow {
  flex-grow: 1;
}
.top-nav {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  width: 20%;
}
.userStatus {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
