<script setup lang="ts">
  import HeaderVue from './components/header.vue';
  import FooterVue from './components/footer.vue';
</script>

<template>
  <el-container class="app">
    <el-header>
      <HeaderVue />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <FooterVue />
    </el-footer>
  </el-container>
</template>

<style scoped>
#background {
  /* 设置背景图片 */
  background-image: url('./assets/background.png');
  /* 设置背景颜色 */
  background-color: #f0f0f0;
  /* 设置背景大小和平铺方式 */
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
