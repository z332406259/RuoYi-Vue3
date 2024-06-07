<template>
  <chart :option="option" :show="show" />
</template>

<script setup>
import { useChartRef } from '@/views/screen/ext/hook/useChartRef'
import { computed } from 'vue'

const props = defineProps({
  barData: {
    type: Array,
    default: () => []
  }
})

const { show } = useChartRef(() => props.barData)

const option = computed(() => {
  return {
    legend: {
      data: ['测试1', '测试2']
    },
    radar: {
      shape: 'circle',
      indicator: [
        { name: 'One', max: 100 },
        { name: 'Two', max: 100 },
        { name: 'Three', max: 100 },
        { name: 'Four', max: 100 },
        { name: 'Five', max: 100 },
        { name: 'Six', max: 100 }
      ]
    },
    series: [
      {
        name: '数据',
        type: 'radar',
        data: [
          {
            value: [42, 34, 21, 33, 11, 17],
            name: '测试1'
          },
          {
            value: [50, 10, 28, 26, 0, 3],
            name: '测试2'
          }
        ]
      }
    ]
  }
})
</script>
