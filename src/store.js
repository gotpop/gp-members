import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userStore: {
      name: '',
      surname: '',
      email: '',
      address1: '',
      address2: '',
      postcode: '',
      list: ''
    }
  }
})
