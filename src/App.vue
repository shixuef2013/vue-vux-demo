<template>

  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"
       :title="headerTitle" :left-options="{showBack: false}"
      ></x-header>

      <router-view class="router-view"></router-view>

      <tabbar slot="bottom" @on-index-change="tabbaeIndexChange">
        <tabbar-item selected :link="tabbarRouter.saleHallMap">
          <img slot="icon" src="@/assets/zcb/map.png">
          <img slot="icon-active" src="@/assets/zcb/map_sel.png">
          <span slot="label">{{bottomMenu[0]}}</span>
        </tabbar-item>
        <tabbar-item :link="tabbarRouter.giftList">
          <img slot="icon" src="@/assets/zcb/gift.png">
          <img slot="icon-active" src="@/assets/zcb/gift_sel.png">
          <span slot="label">{{bottomMenu[1]}}</span>
        </tabbar-item>
        <tabbar-item :link="tabbarRouter.member">
          <img slot="icon" src="@/assets/zcb/member.png">
          <img slot="icon-active" src="@/assets/zcb/member_sel.png">
          <span slot="label">{{bottomMenu[2]}}</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, ViewBox, XHeader} from 'vux'
  import Constants from '@/param/Constants'
  import RouterPath from '@/param/RouterPath'
  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem,
      ViewBox,
      XHeader
    },
    data () {
      return {
        tabbarRouter: {
          saleHallMap: RouterPath.Navigator.saleHallMap,
          giftList: RouterPath.Navigator.giftList,
          member: RouterPath.Navigator.member
        },
        bottomMenu: Constants.Index.buttonMenu,
        headerTitle: Constants.Index.headerDefaultTitle
      }
    },
    computed: {
    },
    methods: {
      tabbaeIndexChange (index) {
        this.headerTitle = this.bottomMenu[index]
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .router-view {
    width: 100%;
    top: 46px;
  }
</style>
