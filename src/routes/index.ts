import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../pages/Home/index.vue'),
    children: [
      // IMPORTANT: ROUTES HERE!!!!
      // {
      //   name: 'services',
      //   path: '/services',
      //   component: () => import('templateRemoteEntry/Services')
      // }
    ]
  }
]

const router = new VueRouter({ 
  mode: 'history',
  routes 
})

export default router