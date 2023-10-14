<template>
  <el-upload v-model:file-list="fileList" drag action="#" :limit="1" :before-upload="beforeUpload" :auto-upload="false">
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
import teamService from '../../apis/teamService';

const fileList = ref<UploadUserFile[]>();
// 暂未实现
const beforeUpload = (file: File) => {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 / 1024 < 200;

  if (!isJPG) {
    ElMessage.error('只支持上传 JPG/PNG 格式的图片！');
  }
  if (!isLt2M) {
    ElMessage.error('文件大小不能超过 200KB！');
  }

  return isJPG && isLt2M;
};
// 手动上传(自定义上传服务)
const confirm = async () => {
  const param = new FormData();
  fileList.value?.forEach((val: any) => {
    param.append('image', val.raw);
  });
  fileList.value = [];
  const res = await teamService.uploadAvatar(param);
  console.log(res);
  if (res.data.code === 200) {
    if (res.data.msg === 'OK') {
      console.log('上传成功');
    } else {
      ElMessage.error(res.data.msg);
    }
  } else {
    console.error(res);
  }
}
</script>