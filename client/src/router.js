import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home')
    },
    {
      path: '*', // 不符 vue route 列舉的 url 都回到 home
      component: () => import('./views/Home')
    }
  ]
})