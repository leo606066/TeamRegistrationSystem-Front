<template>
  <el-card>
    <template #header>
      <span>关于我们</span>
    </template>
    <ProfileVue name="艾斯比" avatar="http://47.115.209.120:8080/uploads/674a32d1-760e-43cd-8f89-d65031649a18.jpg" />
  </el-card>
  <el-card>
    
  </el-card>
</template>

<script setup lang="ts">
  import ProfileVue from './user/profile.vue';
</script>

<style scoped>
  .el-card {
    margin-bottom: 10px;
  }
  .el-card:last-child {
    margin-bottom: 0;
  }
</style>
