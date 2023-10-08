<script setup lang="ts">
  import HeaderVue from './components/header.vue';
  import FooterVue from './components/footer.vue';
</script>

<template>
  <el-container class="app">
    <el-header>
      <HeaderVue :style="{ zIndex: 1 }" />
    </el-header>
    <el-main>
    <router-view :style="{ zIndex: 0 }"/>
    </el-main>
    <el-footer>
      <FooterVue :style="{ zIndex: 0 }"/>
    </el-footer>
  </el-container>
</template>

<style scoped>

</style>
