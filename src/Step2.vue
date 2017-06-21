<template>
<section class="section">
  <div class="container">

    <div class="columns">
      <div class="column">
        <progress class="progress is-primary" value="66" max="100">30%</progress>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="columns">
      <div class="column">

        <form @submit.prevent id="formoid" method="post">

          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input class="input" type="text" placeholder="10 Sample House" v-model="userStore.address1">
            </p>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input class="input" type="text" placeholder="Sample street" v-model="userStore.address2">
            </p>
          </div>

          <div class="field">
            <label class="label">Postcode</label>
            <p class="control">
              <input class="input" type="text" placeholder="N1 5DS" v-model="userStore.postcode">
            </p>
          </div>

          <div class="field">
            <p class="control">
              <button v-on:click="gpSubmit" class="button is-primary is-large">
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
      this.$router.push('step3')
    }
  }
}
</script>
