<template>

  <section class="section">

    <div class="container">
      <div class="columns">
        <div class="column">
          <progress class="progress is-primary" value="33" max="100">30%</progress>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column">

          <form  @submit.prevent id="formoid" method="post">

            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input class="input" type="text" placeholder="Text input" v-model="userStore.name">
              </p>
            </div>

            <div class="field">
              <label class="label">Username</label>
              <p class="control">
                <input class="input" type="text" placeholder="Text input" value="bulma" v-model="userStore.surname">
              </p>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="Email input" value="hello@" v-model="userStore.email">
              </p>
            </div>

            <div class="field">
              <p class="control">

                  <router-link v-on:click="gpSubmit" to="/step2"  class="button is-primary is-large">
                    <span class="icon">
                      <i class="fa fa-home"></i>
                    </span>
                    <span>Continue</span>
                  </router-link>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column">
          {{userStore}}
        </div>
      </div>
    </div>

  </section>

</template>

<script>
export default {
  computed: {
    userStore() {
      return this.$store.state.userStore
    }
  },
  methods: {
    gpSubmit: function() {
      console.log('User: ', this.userStore.name );
    }
  }
}
</script>
