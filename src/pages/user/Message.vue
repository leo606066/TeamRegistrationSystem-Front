<template>
    <el-space size="large">
        <div>
            <el-card shadow="hover">
                hello
            </el-card>
        </div>
    </el-space>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import userService from '../../apis/userService';
import { ElMessage } from 'element-plus';

onMounted(async () => {
    console.log("发送请求：获取消息通知");
    const res = await userService.getMessage();
    console.log("请求成功", res);
    if (res.data.code === 200) {
        if (res.data.msg === 'ok') {

        } else {
            ElMessage.error(res.data.msg);
        }
    }
}),
</script>

<style scoped></style>