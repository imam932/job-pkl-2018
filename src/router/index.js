import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    }
  ]
})

export default router