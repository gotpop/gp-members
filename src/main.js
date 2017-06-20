import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Hero from './Hero.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'
import Summary from './Summary.vue'

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
  mode: 'history'
})

Vue.component('gp-header', Header);
Vue.component('gp-hero', Hero);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
