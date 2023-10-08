<script setup lang="ts">
  import { ref } from 'vue';
  import router from '../routers/index';
  import userService from '../apis/userService';
  import loginStore from '../stores/loginStore';
  import userStore from '../stores/userStore';
  import { ElMessage } from 'element-plus'
  // import { storeToRefs } from 'pinia';
  // import { userInfo } from '../types/personalInfo';
  
  const newLoginStore = loginStore();
  const newUserStore = userStore();

  const account = ref('');
  const password = ref('');
  
  const login = async () => {

    const loginInfo = ref({
      account: account.value,
      password: password.value
    });

    console.log("发送请求：登录");
    const loginData = await userService.login(loginInfo.value);
    console.log("请求成功");
    console.log(loginData);

    if (loginData.data.code === 200) {
      if (loginData.data.msg === "登录成功") {
        const responseLoginData = loginData.data.data;
        const name = responseLoginData.name;
        const token = responseLoginData.token;
        localStorage.setItem("name", name);
        localStorage.setItem("token", token);
        ElMessage({
          message: "亲爱的" + name + "，欢迎回来！",
          type: 'success',
        });

        // 获取用户信息
        console.log("发送请求：获取用户信息");
        const UserData = await userService.getBasicPersonalInformation();
        console.log("请求成功");
        console.log(UserData);

        newLoginStore.setLogin(true);
        newUserStore.setUserInfo(UserData.data.data.user_info);
        router.push("/");
      } else {
        ElMessage.error(loginData.data.msg);
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