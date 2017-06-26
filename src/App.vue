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
    flex-wrap: wrap;
}

.main {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 52px);
    flex-wrap: wrap;
    &-content {
        display: block;
    }
    &-form {
        align-items: center;
    }
    & .container {
        flex: 1 1 100%;
    }
}

.form-wrap {
    max-width: 600px;
    flex: 1 1 100%;
    margin-bottom: 52px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
}

.fade-enter-active {
    transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.nav-item a.is-tab.router-link-exact-active,
a.nav-item.is-tab.router-link-exact-active {
    border-bottom: 3px solid #00d1b2;
    color: #00d1b2;
    padding-bottom: calc(0.75rem - 3px);
}
</style>
