<template>
  <router-view />
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'

onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme)
  })
})
</script>
<style>
@font-face {
  font-family:'ff';
  src: url('@/views/screen/ext/font/ff.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family:'pm';
  src: url('@/views/screen/ext/font/pm.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family:'bb';
  src: url('@/views/screen/ext/font/bb.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family:'font236';
  src: url('@/views/screen/ext/font/font236.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family:'jcjxt';
  src: url('@/views/screen/ext/font/jcjxt.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 
</style>