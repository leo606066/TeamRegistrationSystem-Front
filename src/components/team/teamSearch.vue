
<template>
  <div class="team-search">
    <h2 size="large">查询队伍</h2>
    <el-input
      v-model="teamData"
      placeholder="请输入团队名称或编号"
      class="search"
    >
      <template #append>
        <el-button @click="SearchTeam">
          <el-icon><Search /></el-icon>
        </el-button>
      </template>
    </el-input>
    <el-space size="large">
      <div v-for="team in teamList" >
        <el-card shadow="hover" @click="showTeamInfo(team.id)">
          <template #header>
              <div class="header">
                <div class="avatar">
                  <el-badge :value="team.confirm ? '已报名活动' : '未报名活动'" class="item" :type="team.confirm ? 'primary' : 'warning'">
                    <el-avatar :src="team.avatar"></el-avatar>
                  </el-badge>
                  &nbsp;
                  <el-text>{{ team.team_name }}</el-text>
                </div>
                &nbsp;
                &nbsp;
                <el-text size="small" type="info">{{ team.slogan }}</el-text>
              </div>
          </template>
          <el-icon><UserFilled /></el-icon><span>领队:{{ team.captain_name }}</span>
          &nbsp;
          &nbsp;
          <el-icon><Menu /></el-icon><span>人数:{{ team.number }}</span>
        </el-card>
      </div>
      <el-dialog v-model="dialogTableVisible" title="团队详情">
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
              <userProfileVue v-for="user in teamInfo?.users" :name="user.name" :avatar="user.avatar"/>
              <br />
              <br />
              <el-button type="primary" @click="">加入该团队</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import teamService from '../../apis/teamService';
  import { teamInfo } from '../../types/teamInfo';
  import { teamCompeleteInfo } from "../../types/teamInfo";

  const teamData = ref('');
  const teamList = ref<teamInfo[]>();
  const dialogTableVisible = ref(false);

  const SearchTeam = async () => {
    if (teamData.value === '') {
      ElMessage.error("请输入队伍信息");
    } else {
      const res = await teamService.getTeamInfo(teamData.value);
      console.log(res);
      if (res.data.code === 200) {
        if (res.data.msg === 'OK') {
          teamList.value = res.data.data.team_list;
          console.log(teamList);
        } else {
          ElMessage.error(res.data.msg);
        }
      }
    }
  }

  const showTeamInfo = (teamID : number) => {
    update(teamID);
    dialogTableVisible.value = true;
  }

  const teamInfo = ref<teamCompeleteInfo>();

  const update = async (ID : number) => {
    console.log("请求数据：获得团队完整信息", ID);
    const res = await teamService.getTeamCompeleteInfo(ID);
    console.log("请求成功，获得数据:", res);

    if (res.data.code === 200) {
        if (res.data.msg === 'ok') {
            const responseUserInfo = res.data.data.team_info;
            teamInfo.value = responseUserInfo;
            console.log("请求成功，获得数据:", responseUserInfo);
        } else {
            ElMessage.error(res.data.msg);
        }
    }
  }
</script>

<style scoped>
  .team-search {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .search {
    width: 250px;
  }
  .el-space {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-card {
    margin-top: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .avatar {
    display: flex;
    flex-direction: row;
  }
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