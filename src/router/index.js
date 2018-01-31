import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import giftList from '@/components/zcb/GiftList'
import registerMember from '@/components/zcb/RegisterMember'
import editorMember from '@/components/zcb/EditorMember'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/giftList',
      name: 'giftList',
      component: giftList
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
