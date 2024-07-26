<template>
  <div>
    <!-- 确保图片路径有效 -->
    <img :src="imageSrc" alt="User Image" v-if="imageSrc" />
    <img :src="logoUrl" alt="Logo">
    <!-- <el-button type="primary"></el-button> -->
    <aaa></aaa>
    <!-- <meetry></meetry> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import aaa from '@/views/try.vue'
// import meetry from '@/views/meetry.vue'


import { dataaa } from '@/api/tryApi.js'; // 确保路径正确

const imageSrc = ref('');
let logoUrl = 'http://localhost:5173/images/admin/admin.gif';

onMounted(async () => {
  try {
    const response = await dataaa();
    if (response.data && response.data.length > 0) {
      // 设置图片路径
      imageSrc.value = response.data[0].image;
      console.log(imageSrc.value)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
/* 添加样式（如有需要） */
</style>
