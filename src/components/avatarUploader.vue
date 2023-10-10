<template>
  <el-upload
      ref="upload"
      class="upload-demo"
      :file-list="fileList"
      action="#"
      :limit="1"
      :on-change="handleChange"
      :on-remove="removeFile"
      :on-exceed="limitCheck"
      :auto-upload="false"
  >
      <template #trigger>
          <el-button type="primary">选择文件</el-button>
      </template>
      <el-button class="ml-3" type="success" @click="confirm">
          上传到服务器
      </el-button>
      <template #tip>
          <div class="el-upload__tip text-red">
              limit 5 file, new file will cover the old file
          </div>
      </template>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    const token = localStorage.getItem("token");
    return {
      // 上传附件
      fileList: [] as any[], // 使用 TypeScript 类型注解
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${token}`,
      },
    };
  },
  methods: {
    handleChange(file: any, fileList: any[]) { // 使用类型注解
      this.fileList = fileList;
    },
    limitCheck() {
      console.error('只能上传一次头像');
    },
    removeFile(file: any, fileList: any[]) {
      this.fileList = fileList;
    },
    confirm () {
      const param = new FormData();
      const token = localStorage.getItem("token");
      this.fileList.forEach((val) => {
        param.append('image', val.raw);
      });
      console.log(param);
      axios(`/api/user/avatar`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
        method: 'post',
        data: param,
      }).then((res) => {
        if (res.data.code === 200) {
          if (res.data.msg === 'ok') {
            console.log('上传成功');
            const Avatar = res.data.data.avatar;
            console.log(Avatar);
          } else {
            console.log(res.data.msg);
          }
        } else {
          console.error(res);
        }
      });
    },
  },
});
</script>