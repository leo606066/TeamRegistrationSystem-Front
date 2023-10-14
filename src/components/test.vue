<template>
    <h3>更新团队信息</h3>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" :size="formSize" status-icon>
      <el-avatar :src="userSession.avatar" :size="100" style="margin-bottom: 20px;"></el-avatar>
      <el-form-item label="头像" prop="avatar">
        <el-button text @click="dialogTableVisible = true">点击上传新头像</el-button>
        <el-dialog v-model="dialogTableVisible" title="上传新头像">
          <avatarUploaderVue />
        </el-dialog>
      </el-form-item>
      <el-form-item label="团队名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="团队成员" prop="member">
        <el-input v-model="ruleForm.member" />
      </el-form-item>
      <el-form-item label="口号" prop="slogan">
        <el-input v-model="ruleForm.slogan" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-date-picker v-model="ruleForm.password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          更新团队信息
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
//   import avatarUploaderVue from './user/avatarUploader.vue';
  
//   import { reactive, ref, onMounted } from 'vue';
//   import { FormInstance, FormRules, ElMessage } from 'element-plus';
//   import { userSubmitInfo } from '../../types/personalInfo';
//   import userService from '../../apis/userService';
//   import loginStore from '../../stores/loginStore.ts';
//   import userStore from '../../stores/userStore.ts';
//   import router from '../../routers';
//   import { storeToRefs } from 'pinia';
  
  const newLoginStore = loginStore();
  const newUserStore = userStore();
  const { loginSession } = storeToRefs(newLoginStore);
  const { userSession } = storeToRefs(newUserStore);
  
  const dialogTableVisible = ref(false);
  
  onMounted(() => {
    if (!loginSession) {
      ElMessage.error("请先登录");
      return;
    }
    uploadUserInfo();
  });
  
  const formSize = ref('default');
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = ref<userSubmitInfo>({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    address: '',
    motto: '',
  });
  
  const validateName = (value: any, callback: any) => {
    var NameRegularExpression = /^[\w\s\u4E00-\u9FA5]{1,25}$/;
    if (value === '') {
      callback(new Error('请输入团队名'));
    } else {
      if (!NameRegularExpression.test(value)) {
        callback(new Error('团队名格式错误'));
      }
      callback();
    }
  }
  
  const validate = (value: any, callback: any) => {
    var NameRegularExpression = /^[\w\s\u4E00-\u9FA5]{1,25}$/;
    if (value === '') {
      callback(new Error('请输入团队口号'));
    } else {
      if (!NameRegularExpression.test(value)) {
        callback(new Error('团队口号格式错误'));
      }
      callback();
    }
  }
  
  const rules = reactive<FormRules<userSubmitInfo>>({
    name: [
      { required: true, message: '请输入团队名' },
      { validator: validateName, trigger: 'blur' }
    ],
    motto: [
      { required: true, message: '请输入团队口号', trigger: 'blur' },
    ],
  });
  
  const uploadUserInfo = async () => {
    console.log("请求数据：获得团队基本信息");
    const res = await userService.getBasicPersonalInformation(userSession.value.name);
    console.log("请求成功，获得数据:", res);
  
    if (res.data.code === 200) {
      if (res.data.msg === 'OK') {
        const responseData = res.data.data.user_info;
        ruleForm.value.name = responseData.name;
        ruleForm.value.phone = responseData.phone;
        ruleForm.value.email = responseData.email;
        ruleForm.value.birthday = responseData.birthday;
        ruleForm.value.address = responseData.address;
        ruleForm.value.motto = responseData.motto;
      } else {
        ElMessage.error(res.data.msg);
      }
    }
  }
  
  const submit = async () => {
    console.log(ruleForm);
    console.log("发送请求：修改个人信息");
    const res = await userService.putBasicPersonalInformation(ruleForm.value);
    console.log("请求成功，获得数据", res);
    if (res.data.code === 200) {
      if (res.data.msg === "OK") {
        const newUserStore = userStore();
        newUserStore.setUserInfo({
          name: ruleForm.value.name,
          avatar: userSession.value.avatar,
        });
        ({
          message: "更新成功！",
          type: 'success',
        });
        router.push("/");
      } else {
        ElMessage.error(res.data.msg);
      }
    }
  }
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
      if (valid) {
        // console.log('submit!')
        submit();
      } else {
        // console.log('error submit!')
      }
    })
  }
  </script>