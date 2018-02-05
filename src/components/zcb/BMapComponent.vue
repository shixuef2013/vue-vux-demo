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
      <!--:icon="{url: '../../assets/zcb/gift.png', size: {width: 300, height: 157}}"-->
      <!--:icon="{url: '@/assets/zcb/gift.png', size: {width: 300, height: 157}}"-->
      <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
        <!--<table>-->
          <!--<tr>-->
            <!--<td>-->
              <!--网点名称：<strong>我爱北京天安门</strong>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>-->
              <!--地址：<strong>我爱北京天安门</strong>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>-->
              <!--电话：<strong>我爱北京天安门</strong>-->
            <!--</td>-->
          <!--</tr>-->
          <!--<tr>-->
            <!--<td>-->
              <!--<button>到这里</button>-->
            <!--</td>-->
          <!--</tr>-->
        <!--</table>-->
        <div class="bottom_line">
          <!--<label class="weui-form-preview__label">付款金额</label>-->
          <h2>中福在线南京市牌楼巷销售厅</h2>
        </div>
        <table class="bottom_line">
          <tbody>
          <tr>
            <td class="left">地址：</td>
            <td>南京市鼓楼区牌楼巷39号</td>
          </tr>
          <tr>
            <td class="left">电话：</td>
            <td>
              <a href="tel:"></a>
            </td>
          </tr>
          </tbody>
        </table>
        <!--<div class="footer">-->
          <!--<span class="info1">到这里去</span>-->
          <!--<span class="info2">-->
		        <!--<a href="javascript:DrivingRoute(118.778434,32.050072,'中福在线南京市牌楼巷销售厅');" class="btn" style="width:120px">导   航</a>-->
	        <!--</span>-->
          <!--<span class="info3">-->
            <!--<a href="javascript:;" onclick="getCmsUrl('835079675')">详情</a>-->
          <!--</span>-->
          <!--<div></div>-->
        <!--</div>-->

        <!--<div class="weui-form-preview__bd">-->
          <!--<div class="weui-form-preview__item">-->
            <!--<label class="weui-form-preview__label">商品</label>-->
            <!--<span class="weui-form-preview__value"></span>-->
          <!--</div>-->
          <!--<div class="weui-form-preview__item">-->
            <!--<label class="weui-form-preview__label">消费积分</label>-->
            <!--<span class="weui-form-preview__value"></span>-->
          <!--</div>-->
          <!--<div class="weui-form-preview__item">-->
            <!--<label class="weui-form-preview__label">收款方</label>-->
            <!--<span class="weui-form-preview__value">中彩宝</span>-->
          <!--</div>-->
        <!--</div>-->
      </bm-info-window>
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

  .bottom_line {
    border-bottom: solid #ccc 1px;
  }

  h1,h2,h3,h4,h5,h6 {
    /*background: url(../../assets/zcb/li_arrow1.png) no-repeat left;*/
    /*padding-left: 20px;*/
    font-size: 100%;
  }

  div, p, table, th, td {
    font-size: 1em;
    ont-family: inherit;
    line-height: inherit;
  }
</style>
