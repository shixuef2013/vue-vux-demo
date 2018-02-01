<template>
  <div>
    <!--header-->
    <!--<com-header :title="headerData.title" :toLink="headerData.toLink"></com-header>-->
    <!--header end-->

    <!--container-->
    <div id="allmap"
         style="
                width: 100%
                height:100%
                border: 1px solid gray
                overflow:hidden">
    </div>

    <!--container end-->
  </div>
</template>
<script>
  // import comHeader from 'components/comHeader'
  import BMap from 'BMap'

  export default {
    components: {
      // comHeader
    },
    data: () => ({
      headerData: {
        title: '网点详情',
        toLink: '/SalesOutlets'
      }
    }),
    created () {
      // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
      this.loadMap()
      // this.ready() // 如果在此处直接调用this.ready()方法，将无法加载地图
    },
    mounted () {
      this.ready()
    },
    methods: {
      loadMap: function () {
        console.log(this.$route.params.name)
        console.log(this.$route.params.addr)
        console.log(this.$route.params.phone)
        // setTimeout(this.ready, 0)
      },
      ready: function () {
        // 百度地图API功能
        var map = new BMap.Map('allmap')    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)  // 初始化地图,设置中心点坐标和地图级别
        // 添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}))
        map.setCurrentCity("北京")          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true)     //开启鼠标滚轮缩放
      }
    }
  }
</script>
<style>
  /* 去掉地图左下角的百度LOGO */
  .anchorBL {
    display: none
  }
</style>
