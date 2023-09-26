<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'

  const registerFormRef = ref<FormInstance>()

  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (registerForm.repassword !== '') {
        if (!registerFormRef.value) return
        registerFormRef.value.validateField('repassword', () => null)
      }
      callback()
    }
  }
  
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== registerForm.password) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }

  const registerForm = reactive({
    name: '',
    phone: '',
    email: '',
    password: '',
    repassword: '',
  })

  const rules = reactive<FormRules<typeof registerForm>>({
    name:[
      { required: true, message: 'Name is required' },
    ],
    phone:[
      { required: true, message: 'Phone is required' },
      { type: 'number', message: 'Phone must be a number' },
    ],
    email:[
      { required: true, message: 'E-mail is required' },
    ],
    password: [
      { required: true, message: 'Password is required' },
      { validator: validatePass, trigger: 'blur' }
    ],
    repassword: [
      { required: true, message: 'Retry password is required' },
      { validator: validatePass2, trigger: 'blur' }
    ],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>

<template>
  <el-card class="ep-bg-purple" >
    <el-text size="large" tag="b" type="info">Register new account</el-text>
  <br />
    <el-icon size="150px"><Avatar /></el-icon>
    <el-form
      ref="registerFormRef"
      :model="registerForm"
      status-icon
      :rules="rules"
      label-width="70px"
      class="Register"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model.number="registerForm.name" />
      </el-form-item>
      <el-form-item label="Phone" prop="phone"
        :rules="rules"
      >
        <el-input v-model.number="registerForm.phone" />
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model.number="registerForm.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
        v-model="registerForm.password"
        type="password"
        autocomplete="off" />
      </el-form-item>
      <el-form-item label="Confirm" prop="repassword">
        <el-input
          v-model="registerForm.repassword"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(registerFormRef)">Sign up</el-button>
        <el-button @click="resetForm(registerFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <el-row justify="center" align="center" :gutter="20">
      <el-col :span="50">
        <el-text>
            Already have an account?
            &nbsp
            <el-link :underline="false" type="primary" href="/login">Login</el-link>
        </el-text>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.el-card {
  margin-bottom: 10px;
}
.el-card:last-child {
  margin-bottom: 0;
}
.el-link {
    margin-top: -3.6px;
}
</style>