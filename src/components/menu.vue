<template>
    <div class="container">
      <el-menu
        class="sidebar-menu"
        :default-active="activeMenu"
        :collapse="isCollapsed"
        router>
        <el-menu-item>
          <el-button class="sidebar-toggle" @click="toggleSidebar">
            <i :class="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          </el-button>
        </el-menu-item>
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-info"></i>
          <span>关于我们</span>
        </el-menu-item>
        <el-menu-item index="/products">
          <i class="el-icon-goods"></i>
          <span>产品列表</span>
        </el-menu-item>
        <!-- 添加其他菜单项 -->
      </el-menu>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        isCollapsed: false, // 侧栏折叠状态
      }
    },
    computed: {
      activeMenu() {
        return this.$route.path; // 当前激活的路由路径
      }
    },
    methods: {
      toggleSidebar() {
        // 切换侧栏折叠状态
        this.isCollapsed = !this.isCollapsed;
      }
    }
  });
  </script>
  
  <style scoped>
  .container {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  
  .sidebar-menu {
    width: 200px; /* 侧栏宽度 */
    height: 100vh; /* 侧栏高度 */
  }
  
  .sidebar-toggle {
    position: fixed;
  }
  </style>