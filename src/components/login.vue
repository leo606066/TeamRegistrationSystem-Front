<script setup lang="ts">
  import { ref } from 'vue';
  import userService from '../apis/userService';
  import loginStore from '../stores/loginStore.ts';
  import userStore from '../stores/userStore.ts';
  import { storeToRefs } from 'pinia';

  
  const newLoginStore = loginStore();
  const newUserStore = userStore();
  const { loginSession } = storeToRefs(newLoginStore);

  const account = ref('');
  const password = ref('');
  
  const login = async () => {
    const loginInfo = ref({
      account: account.value,
      password: password.value
    });

    console.log("发送请求");
    const res = await userService.login(loginInfo.value);
    console.log("请求成功");
    console.log(res);

    if (res.data.code === 200) {
      if (res.data.msg === "登录成功") {
        const responseData = res.data.data;
        const name = responseData.name;
        const Token = responseData.Token;
        localStorage.setItem("name", name);
        localStorage.setItem("Token", Token);
        console.log(name + "登录成功,Token:" + Token);
      } else {
        console.log(res.data.msg);
      }
    }
  }
</script>

<template>
  <el-card>
    <el-row justify="center" :gutter="10">
      <el-col :span="50">
        <el-input
          v-model="account"
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
    <!-- <el-row justify="end" :gutter="10">
        <el-link :underline="false" type="primary" href="/forgot">Forgot password</el-link>
    </el-row> -->
    <el-button type="primary" @click="login">登录</el-button>
  </el-card>
  <el-card>
    <el-row justify="center" align="center" :gutter="20">
      <el-col :span="50">
        <el-text>
            New User?
            &nbsp
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