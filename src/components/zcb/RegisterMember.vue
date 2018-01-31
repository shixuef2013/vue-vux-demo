<template>
<div>
  <img src="@/assets/zcb/lottery_online.png" style="width: 100%;"/>

  <group title="注册手机号码">
    <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
  </group>

  <group title="短信验证码" class="weui-cells_form">
    <x-input title="验证码" class="weui-vcode">
      <x-button v-if="countDownStart" slot="right" type="warn" :disabled="countDownStart" mini @click.native="sendMsgCode">{{countDownTime + sendMsgButtonLabel}}</x-button>
      <x-button v-else slot="right" type="warn" :disabled="countDownStart" mini @click.native="sendMsgCode">{{sendMsgButtonLabel}}</x-button>
    </x-input>
  </group>
  <countdown hidden v-model="countDownTime" :start="countDownStart" @on-finish="countDownFinish"></countdown>
  <x-button type="warn" :show-loading="submitLoading" :disabled="submitLoading" @click.native="submitRegister">注册</x-button>
</div>
</template>

<script>
  import {Group, XInput, XButton, Countdown} from 'vux'

  export default {
    components: {
      Group,
      XInput,
      XButton,
      Countdown
    },
    data () {
      return {
        countDownTime: 59,
        countDownStart: false,
        sendMsgButtonLabel: '获取验证码',
        submitLoading: false
      }
    },
    methods: {
      countDownFinish (index) {
        this.countDownStart = false
        this.countDownTime = 59
        this.sendMsgButtonLabel = '重新获取验证码'
        console.log('倒计时结束！！')
      },
      sendMsgCode () {
        this.sendMsgButtonLabel = ' 秒后重新获取验证码'
        this.countDownStart = true
        console.log('获取验证码按钮！！')
      },
      submitRegister () {
        console.log('注册提交按钮！！！')
        this.submitLoading = true
      }
    }
  }
</script>

<style scoped>

</style>
