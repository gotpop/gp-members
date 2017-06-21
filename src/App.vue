<template>
<div class="wrap-site">
  <gp-header></gp-header>
  <router-view></router-view>
</div>
</template>

<style lang="scss">
@import '~bulma';

.nav-item a.is-tab.router-link-exact-active,
a.nav-item.is-tab.router-link-exact-active {
    border-bottom: 3px solid #00d1b2;
    color: #00d1b2;
    padding-bottom: calc(0.75rem - 3px);
}
</style>


<script>
export default {
  props: ['Icon']
}
</script>
