<template>
  <baidu-map class="map" :center="center" :zoom="zoom" :map-type="mapType" :scroll-wheel-zoom="scrollWheelZoom" @ready="handler">
    <!--比例尺-->
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
    <!--缩放图标-->
    <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showZoomInfo="showZoomInfo"></bm-navigation>
    <!--地图类型-->
    <!--<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-map-type>-->
    <!--定位-->
    <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" @click="onClickMarker">
      <!--:icon="{url: '@/assets/zcb/gift.png', size: {width: 300, height: 157}}"-->
      <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
    </bm-marker>
  </baidu-map>
</template>


<script>
  export default {
    components: {},
    data () {
      return {
        // 初始化中心点
        center: {lng: 116.404, lat: 39.915},
        // 缩放等级
        zoom: 15,
        // 地图类型
        mapType: 'BMAP_NORMAL_MAP',
        // 鼠轮缩放
        scrollWheelZoom: true,
        // 缩放显示级别提示信息
        showZoomInfo: true,
        // 平移缩放控件的类型
        navigationControlType: 'NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE',
        show: false
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
      },
      onClickMarker ({type, target}) {
        console.log(type, target)
        this.show = !this.show
      },
      /**
       * windowInfo显示时回调
       */
      infoWindowOpen () {
        console.log('open')
      },
      /**
       * windowInfo关闭时回调
       */
      infoWindowClose () {
        console.log('close')
      }
    }
  }
</script>
<style>
  /*
  去掉地图左下角的百度LOGO
   */
  .anchorBL {
    display: none
  }

  .map {
    width: 100%;
    height: 100%;
  }
</style>
