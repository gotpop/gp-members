import 'babel-polyfill'
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
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'en',
  dictionary: null,
  strict: true,
  enableAutoClasses: true,
  classNames: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'is-success',
    invalid: 'is-danger',
    pristine: 'pristine',
    dirty: 'dirty' 
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
