
<template>
  <div class="team-search">
    <h2 size="large">查询队伍</h2>
    <el-input
      v-model="team_data"
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
      <el-card v-for="team in team_list" shadow="hover">
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
    </el-space>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import teamService from '../../apis/teamService';
  import { teamInfo } from '../../types/teamInfo';

  const team_data = ref('');
  const team_list = ref<teamInfo[]>();

  const SearchTeam = async () => {
    if (team_data.value === '') {
      ElMessage.error("请输入队伍信息");
    } else {
      const res = await teamService.getTeamInfo(team_data.value);
      console.log(res);
      if (res.data.code === 200) {
        if (res.data.msg === 'OK') {
          team_list.value = res.data.data.team_list;
          console.log(team_list);
        } else {
          ElMessage.error(res.data.msg);
        }
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
</style>