<template>
  <div class="container">
    <el-menu
      class="top-nav"
      :default-active="activeMenu"
      mode="horizontal"
      :ellipsis="false"
      router>
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <div class="flex-grow" />
      <!-- <el-menu-item>
        <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </el-menu-item> -->
      <div class="flex-grow" />
      <el-menu-item index="/login">
        <span>登录</span>
      </el-menu-item>
      <el-menu-item index="/register">
        <span>注册</span>
      </el-menu-item>
      <!-- 添加其他菜单项 -->
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    activeMenu() {
      return this.$route.path; // 当前激活的路由路径
    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
.flex-grow {
  flex-grow: 1;
}
.top-nav {
  width: 100%; /* 导航栏宽度 */
}
</style>
