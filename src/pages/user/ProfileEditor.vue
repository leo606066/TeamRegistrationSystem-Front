<template>
  <h3>更新个人信息</h3>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    :size="formSize"
    status-icon
  >
    <el-avatar :src="userSession.avatar" :size="100" style="margin-bottom: 20px;"></el-avatar>
    <el-form-item label="头像" prop="avatar">
      <el-button text @click="dialogTableVisible = true">点击上传新头像</el-button>
      <el-dialog v-model="dialogTableVisible" title="上传新头像">
        <avatarUploaderVue />
      </el-dialog>
    </el-form-item>
    <el-form-item label="昵称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="手机号码" prop="phone">
      <el-input v-model="ruleForm.phone" />
    </el-form-item>
    <el-form-item label="邮箱地址" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="出生日期" prop="birthday">
      <el-date-picker
          v-model="ruleForm.birthday"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
      />
    </el-form-item>
    <el-form-item label="居住地址" prop="address">
      <el-input v-model="ruleForm.address" />
    </el-form-item>
    <el-form-item label="个性签名" prop="motto">
      <el-input v-model="ruleForm.motto" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        更新个人信息
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import avatarUploaderVue from '../../components/user/avatarUploader.vue';

  import { reactive, ref, onMounted } from 'vue';
  import type { FormInstance, FormRules, ElMessage } from 'element-plus';
  import { userSubmitInfo } from '../../types/personalInfo';
  import userService from '../../apis/userService';
  import loginStore from '../../stores/loginStore.ts';
  import userStore from '../../stores/userStore.ts';
  import { storeToRefs } from 'pinia';

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

  const validateName = (rule: any, value: any, callback: any) => {
    var NameRegularExpression = /^[\w\s\u4E00-\u9FA5]{1,25}$/;
    if (value === '') {
      callback(new Error('请输入昵称'));
    } else {
      if (!NameRegularExpression.test(value)) {
        callback(new Error('昵称格式错误'));
      }
      callback();
    }
  }

  const validatePhone = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^1[3456789]\d{9}$/;
    if (value === '') {
      callback(new Error('请输入电话号码'));
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('电话号码格式错误'));
      }
      callback();
    }
  }

  const validateEmail = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    if (value === '') {
      callback(new Error('请输入电子邮箱'));
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('电子邮箱格式错误'));
      }
      callback();
    }
  }

  const rules = reactive<FormRules<userSubmitInfo>>({
    name:[
      { required: true, message: '请输入昵称' },
      { validator: validateName, trigger: 'blur' }
    ],
    phone:[
      { required: true, message: '请输入电话号码' },
      { validator: validatePhone, trigger: 'blur' }
    ],
    email:[
      { required: true, message: '请输入电子邮箱' },
      { validator: validateEmail, trigger: 'blur' }
    ],
    birthday: [
      {
        type: 'date',
        message: '请输入出生日期',
        required: true,
        trigger: 'change',
      },
    ],
    address: [
      { required: true, message: '请输入居住地址', trigger: 'blur' },
    ],
    motto: [
      { required: true, message: '请输入个人签名', trigger: 'blur' },
    ],
  });

  const uploadUserInfo = async () => {
    // console.log("请求数据：获得个人基本信息");
    const res = await userService.getBasicPersonalInformation(userSession.value.name);
    // console.log("请求成功，获得数据:", res);

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
    // console.log(ruleForm);
    // console.log("发送请求：修改个人信息");
    const res = await userService.putBasicPersonalInformation(ruleForm.value);
    // console.log("请求成功，获得数据", res);
    if (res.data.code === 200) {
      if (res.data.msg === "OK") {
        const newUserStore = userStore();
        newUserStore.setUserInfo({
          name : ruleForm.value.name,
          avatar : userSession.value.avatar,
        });
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