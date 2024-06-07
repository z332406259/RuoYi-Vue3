<template>
  <div class="h-full flex-center">
    <div class="h-full w-25% flex-col items-center justify-between">
      <div class="box3 h-25% w-full">
        <TestBar1 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestBar2 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestBar3 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestRadar9 :barData="barData" />
      </div>
    </div>

    <div class="h-full w-25% items-center justify-between">
      <div class="box3 h-25% w-full">
        <TestBar4 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestBar5 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestBar6 :barData="barData" />
      </div>
      <div class="box3 h-25% w-full">
        <TestBar7 :barData="barData" class="h-full" />
      </div>
    </div>

    <div class="h-full w-25% items-center justify-between">
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full"></div>
    </div>
    <div class="h-full w-25% items-center justify-between">
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full"></div>
      <div class="box3 h-25% w-full" @click="click"></div>
    </div>
  </div>
</template>

<script setup>
import TestBar1 from '@/views/test/TestBar1.vue'
import TestBar2 from '@/views/test/TestBar2.vue'
import TestBar3 from '@/views/test/TestBar3.vue'
import TestRadar9 from '@/views/test/TestRadar9.vue'
import TestBar4 from '@/views/test/TestBar4.vue'
import TestBar5 from '@/views/test/TestBar5.vue'
import TestBar6 from '@/views/test/TestBar6.vue'
import TestBar7 from '@/views/test/TestBar7.vue'
import { ref } from 'vue'

const barData = [
  { name: '测试1', value: 111 },
  { name: '测试2', value: 222 },
  { name: '测试3', value: 333 },
  { name: '测试4', value: 444 },
  { name: '测试5', value: 555 },
  { name: '测试6', value: 666 }
]

const show = ref(false)
const click = () => {
  show.value = true
}
</script>
<style type="scss" scoped>
@import url('@/views/screen/ext/css/box.scss');
</style>
