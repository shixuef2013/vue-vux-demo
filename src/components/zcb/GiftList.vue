<template>
  <div>
    <panel header="最新商品" :list="list" :type="type" @on-img-error="onImgError"></panel>
    <divider v-if="giftEmpty">暂无商品</divider>
  </div>
</template>

<script>
  import {Panel, Divider} from 'vux'

  export default {
    components: {
      Panel,
      Divider
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      }
    },
    data () {
      return {
        type: '1',
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '可乐',
          desc: '最好喝的可口可乐  ￥2.00 + 积分2点',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '雪碧',
          desc: '最爽口的冰凉雪碧  ￥5.00 + 积分10点',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }]
      }
    },
    computed: {
      giftEmpty () {
        return this.list.length === 0
      }
    }
  }
</script>
