<template>
  <div class="absolute-center size-100 bg-pink" style="">显示的是{{ list[0] }}</div>

  <div
    v-for="(item, index) in list"
    :key="item"
    :class="`absolute-center size-50 flex-center ${index == 0 ? 'bg-orange' : 'bg-cyan'}`"
    :style="`transform: rotateZ(${
      index >= 10 ? 324 : 36 * index
    }deg) translateY(200px);z-index:-${index};transition: all 1s ease;`"
  >
    {{ item }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = ref(new Array(100).fill(0).map((item, index) => index + 1))

setInterval(() => {
  list.value.shift()
}, 1000)
</script>

<style scoped></style>
