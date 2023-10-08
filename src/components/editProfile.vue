<script lang="ts" setup>
  import { reactive, ref, onMounted } from 'vue'
  import type { FormInstance, FormRules, ElMessage } from 'element-plus'
  import { userCompeleteInfo } from '../types/personalInfo'
  import userService from '../apis/userService'

  onMounted(() => {
    uploadUserCompeleteInfo();
  });

  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = ref<userCompeleteInfo>({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    address: '',
    motto: '',
  });

  const validateName = (rule: any, value: any, callback: any) => {
    var NameRegularExpression = /^[\w\s\u4E00-\u9FA5]{1,25}$/
    if (value === '') {
      callback(new Error('请输入昵称'))
    } else {
      if (!NameRegularExpression.test(value)) {
        callback(new Error('昵称格式错误'))
      }
      callback()
    }
  }

  const validatePhone = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^1[3456789]\d{9}$/
    if (value === '') {
      callback(new Error('请输入电话号码'))
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('电话号码格式错误'))
      }
      callback()
    }
  }

  const validateEmail = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    if (value === '') {
      callback(new Error('请输入电子邮箱'))
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('电子邮箱格式错误'))
      }
      callback()
    }
  }

  const rules = reactive<FormRules<userCompeleteInfo>>({
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
  })

  const uploadUserCompeleteInfo = async () => {
    // console.log("请求数据：获得个人基本信息");
    const res = await userService.getBasicPersonalInformation();
    // console.log("请求成功，获得数据:", res);

    if (res.data.code === 200) {
      if (res.data.msg === 'OK') {
        const responseData = res.data.data.user_info;
        ruleForm.value.name = responseData.name
        ruleForm.value.phone = responseData.phone
        ruleForm.value.email = responseData.email
        ruleForm.value.birthday = responseData.birthday
        ruleForm.value.address = responseData.address
        ruleForm.value.motto = responseData.motto
      } else {
        ElMessage.error(res.data.msg);
      }
    }
  }

  const submit = async () => {
    // console.log(ruleForm);
    // console.log("发送请求");
    const res = await userService.putBasicPersonalInformation(ruleForm.value);
    // console.log("请求成功，获得数据", res);
    if (res.data.code === 200) {
      if (res.data.msg != "OK") {
        ElMessage.error(res.data.msg);
      }
    }
  }
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        submit();
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<template>
  <h3>更新个人信息</h3>
  <br />
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    :size="formSize"
    status-icon
  >
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
          label="Pick a date"
          placeholder="Pick a date"
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