import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VuxHome from '@/components/HelloFromVux'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/vux',
      name: 'HelloWorld',
      component: VuxHome
    }
  ]
})
