import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home')
    },
    {
      path: '/About',
      component: () => import('./views/About/Home')
    },
    {
      path: '/News',
      component: () => import('./views/News/Home')
    },
    {
      path: '/Product',
      component: () => import('./views/Product/Home')
    },
    {
      path: '/FAQ',
      component: () => import('./views/FAQ/Home')
    },
    {
      path: '/Contact',
      component: () => import('./views/Contact/Home')
    },
    {
      path: '/Register',
      component: () => import('./views/User/Register'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Login',
      component: () => import('./views/User/Login'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Profile',
      component: () => import('./views/User/Profile'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*', // 不符 vue route 列舉的 url 都回到 home
      component: () => import('./views/Home')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/Login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/Profile')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router