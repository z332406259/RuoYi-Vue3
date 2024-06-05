<template>
  <div>
    <div class="size-200 flex flex-wrap justify-evenly">
      <RouterLink to="/testchart" v-if="dev">
        <el-button type="primary">测试图表</el-button>
      </RouterLink>
      <RouterLink to="/css" v-if="dev">
        <el-button type="primary">测试c3效果</el-button>
      </RouterLink>
      <RouterLink to="/testgrip" v-if="dev">
        <el-button type="primary">测试grip效果</el-button>
      </RouterLink>
      <RouterLink to="/testgrid" v-if="dev">
        <el-button type="primary">测试grid效果</el-button>
      </RouterLink>
      <RouterLink to="/testgrid2" v-if="dev">
        <el-button type="primary">测试grid2效果</el-button>
      </RouterLink>

      <RouterLink to="/testRotate" v-if="dev">
        <el-button type="primary">测试旋转效果</el-button>
      </RouterLink>

      <RouterLink to="/testScreen" v-if="dev">
        <el-button type="primary">测试屏幕</el-button>
      </RouterLink>

      <Weather v-if="dev" />

      <div v-if="dev">{{ number }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import Weather from '@/views/logic/ext/components/Weather.vue'
// import { useNumberAnimation } from '@/views/logic/ext/hook/useNumberAnimation.js'
// import { findStar, addStar, findStarMatch, addStarMatch } from '@/views/logic/ext/api/index'

const dev = import.meta.env.DEV

const number = ref('0')
useNumberAnimation({
  from: 0,
  to: 30000,
  duration: 4000,
  onProgress: (v) => {
    number.value = v.toFixed(2)
  }
})
// const stars = ['白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯', '水瓶', '双鱼']
// // const stars = ['白羊']
// for (let i = 0; i < stars.length; i++) {
//   const item1 = stars[i]
//   for (let j = 0; j < stars.length; j++) {
//     const item2 = stars[j]
//     const res = await findStarMatch(item1, item2)
//     console.log('结果', res)
//     await addStarMatch(res.data)
//   }
// }
</script>

<style scoped lang="scss"></style>
