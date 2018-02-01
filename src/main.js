// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import {BusPlugin} from 'vux'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'

Vue.use(BusPlugin)
Vue.use(Vuex)
// Vue.use(VueRouter)
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
