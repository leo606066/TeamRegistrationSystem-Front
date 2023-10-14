<template>
    <el-scrollbar height="400px">
        <el-space direction="vertical">
            <el-card v-for="item in messages" shadow="hover" class="lists">
                {{ item.time }} : {{ item.information }}
            </el-card>
        </el-space>
    </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import userService from '../../apis/userService';
import { ElMessage } from 'element-plus';
import { userMessage } from '../../types/personalInfo';

const messages = ref<userMessage[]>();

onMounted(async () => {
    console.log("发送请求：获取消息通知");
    const res = await userService.getMessage();
    console.log("请求成功", res);
    if (res.data.code === 200) {
        if (res.data.msg === 'OK') {
            const responseData = res.data.data;
            messages.value = responseData.class_list;
        } else {
            ElMessage.error(res.data.msg);
        }
    }
});
</script>

<style scoped>
.lists {
    width: 100%;
}
</style>