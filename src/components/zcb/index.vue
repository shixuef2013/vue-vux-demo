<template>
  <div>
    <group title="性别">
      <radio :selected-label-style="{color: '#FF9900'}" :options="genders" v-model="formParam.gender"
             @on-change="change"></radio>
    </group>

    <group title="通讯地址(用于寄送礼品)">
      <x-input v-model="formParam.address"></x-input>
    </group>

    <group title="邮箱">
      <x-input v-model="formParam.email"></x-input>
    </group>

    <group title="QQ">
      <x-input v-model="formParam.qq"></x-input>
    </group>

    <group title="微博">
      <x-input v-model="formParam.weibo"></x-input>
    </group>

    <group title="职业">
      <selector placeholder="请选择职业" v-model="formParam.job" name="district" :options="jobs" @on-change="onChange"></selector>
    </group>
    <x-button @click.native="logInfo">1111</x-button>
  </div>
</template>

<script>
  import {Group, Radio, XButton, XInput, Selector} from 'vux'

  export default {
    components: {
      Group,
      Radio,
      XButton,
      XInput,
      Selector
    },
    data () {
      return {
        genders: [{key: '0', value: '男'}, {key: '1', value: '女'}],
        jobs: ['各级政府部门、企事业单位、党政机关和公众团体的领导者',
          '专业技术人员（教师、医生、工程技术人员、作家等专业人员）',
          '职员（从事一般性事务工作的人员）',
          '商务人员',
          '第三产业服务人员',
          '产业工人',
          '从事农林牧渔业的劳动者',
          '家庭主妇',
          '学生',
          '私营企业主',
          '失业',
          '离退休人员',
          '其他'
        ],
        formParam: {
          gender: '0',
          address: '',
          email: '',
          qq: '',
          weibo: '',
          job: ''
        }
      }
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
      logInfo () {
        console.log('===', this.formParam.gender)
      },
      onChange (val) {
        console.log(val)
      }
    }
  }
</script>
