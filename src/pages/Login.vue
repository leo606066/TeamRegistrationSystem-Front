<script setup lang="ts">
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
</script>

<template>
  <el-card class="ep-bg-purple" >
    <el-row>
      <el-col :span="50">
        <el-input
          v-model="username"
          placeholder="Please input your username"
          clearable />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="50">
        <el-input
          v-model="password"
          type="password"
          placeholder="Please input your password"
          show-password
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="50">
        <el-button type="primary">Register</el-button>
        <el-button type="success">Login</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>
