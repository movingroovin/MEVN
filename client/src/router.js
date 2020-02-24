import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home'),
      children: [
        {
          path: 'About',
          component: () => import('./views/About/Home')
        },
        {
          path: 'News',
          component: () => import('./views/News/Home')
        },
        {
          path: 'Product',
          component: () => import('./views/Product/Home')
        },
        {
          path: 'FAQ',
          component: () => import('./views/FAQ/Home')
        },
        {
          path: 'Contact',
          component: () => import('./views/Contact/Home')
        }
      ]
    },
    {
      path: '*', // 不符 vue route 列舉的 url 都回到 home
      component: () => import('./views/Home')
    }
  ]
})