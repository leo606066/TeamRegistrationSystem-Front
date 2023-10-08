<script setup lang="ts">

</script>

<template>
    <div>
        <img src="" alt="">
    </div>
    <el-card>
        性别：<input type="radio" name="gender">男
    <input type="radio" name="gender" checked>女
        <br><br>
        用户名：<input type="text"  placeholder="Username">
        <br><br>
        电话号码：<input type="text"  placeholder="Telephone Number">
        <br><br>
        邮箱账号：<input type="text"  placeholder="Your E-mail Number">
        <br><br>
        个性签名：<input type="text"  placeholder="Your motto">
        <br><br>
        输入原密码：<input type="password" placeholder="original password">
        <br><br>
        输入新密码：<input type="password" placeholder="密码">
        <br><br>
        确认新密码：<input type="password" placeholder="密码">
        <br><br>
        上传新头像：<input type="image">
    <br><br>
    </el-card>

</template>

<style scoped>
    div{
            text-align: center;
        }
    text{
            text-align: left;
    }
    


</style>
