<template>
  <chart :option="option" :show="show" />
</template>

<script setup>
import { axisTooltip, categoryXAxis, valueYAxis } from '@/views/screen/ext/utils/echartsUtils'
import { useChartRef } from '@/views/screen/ext/hook/useChartRef'
import { computed } from 'vue'
import { testChart1Icon1, testChart1Icon2 } from '@/views/screen/ext/utils/imageBase64'

const props = defineProps({
  barData: {
    type: Array,
    default: () => []
  }
})

const { show } = useChartRef(() => props.barData)

const option = computed(() => {
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
      }
    ],
    yAxis: valueYAxis(),
    tooltip: {
      ...axisTooltip,
      formatter: (params) => {
        return `${params[0].data.name}<br/>${params[0].marker}${params[0].seriesName}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params[0].data.value}</b>`
      }
    },
    visualMap: {
      type: 'piecewise',
      show: true,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 1)'
        }
      ]
    },
    series: [
      {
        type: 'pictorialBar',
        symbol: `image://${testChart1Icon1}`,
        symbolSize: [30, '100%'],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }, { xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }]
        },
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          },
          data: [
            [
              {
                xAxis: '测试1'
              },
              {
                xAxis: '测试3'
              }
            ]
          ]
        }
      },
      {
        symbolPosition: 'end',
        type: 'pictorialBar',
        symbol: `image://${testChart1Icon2}`,
        symbolSize: [30, 17],
        symbolOffset: [0, -17]
      }
    ]
  }
})
</script>
