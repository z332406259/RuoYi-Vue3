<template>
  <chart :option="option" :init-option="{ renderer: 'canvas' }" :show="show" />
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
    series: [
      {
        shape: 'path://M23.003,0.006L46.009,40.004L-0.009,40.004L23.003,0.006Z',
        type: 'liquidFill',
        data: [0.6]
      }
    ]
  }
})
</script>
