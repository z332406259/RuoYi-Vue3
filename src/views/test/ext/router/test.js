import router from '@/router'

const dev = import.meta.env.DEV
if (dev) {
  router.addRoute({
    path: '/css',
    name: '形变效果',
    component: () => import('@/views/test/TestCss.vue')
  })
  router.addRoute({
    path: '/testchart',
    name: 'chart',
    component: () => import('@/views/test/TestChart.vue')
  })
  router.addRoute({
    path: '/testgrip',
    name: 'grip',
    component: () => import('@/views/test/TestGrip.vue')
  })
  router.addRoute({
    path: '/testgrid',
    name: 'grid',
    component: () => import('@/views/test/TestGrid.vue')
  })
  router.addRoute({
    path: '/testgrid2',
    name: 'grid2',
    component: () => import('@/views/test/TestGrid2.vue')
  })
  router.addRoute({
    path: '/testRotate',
    name: 'rotate',
    component: () => import('@/views/test/TestRotate.vue')
  })
  router.addRoute({
    path: '/testScreen',
    name: 'screen',
    component: () => import('@/views/test/TestScreen.vue')
  })
  router.addRoute({
    path: '/testGis',
    name: 'gis',
    component: () => import('@/views/test/TestGis.vue')
  })
}
