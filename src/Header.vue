<template>
<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
      <router-link to="/step1" class="nav-item is-tab is-hidden-mobile">Step 1</router-link>
      <router-link to="/step2" class="nav-item is-tab is-hidden-mobile">Step 2</router-link>
      <router-link to="/step3" class="nav-item is-tab is-hidden-mobile">Step 3</router-link>
      <router-link to="/summary" class="nav-item is-tab is-hidden-mobile">Summary</router-link>
    </div>
    <span class="nav-toggle">
      <span></span>
    <span></span>
    <span></span>
    </span>
    <div class="nav-right nav-menu">
      <span class="icon">
  <i class="fa fa-home"></i>
</span>
      <router-link to="/" class="nav-item is-tab is-hidden-tablet is-active">Home</router-link>
      <router-link to="/step1" class="nav-item is-tab is-hidden-tablet">Step 1</router-link>
      <router-link to="/step2" class="nav-item is-tab is-hidden-tablet">Step 2</router-link>
      <router-link to="/step3" class="nav-item is-tab is-hidden-tablet">Step 3</router-link>
      <router-link to="/summary" class="nav-item is-tab is-hidden-tablet">Summary</router-link>
      <a href="https://github.com/gotpop/gp-members" class="nav-item is-tab">GitHub</a>
    </div>
  </div>
</nav>
</template>

<script>
  //  let makeIcon = new Icon({type: 'lollipop', class: 'icon'}).build()
</script>
