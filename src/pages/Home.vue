<template>
  <el-container>
    <el-aside v-show="loginSession">
      
    </el-aside>
    <el-main>
      <el-card>
        <template #header>
          <span>关于我们</span>
        </template>
        <ProfileVue name="艾斯比" avatar="http://47.115.209.120:8080/uploads/674a32d1-760e-43cd-8f89-d65031649a18.jpg" />
      </el-card>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import ProfileVue from '../components/user/profile.vue';
  import loginStore from '../stores/loginStore.ts';
  import { storeToRefs } from 'pinia';

  const newLoginStore = loginStore();
  const { loginSession } = storeToRefs(newLoginStore);
</script>

<style scoped>
  .el-card {
    margin-bottom: 10px;
  }
  .el-card:last-child {
    margin-bottom: 0;
  }
</style>
