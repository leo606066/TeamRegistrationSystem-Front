<template>
  <el-avatar :src="avatar" @click="showProfile"></el-avatar>
  <br />
  <el-text>{{ name }}</el-text>
  <el-dialog v-model="dialogTableVisible" title="个人资料">
    <div class="page">
      <div class="banner">
        <img src="../../assets/background.jpg" alt="Banner" />
      </div>
      <div class="content">
        <div class="profile">
          <img :src="userInfo.avatar" alt="Avatar" />
          <div class="name"> {{ userInfo.name }} </div>
          <div class="title"> {{ userInfo.motto }} </div>
        </div>
        <div class="description">
          <el-icon><Phone /></el-icon><el-text size="large"> {{ userInfo.phone }} </el-text>
          &nbsp;
          <el-icon><Message /></el-icon><el-text size="large"> {{ userInfo.email }} </el-text>
          &nbsp;
          <el-icon><HomeFilled /></el-icon><el-text size="large"> {{ userInfo.address }} </el-text>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
    import { ref, toRefs } from 'vue';
    import { ElMessage } from 'element-plus';
    import userService from '../../apis/userService';
    import { userCompeleteInfo } from '../../types/personalInfo';

    const props = defineProps<{ name: string, avatar: string }>();
    const { name, avatar } = toRefs(props);

    const dialogTableVisible = ref(false);
    const userInfo = ref<userCompeleteInfo>({
        user_id: 0,
        name: ' ',
        phone: ' ',
        email: ' ',
        birthday: ' ',
        address: ' ',
        motto: ' ',
        avatar: ' ',
    });

    const uploadUserInfo = async () => {
        console.log("请求数据：获得个人基本信息", name.value);
        const res = await userService.getBasicPersonalInformation(name.value);
        console.log("请求成功，获得数据:", res);

        if (res.data.code === 200) {
            if (res.data.msg === 'OK') {
                const responseUserInfo = res.data.data.user_info;
                userInfo.value = responseUserInfo;
            } else {
                ElMessage.error(res.data.msg);
            }
        }
    }

    const showProfile = () => {
        dialogTableVisible.value = true;
        uploadUserInfo();
    }
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
  }
  .banner img {
    width: 100%;
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
  .profile img {
    width: 150px; 
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    font-size: 24px;
    margin-top: 20px;
  }
  .title {
    font-size: 18px;
    color: #999;
    margin-top: 10px;
  }
  .description {
    max-width: 800px;
    margin: 30px auto;
    line-height: 30px;
    font-size: 16px;
  }
  .el-col {
    text-align: center;
  }
</style>