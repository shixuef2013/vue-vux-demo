<template>
  <div>
    <div id="app">
      <router-view></router-view>
    </div>
    <div>
      <tabbar>
        <tabbar-item selected link="/">
          <img slot="icon" src="@/assets/zcb/map.png">
          <img slot="icon-active" src="@/assets/zcb/map_sel.png">
          <span slot="label">附近销售点</span>
        </tabbar-item>
        <tabbar-item link="/vux">
          <img slot="icon" src="@/assets/zcb/gift.png">
          <img slot="icon-active" src="@/assets/zcb/gift_sel.png">
          <span slot="label">礼品兑换</span>
        </tabbar-item>
        <tabbar-item link="/zcb">
          <img slot="icon" src="@/assets/zcb/member.png">
          <img slot="icon-active" src="@/assets/zcb/member_sel.png">
          <span slot="label">会员信息</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem
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
</style>
