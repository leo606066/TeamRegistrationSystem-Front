
<template>
  <div class="team-search">
    <el-input
      v-model.trim="query"
      placeholder="请输入团队名称进行搜索"
      @keyup.enter.native="searchTeam"
      clearable
      :loading="searching"
      @clear="clearResults"
    />
    <el-button
      type="primary"
      icon="el-icon-search"
      :disabled="!query || searching"
      @click="searchTeam"
    >
      搜索
    </el-button>
    <div class="results" v-if="showResults">
      <h3>搜索结果：</h3>
      <ul>
        <li v-for="team in teams" :key="team.id">
          {{ team.name }}（{{ team.members.length }}人）
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import defineComponent from 'vue'


interface Team {
  id: number;
  name: string;
  members: string[];
}

const teams: Team[] = [
  { id: 1, name: '技术部', members: ['张三', '李四', '王五'] },
  { id: 2, name: '设计部', members: ['赵六', '钱七'] },
  { id: 3, name: '市场部', members: ['周八', '吴九', '郑十'] },
];

export default defineComponent({
  name: 'TeamSearch',
  components: { ElInput, ElButton },
  setup() {
    const query = ref('');
    const searching = ref(false);
    const teamsResult = ref<Team[]>([]);
    const showResults = ref(false);

    const searchTeam = () => {
      searching.value = true;
      // 模拟请求数据
      setTimeout(() => {
        const keyword = query.value.trim();
        teamsResult.value = teams.filter(
          (team) =>
            team.name.includes(keyword) ||
            team.members.some((member) => member.includes(keyword))
        );
        if (teamsResult.value.length > 0) {
          showResults.value = true;
        } else {
          ElMessage.warning('未找到符合条件的团队！');
        }
        searching.value = false;
      }, 1000);
    };

    const clearResults = () => {
      query.value = '';
      showResults.value = false;
      teamsResult.value = [];
    };

    return { query, searching, teams: teamsResult, showResults, searchTeam, clearResults };
  },
});
</script>

<style scoped>
.team-search {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.results {
  margin-top: 20px;
}
</style>