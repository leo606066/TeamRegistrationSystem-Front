<script setup lang="ts">
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
</script>

<template>
  <el-text size="large" tag="b" type="info">Login your account</el-text>
  <br />
  <br />
  <el-card class="ep-bg-purple" >
    <el-row justify="center" :gutter="10">
      <el-col :span="50">
        <el-input
          v-model="username"
          placeholder="Username"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row justify="center" :gutter="10">
      <el-col :span="50">
        <el-input
          v-model="password"
          type="password"
          placeholder="Password"
          show-password
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row justify="end" :gutter="10">
        <el-link :underline="false" type="primary" href="/forgot">Forgot password</el-link>
    </el-row>
    <el-button type="primary">Login</el-button>
  </el-card>
  <el-card>
    <el-row justify="center" align="center" :gutter="20">
      <el-col :span="50">
        <el-text>
            New User?
            &nbsp
            <!-- <el-button type="primary">Register</el-button> -->
            <el-link :underline="false" type="primary" href="/register">Register</el-link>
        </el-text>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.el-card {
  margin-bottom: 10px;
}
.el-card:last-child {
  margin-bottom: 0;
}
.el-link {
    margin-top: -3.8px;
}
</style>