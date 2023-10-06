<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'

  const registerFormRef = ref<FormInstance>()

  const validateName = (rule: any, value: any, callback: any) => {
    var NameRegularExpression = /^[0-9A-Za-z]{1,25}$/
    if (value === '') {
      callback(new Error('Please input the name'))
    } else {
      if (!NameRegularExpression.test(value)) {
        callback(new Error('Name is invalidated'))
      }
      callback()
    }
  }

  const validatePhone = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^1[3456789]\d{9}$/
    if (value === '') {
      callback(new Error('Please input the Phone number'))
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('Phone number is invalidated'))
      }
      callback()
    }
  }

  const validateEmail = (rule: any, value: any, callback: any) => {
    var EmailRegularExpression = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    if (value === '') {
      callback(new Error('Please input the E-mail address'))
    } else {
      if (!EmailRegularExpression.test(value)) {
        callback(new Error('E-mail address is invalidated'))
      }
      callback()
    }
  }

  const validatePass = (rule: any, value: any, callback: any) => {
    var PasswordRegularExpression = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z -~]{8,25}$/
    if (value === '') {
      callback(new Error('Please input the password'))
    } else if (!PasswordRegularExpression.test(value)) {
      callback(new Error('Password is invalidated'))
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
      { validator: validateName, trigger: 'blur' }
    ],
    phone:[
      { required: true, message: 'Phone is required' },
      { type: 'number', message: 'Phone must be a number' },
      { validator: validatePhone, trigger: 'blur' }
    ],
    email:[
      { required: true, message: 'E-mail is required' },
      { validator: validateEmail, trigger: 'blur' }
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

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
        // TODO: upload registration information to the backend
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
        <el-input v-model="registerForm.name" />
      </el-form-item>
      <el-form-item label="Phone" prop="phone">
        <el-input v-model.number="registerForm.phone" />
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="registerForm.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          autocomplete="off"
        />
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