<template>
    <div class="sidebar-menu">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleMenuSelect">
        <el-menu-item index="/unkown1">
            <i class="el-icon-location"></i>
            <span>所有团队</span>
        </el-menu-item>
        <el-menu-item index="/unkown2">
            <i class="el-icon-setting"></i>
            <span>我加入的团队</span>
        </el-menu-item>
        <el-menu-item index="/unkown3">
            <i class="el-icon-setting"></i>
            <span>我管理的团队</span>
        </el-menu-item>
        </el-menu>
    </div>
</template>
  
<script lang="ts">
//   import { defineComponent, reactive } from 'vue';
//   import { useRoute, useRouter } from 'vue-router';
  
//   export default defineComponent({
//     setup() {
//       const route = useRoute();
//       const router = useRouter();
//       const activeIndex = reactive(route.path);
  
//       function handleMenuSelect(index: string) {
//         activeIndex.value = index;
//         router.push(index);
//       }
  
//       return {
//         activeIndex,
//         handleMenuSelect
//       };
//     }
//   });
</script>
  
<style scoped>
  .sidebar-menu {
    width: 200px;
    padding-top: 20px;
  }
</style>