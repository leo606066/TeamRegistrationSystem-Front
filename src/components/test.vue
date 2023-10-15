<template>
    <div class="forgot-password">
      <h2>找回密码</h2>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendResetEmail">发送重置邮件</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  
  export default defineComponent({
    components: {
      ElForm,
      ElFormItem,
      ElInput,
      ElButton
    },
    data() {
      const form = ref({
        email: ''
      });
  
      const rules = ref({
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
      });
  
      return {
        form,
        rules
      };
    },
    methods: {
      sendResetEmail() {
        this.$refs.form.validate((valid: boolean) => {
          if (valid) {
            // TODO: 执行发送重置邮件的逻辑
            // 可以在这里发送请求等
            const resetInfo = {
              email: this.form.email
            };
  
            // 发送成功后，可以跳转到登录页面或展示提示信息
            console.log('重置邮件已发送', resetInfo);
          } else {
            console.log('表单校验失败');
          }
        });
      }
    }
  });
  </script>
  
  <style scoped>
  h2 {
    font-size: 20px;
  }
  </style>