import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VuxHome from '@/components/HelloFromVux'
import zcbIndex from '@/components/zcb/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vux',
      name: 'HelloWorldVux',
      component: VuxHome
    }, {
      path: '/zcb',
      name: 'ZcbIndex',
      component: zcbIndex
    }
  ]
})
