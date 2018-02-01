import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  buyGift: {}
}
export default new Vuex.Store({
  state,
  mutations: {
    BUY_GIFT (state, item) {
      state.buyGift = item
    }
  }
})
