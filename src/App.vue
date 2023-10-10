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
  z-index: 2;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
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
