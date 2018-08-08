import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Detail from '@/Detail'
import Kategori from '@/Kategori'

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
    },
    {
      path: '/kategori/:kategori',
      name: 'Kategori',
      component: Kategori,
    },
  ]
})

export default router