<template>
<div class="wrap-site">
  <gp-header></gp-header>
  <transition name="fade">
   <router-view></router-view>
 </transition>
 <gp-footer></gp-footer>
</div>
</template>

<style lang="scss">
@import '~bulma';


  .wrap-site {    
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    /* align-content: stretch; */
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.nav-item a.is-tab.router-link-exact-active,
a.nav-item.is-tab.router-link-exact-active {
    border-bottom: 3px solid #00d1b2;
    color: #00d1b2;
    padding-bottom: calc(0.75rem - 3px);
}
</style>
