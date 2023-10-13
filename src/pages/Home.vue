<template>
  <TimeVue />
  <el-card>
    <template #header>
      <strong><span>争分夺秒吧！少年！</span></strong>

    </template>
    <ProfileVue name="艾斯比" avatar="http://47.115.209.120:8080/uploads/735a81af-9337-4d2b-80c0-dcc602bc06da.jpg" /><hr>
    <strong>拥有一颗奔腾的心！（没有毒鸡汤你让前端怎么活！！</strong>

  </el-card>
  <el-card>
    <el-text><Sentences /></el-text>
  </el-card>
</template>

<script setup lang="ts">
  import ProfileVue from '../components/user/profile.vue';
  import TimeVue from '../components/time.vue';
  import Sentences from '../components/sentences.vue';
</script>



<style scoped>
  .el-card {
    margin-bottom: 100px;
    margin-top: 50px;
  }
  .el-card:last-child {
    margin-bottom: 0;
  }
  .el-text{
    font:italic
  }

</style>
