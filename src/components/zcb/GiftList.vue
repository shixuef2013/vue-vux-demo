<template>
  <div>
    <panel header="最新商品" :list="list" :type="type" @on-click-item="onClickItem" @on-img-error="onImgError"></panel>
    <divider v-if="giftEmpty">暂无商品</divider>
  </div>
</template>

<script>
  import {Panel, Divider, XButton} from 'vux'
  import store from '@/vuex/store'

  export default {
    components: {
      Panel,
      Divider,
      XButton
    },
    data () {
      return {
        type: '1',
        list: [],
        titleTempalte: '__title<br/>',
        descTemplate: '<span style="color: red;">￥__totAmt + 积分__points点</span><button class="weui-btn custom-primary-red weui-btn_mini weui-btn_plain-primary buyBtn">点击购买</button>'
      }
    },
    computed: {
      giftEmpty () {
        return this.list.length === 0
      }
    },
    created: function () {
      // TODO 查询礼品列表返回数据格式
      let items = [{
        fileName: 'tzk.png',
        name: '投注卡',
        points: '30',
        totalAmt: '30'
      }, {
        fileName: 'xy.png',
        name: '香烟',
        points: '50',
        totalAmt: '100'
      }]

      let obj = null
      items.map((item, index) => {
        obj = {}
        // TODO 获取礼品图片路径
        obj.src = 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff'
        obj.url = '/giftPay'
        obj.desc = this.descTemplate.replace('__totAmt', item.totalAmt).replace('__points', item.points)
        obj.title = this.titleTempalte.replace('__title', item.name)
        this.list.push(obj)
      })
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      onClickItem (item) {
        console.log('panel onClickItem: ', JSON.stringify(item))
        // this.$emit('giftItem', 1)
        store.commit('BUY_GIFT', item)
      }
    }
  }
</script>
<style>
  .custom-primary-red {
    border-radius: 99px!important;
    border-color: #CE3C39!important;
    color: #CE3C39!important;
    &:active {
       border-color: rgba(206, 60, 57, 0.6)!important;
       color: rgba(206, 60, 57, 0.6)!important;
       background-color: transparent;
     }
  }

  .buyBtn {
    float: right;
    margin-right: 40px;
  }
</style>
