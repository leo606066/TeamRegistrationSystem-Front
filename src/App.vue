<script setup lang="ts">
  import HeaderVue from './components/header.vue';
  import FooterVue from './components/footer.vue';
  import MenuVue from './components/menu.vue';

  import loginStore from './stores/loginStore.ts';
  import { storeToRefs } from 'pinia';

  const newLoginStore = loginStore();
  const { loginSession } = storeToRefs(newLoginStore);

</script>

<template>
  <el-container>
    <el-header>
      <HeaderVue />
    </el-header>
    <el-container>
      <el-aside v-show="loginSession">
        <MenuVue />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <FooterVue />
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  flex: auto;
}
.el-header {
  z-index: 2;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.el-aside {
  z-index: 1;
  position: fixed;
  left: 2%;
}
.el-main {
  z-index: 1;
}
.el-footer {
  z-index: 0;
  position: absolute;
  left: 2%;
  right: 2%;
  bottom: 0;
}
</style>
