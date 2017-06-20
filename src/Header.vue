<template>


    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item is-tab is-hidden-mobile is-active">Home</router-link>
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
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab is-hidden-tablet">Features</a>
          <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
          <a class="nav-item is-tab is-hidden-tablet">About</a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>


</template>
