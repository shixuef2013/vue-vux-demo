<template>
<div>
  <form-preview header-label="付款金额" header-value="¥2.00" :body-items="list"></form-preview>

  <group></group>
  <toast v-model="showPayToast" type="warn">暂未开通支付</toast>
  <x-button type="primary" @click.native="submitPay">立即支付</x-button>
</div>
</template>

<script>
  import { FormPreview, Group, XButton, Toast } from 'vux'
  import store from '@/vuex/store'
  export default {
    components: {
      FormPreview,
      Group,
      XButton,
      Toast
    },
    data () {
      return {
        totalAmt: '',
        list: [{
          label: '商品',
          value: ''
        }, {
          label: '消费积分',
          value: ''
        }, {
          label: '收款方',
          value: '中彩宝'
        }],
        showPayToast: false
      }
    },
    methods: {
      submitPay () {
        this.showPayToast = true
      }
    },
    created: function () {
      console.log('礼品支付页面初始化_mounted', JSON.stringify(store.state.buyGift))
      // const currentGift = store.state.buyGift
      // this.totalAmt = currentGift.
      // this.$on('giftItem', function (item) {
      //   console.log('礼品支付页面初始化', item)
      // })
    }
  }
</script>

<style scoped>

</style>
