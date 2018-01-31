<template>
  <div>
    <group title="性别">
      <radio :selected-label-style="{color: '#FF9900'}" :options="genders" v-model="formParam.gender"
             @on-change="genderChange"></radio>
    </group>

    <group title="通讯地址(用于寄送礼品)">
      <x-input v-model="formParam.address"></x-input>
    </group>

    <group title="邮箱">
      <x-input v-model="formParam.email" is-type="email"></x-input>
    </group>

    <group title="QQ">
      <x-input v-model="formParam.qq" keyboard="number"></x-input>
    </group>

    <group title="微博">
      <x-input v-model="formParam.weibo"></x-input>
    </group>

    <group title="职业">
      <selector placeholder="请选择职业" v-model="formParam.job" name="district" :options="jobs" @on-change="jobChange"></selector>
    </group>

    <checklist title="兴趣爱好" required :options="hobbies" v-model="formParam.hobby" @on-change="hobbyChange"></checklist>

    <group title="从哪了解中福在线">
      <selector placeholder="请选择" v-model="formParam.referrer_type" name="district" :options="refers" @on-change="referChange"></selector>
    </group>

    <x-button type="warn" :show-loading="submitLoading" @click.native="logInfo">保存</x-button>
  </div>
</template>

<script>
  import {Group, Radio, XButton, XInput, Selector, Checklist} from 'vux'
  import Constants from '@/param/Constants'

  export default {
    components: {
      Group,
      Radio,
      XButton,
      XInput,
      Selector,
      Checklist
    },
    data () {
      return {
        genders: Constants.Register.genders,
        jobs: Constants.Register.jobs,
        hobbies: Constants.Register.hobbies,
        refers: Constants.Register.refers,
        formParam: {
          gender: Constants.Register.defaultGender,
          address: '',
          email: '',
          qq: '',
          weibo: '',
          job: '',
          hobby: [],
          referrer_type: ''
        },
        submitLoading: false
      }
    },
    methods: {
      /**
       * 性别选择
       * @param value
       * @param label
       */
      genderChange (value, label) {
        console.log('性别选择：', value, label)
      },
      /**
       * 兴趣爱好选择
       * @param val
       * @param label
       */
      hobbyChange (val, label) {
        console.log('兴趣爱好选择：', val)
      },
      /**
       * 职业选择
       * @param val
       */
      jobChange (val) {
        console.log('职业选择：', val)
      },
      /**
       * 了解途径选择
       * @param val
       */
      referChange (val) {
        console.log('了解途径选择：', val)
      },
      logInfo () {
        console.log('===', this.formParam.hobby)
      }
    }
  }
</script>
