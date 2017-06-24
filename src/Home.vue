<template>
<main class="main">

  <gp-hero></gp-hero>

  <section class="section">
    <div class="container">

      <router-link to="/step1" class="button is-success is-large">
        <span>Join</span>
        <span class="icon">
          <i class="fa fa-user-plus"></i>
        </span>
      </router-link>

    </div>
  </section>

</main>
</template>


<style lang="scss">
.main {
    flex: 1 1 100%;
}
</style>
