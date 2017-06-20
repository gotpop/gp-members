
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Header from './Header.vue'
import Hero from './Hero.vue'

Vue.component('gp-home', Home);
Vue.component('gp-header', Header);
Vue.component('gp-hero', Hero);

new Vue({
  el: '#app',
  render: h => h(App)
})
