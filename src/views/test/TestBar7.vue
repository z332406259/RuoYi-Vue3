<template>
  <b-chart ref="chart" @resize="resize" />
</template>

<script setup>
import { axisTooltip, categoryLessXAxis, categoryXAxis, valueYAxis } from '@/views/screen/ext/utils/echartsUtils'
import { onMounted, ref } from 'vue'
import { testChart6Icon1, testChart6Icon2 } from '@/views/screen/ext/utils/imageBase64'

const props = defineProps({
  barData: {
    type: Array,
    default: () => []
  }
})

const chart = ref()

const resize = ({ width, height }) => {
  console.log('宽度', width, '高度', height)
  const max = props.barData.reduce((pre, item) => {
    return pre > item.value ? pre : item.value
  }, 0)
  const option = {
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
        symbolSize: [57, '100%'],
        symbol: `image://${testChart6Icon1}`,
        data: props.barData.map((item) => {
          return {
            value: max
          }
        })
      },
      {
        type: 'pictorialBar',
        symbol: `image://${testChart6Icon2}`,
        symbolSize: [57, '100%']
      }
    ]
  }
  chart.value.setOption(option)
}

onMounted(() => {})
</script>
