<script setup lang="ts">
  import HeaderVue from './components/header.vue';
  import FooterVue from './components/footer.vue';
  // import MenuVue from './components/menu.vue';
</script>

<template>
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

</style>
