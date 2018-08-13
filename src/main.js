// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMoment from 'vue-moment'
// import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Axios from 'axios'
import VueProgressiveImage from 'vue-progressive-image'
import '@/assets/css/bootstrap-3.1.1.min.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/style.css'
import '@/assets/css/mystyle.css'
import '@/assets/css/banner.css'

import '@/assets/js/jquery.min.js'
import '@/assets/js/move-top.js'
import '@/assets/js/bootstrap-3.1.1.min.js'
import '@/assets/js/banner.js'


// Vue.use(BootstrapVue)
Vue.use(VueResource);
Vue.use(VueProgressiveImage)
Axios.defaults.baseURL = 'http://localhost:8000/'
Vue.config.productionTip = false
const moment = require('moment')
require('moment/locale/id')
Vue.use(VueMoment, {
  moment
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})