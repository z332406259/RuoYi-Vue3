<template>
  <chart :option="option" :show="show" />
</template>

<script setup>
import { axisTooltip, categoryLessXAxis, categoryXAxis, valueYAxis } from '@/views/screen/ext/utils/echartsUtils'
import { useChartRef } from '@/views/screen/ext/hook/useChartRef'
import { computed } from 'vue'
import { testChart4Icon1, testChart4Icon2 } from '@/views/screen/ext/utils/imageBase64'

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
    xAxis: [
      {
        ...categoryXAxis(),
        splitLine: {
          show: false
        }
      },
      categoryLessXAxis
    ],
    yAxis: valueYAxis(),
    tooltip: {
      ...axisTooltip,
      formatter: (params) => {
        return `${params[0].data.name}<br/>${params[0].marker}${params[0].seriesName}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params[0].data.value}</b>`
      }
    },
    series: [
      {
        type: 'pictorialBar',
        xAxisIndex: 1,
        symbolSize: [35, '100%'],
        symbol: `image://${testChart4Icon1}`,
        data: props.barData.map((item) => {
          return {
            value: max
          }
        })
      },
      {
        type: 'pictorialBar',
        symbol: `image://${testChart4Icon2}`,
        symbolSize: [35, '100%']
      }
    ]
  }
})
</script>
