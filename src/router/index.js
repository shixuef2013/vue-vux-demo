import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registerMember from '@/components/zcb/RegisterMember'
import editorMember from '@/components/zcb/editorMember'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/registerMember',
      name: 'registerMember',
      component: registerMember
    }, {
      path: '/editorMember',
      name: 'editorMember',
      component: editorMember
    }
  ]
})
