<template>
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link to="/" class="nav-item nav-item-logo is-tab is-hidden-mobile">
        <span class="icon">
          <i class="fa fa-fire"></i>
        </span>
        <span>GotPop Members</span>
      </router-link>
      <router-link v-if="validPages.step1" to="/step1" class="nav-item is-tab is-hidden-mobile">Step 1</router-link>
      <router-link v-if="validPages.step2" to="/step2" class="nav-item is-tab is-hidden-mobile">Step 2</router-link>
      <router-link v-if="validPages.step3" to="/step3" class="nav-item is-tab is-hidden-mobile">Step 3</router-link>
      <router-link v-if="validPages.page3" to="/summary" class="nav-item is-tab is-hidden-mobile">Summary</router-link>
    </div>
    <span v-on:click="toggleOpen = !toggleOpen" class="nav-toggle">
      <span></span>
    <span></span>
    <span></span>
    </span>
    <div v-bind:class="{ 'is-active': toggleOpen }" class="nav-right nav-menu">
      <router-link to="/" class="nav-item is-tab is-hidden-tablet is-active">Home</router-link>
      <router-link to="/step1" class="nav-item is-tab is-hidden-tablet">Step 1</router-link>
      <router-link to="/step2" class="nav-item is-tab is-hidden-tablet">Step 2</router-link>
      <router-link to="/step3" class="nav-item is-tab is-hidden-tablet">Step 3</router-link>
      <router-link to="/summary" class="nav-item is-tab is-hidden-tablet">Summary</router-link>
      <a href="https://github.com/gotpop/gp-members" class="nav-item nav-item-github is-tab">
        <div>View project on GitHub</div>
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      toggleOpen: false,
    }
  },
  computed: {
    validPages() {
      return this.$store.state.validPages
    }
  }
}
</script>

<style lang="scss">
.nav {
    flex: 1 1 100%;
}
.nav-item-github .icon {
    margin-left: 1rem;
}
.nav-item-logo .icon {
    margin-right: 1rem;
}
</style>
