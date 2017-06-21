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
                <input class="input" type="text" placeholder="Jane" v-model="userStore.name">
              </p>
            </div>

            <div class="field">
              <label class="label">Username</label>
              <p class="control">
                <input class="input" type="text" placeholder="Doe" value="bulma" v-model="userStore.surname">
              </p>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <p class="control">
                <input class="input" type="text" placeholder="janedoe@gmail.com" value="hello@" v-model="userStore.email">
              </p>
            </div>

            <div class="field">
              <p class="control">

                  <button v-on:click="gpSubmit"  class="button is-primary is-large">
                    <span class="icon">
                      <i class="fa fa-home"></i>
                    </span>
                    <span>Continue</span>
                  </button>
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
      console.log('User: ', this.userStore );
      this.$router.push('step2')
    }
  }
}
</script>
