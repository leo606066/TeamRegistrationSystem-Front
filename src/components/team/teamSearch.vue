
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
        <teamInfoVue :id="currentID"/>
      </el-dialog>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import teamService from '../../apis/teamService';
  import { teamInfo } from '../../types/teamInfo';
  import teamInfoVue from './profile.vue';

  const teamData = ref('');
  const teamList = ref<teamInfo[]>();
  const dialogTableVisible = ref(false);
  const currentID = ref(0);

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
    currentID.value = teamID;
    dialogTableVisible.value = true;
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
</style>