import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Detail from '@/Detail'
import Kategori from '@/Kategori'
import TentangKami from '@/TentangKami'
import Search from '@/Search'

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
    {
      path: '/search/:parameter',
      name: 'Search',
      component: Search,
    },
    {
      path: '/tentangkami',
      name: 'TentangKami',
      component: TentangKami,
    },
  ]
})

export default router