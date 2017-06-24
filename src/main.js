import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Hero from './Hero.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Summary from './Summary.vue'
import {store} from './store'
import VeeValidate from 'vee-validate'


const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true
};

Vue.use(VeeValidate, config);

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/step1', component: Step1},
  {path: '/step2', component: Step2},
  {path: '/step3', component: Step3},
  {path: '/summary', component: Summary}
]

const router =  new VueRouter({
  routes,
  // routes,
  // mode: 'history'
})

Vue.component('gp-header', Header);
Vue.component('gp-footer', Footer);
Vue.component('gp-hero', Hero);

let gp = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
