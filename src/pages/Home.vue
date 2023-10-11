<template>
  <TimeVue />
  <el-card>
    <template #header>
      <strong><span>争分夺秒吧！少年！</span></strong>

    </template>
    <ProfileVue name="艾斯比" avatar="http://47.115.209.120:8080/uploads/674a32d1-760e-43cd-8f89-d65031649a18.jpg" /><hr>
    一颗奔腾的心！（没有毒鸡汤你让前端怎么活！！

  </el-card>
</template>

<script setup lang="ts">
  import ProfileVue from '../components/user/profile.vue';
  import TimeVue from '../components/user/time.vue';
</script>

<style scoped>
  .el-card {
    margin-bottom: 10px;
  }
  .el-card:last-child {
    margin-bottom: 0;
  }

</style>
