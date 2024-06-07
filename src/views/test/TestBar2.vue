<template>
  <chart :option="option" :show="show" />
</template>

<script setup>
import { axisTooltip } from '@/views/screen/ext/utils/echartsUtils'
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
  const max = props.barData.reduce((pre, item) => {
    return pre > item.value ? pre : item.value
  }, 0)
  return {
    dataset: {
      source: props.barData
    },
    grid: {
      top: '15%',
      bottom: '0%',
      left: '0%',
      right: '0%',
      containLabel: true
    },
    polar: {
      radius: [30, '80%']
    },
    radiusAxis: {
      max
    },
    angleAxis: {
      type: 'category',
      startAngle: 75
    },
    tooltip: {
      ...axisTooltip,
      formatter: (params) => {
        return `${params[0].data.name}<br/>${params[0].marker}${params[0].seriesName}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params[0].data.value}</b>`
      }
    },
    series: [
      {
        type: 'bar',
        coordinateSystem: 'polar'
      }
    ]
  }
})
</script>
