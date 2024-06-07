import 'normalize.css'
import 'uno.css'
import ECharts from 'vue-echarts'
import 'echarts-liquidfill'
import vue3SeamlessScroll from 'vue3-seamless-scroll'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

import '@/views/test/ext/router/test'
// import '@/views/match/ext/router/match'
// import '@/views/screen/ext/router/chart'
// import '@/views/logic/ext/store/version'
// import '@/views/logic/ext/store/chart'
// import logic from '@/views/logic/ext/directive/logic'
// import Chart from '@/views/screen/ext/components/Chart.vue'
// import BaseChart from '@/views/screen/ext/components/BaseChart.vue'
// import ZTable from '@/views/logic/ext/components/ZTable.vue'
// import ZForm from '@/views/logic/ext/components/ZForm.vue'

export default function installPlugins(app) {
  app.component('v-chart', ECharts)
  // app.component('chart', Chart)
  // app.component('b-chart', BaseChart)

  // app.component('z-table', ZTable)
  // app.component('z-form', ZForm)
  // app.use(logic)
  app.use(vue3SeamlessScroll)
  app.use(Particles, {
    init: async (engine) => {
      await loadFull(engine)
    }
  })

  app.config.errorHandler = (err, instance, info) => {
    // 处理错误，例如：报告给一个服务\
    console.error(err, instance, info)
  }

  window._AMapSecurityConfig = {
    securityJsCode: '22479f9f04fc0247933c6633cf463059'
  }
}
