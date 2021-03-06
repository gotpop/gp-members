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
    },
    serverUserObject: {
      name: '',
      surname: '',
      email: '',
      address1: '',
      address2: '',
      postcode: '',
      list: ''
    },
    validPages: {
      step1: false,
      step2: false,
      step3: false
    }
  }
})
