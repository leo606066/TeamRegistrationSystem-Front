<script setup lang="ts">
  import HeaderVue from './components/header.vue';
  import FooterVue from './components/footer.vue';
</script>

<template>
  <div id="background"></div>
  <el-container>
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
.el-container {
  flex: 1;
}
.el-header {
  z-index: 1;
}
.el-main {
  z-index: 0;
}
</style>
