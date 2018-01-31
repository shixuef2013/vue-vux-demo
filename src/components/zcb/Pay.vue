<template>
<div>
  <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list"></form-preview>

  <group></group>
  <toast v-model="showPayToast" type="warn">暂未开通支付</toast>
  <x-button type="primary" @click.native="submitPay">立即支付</x-button>
</div>
</template>

<script>
  import { FormPreview, Group, XButton, Toast } from 'vux'

  export default {
    components: {
      FormPreview,
      Group,
      XButton,
      Toast
    },
    data () {
      return {
        list: [{
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '消费积分',
          value: '10点'
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
    }
  }
</script>

<style scoped>

</style>
