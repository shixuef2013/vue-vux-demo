import Vue from 'vue'
import Router from 'vue-router'
import bmapComp from '@/components/zcb/BMapComponent'
import giftList from '@/components/zcb/GiftList'
import giftPay from '@/components/zcb/Pay'
import registerMember from '@/components/zcb/RegisterMember'
import editorMember from '@/components/zcb/EditorMember'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'bmapComp',
      component: bmapComp
    }, {
      path: '/giftList',
      name: 'giftList',
      component: giftList
    }, {
      path: '/giftPay',
      name: 'giftPay',
      component: giftPay
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
