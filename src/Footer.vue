<template>
  <footer class="footer">
    <div class="container">
      <nav class="nav">
        <div class="nav-center">
          <router-link to="/" class="nav-item is-tab is-hidden-mobile">
            Home
          </router-link>
          <router-link to="/step1" class="nav-item is-tab is-hidden-mobile">Step 1</router-link>
          <router-link to="/step2" class="nav-item is-tab is-hidden-mobile">Step 2</router-link>
          <router-link to="/step3" class="nav-item is-tab is-hidden-mobile">Step 3</router-link>
          <router-link to="/summary" class="nav-item is-tab is-hidden-mobile">Summary</router-link>
        </div>
      </nav>
    </div>
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>GotPop</strong> by <a href="http://jgthms.com">GotPop</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/gotpop/gp-members">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
    flex: 1 1 100%;
    align-self: flex-end;
}

.footer .nav {
  background: transparent;
  margin: 1rem 1rem 3rem;
}
</style>
