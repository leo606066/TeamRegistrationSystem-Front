<template>
  <div class="page">
    <div class="banner">
      <img src="../../assets/teamProfileBackground.jpg" alt="Banner" />
    </div>
    <div class="content">
      <div class="profile">
        <img :src="teamInfo?.avatar" alt="Avatar" />
        <div class="name"> {{ teamInfo?.team_name }} </div>
        <div class="title"> {{ teamInfo?.slogan }} </div>
      </div>
      <div class="description">
        <el-icon><UserFilled /></el-icon><span>领队:{{ teamInfo?.captain_name }}</span>
        &nbsp;
        <el-icon><Menu /></el-icon><el-text size="large"> {{ teamInfo?.number }} </el-text>
        <br />
        <br />
        <br />
        <userProfileVue v-for="user in teamInfo?.users" :name="user.name" :avatar="user.avatar"/>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
    import userProfileVue from "../user/profile.vue";

    import { ref, toRefs, onMounted } from 'vue';
    import { ElMessage } from 'element-plus';
    import teamService from "../../apis/teamService";
    import { teamCompeleteInfo } from "../../types/teamInfo";

    const props = defineProps<{ id : number }>();
    const { id } = toRefs(props);

    const teamInfo = ref<teamCompeleteInfo>();

    onMounted(async () => {
      console.log("请求数据：获得团队完整信息", id.value);
      const res = await teamService.getTeamCompeleteInfo(id.value);
      console.log("请求成功，获得数据:", res);

      if (res.data.code === 200) {
          if (res.data.msg === 'OK') {
              const responseUserInfo = res.data.data.team_info;
              teamInfo.value = responseUserInfo;
              console.log("请求成功，获得数据:", responseUserInfo);
          } else {
              ElMessage.error(res.data.msg);
          }
      }
    })
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