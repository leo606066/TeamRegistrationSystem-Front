<template>
  <el-upload
      v-model:file-list="fileList"
      drag
      action="#"
      :limit="1"
      :before-upload="beforeUpload"
      :auto-upload="false"
  >
    <template #trigger>
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
    </template>
    <el-button class="ml-3" type="success" @click="confirm">
        上传到服务器
    </el-button>
    <template #tip>
      <div class="el-upload__tip text-red">
        只能上传一个图片，传错请先点击右方按钮删除
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import type { UploadUserFile } from 'element-plus';
  import userService from '../../apis/userService';
  import userStore from '../../stores/userStore.ts';
import { storeToRefs } from 'pinia';

  const newUserStore = userStore();
  const { userSession } = storeToRefs(newUserStore);

  const fileList = ref<UploadUserFile[]>();

  const beforeUpload = (file: File) => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
      ElMessage.error('只支持上传 JPG/PNG 格式的图片！');
    }
    if (!isLt2M) {
      ElMessage.error('文件大小不能超过 2MB！');
    }
    
    if (isJPG && isLt2M) {

    }
    return false;
  };

  const confirm = async () => {
      const param = new FormData();
      fileList.value?.forEach((val : any) => {
        param.append('image', val.raw);
      });
      fileList.value = [];
      const res = await userService.uploadAvatar(param);
      if (res.data.code === 200) {
        if (res.data.msg === 'OK') {
          console.log('上传成功');
          const Avatar = res.data.data.avatar;
          userSession.value.avatar = Avatar;
        } else {
          console.log(res.data.msg);
        }
      } else {
        console.error(res);
      }
    }
</script>