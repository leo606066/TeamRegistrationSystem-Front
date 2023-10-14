<template>
  <div class="current-time">
    {{ currentTime }}
  </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('');

const getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');
  currentTime.value = `${hour}:${minute}:${second}`;
};

let timerId: number;
onMounted(() => {
  getCurrentTime();
  timerId = setInterval(getCurrentTime, 1000);
  onUnmounted(() => {
    clearInterval(timerId);
  });
});
</script>
  
<style scoped>
.current-time {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 0px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>