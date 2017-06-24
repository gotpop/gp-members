<template>
<section class="main main-form section">

  <div class="form-wrap container">
    <div class="columns">
      <div class="column">

        <form @submit.prevent id="formoid" method="post">

          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input v-validate="'required|min:3'" class="input" type="text" placeholder="10 Sample House" v-model="userStore.address1" name="address1" autofocus>
            </p>
            <p class="help is-danger" v-show="errors.has('address1')">{{ errors.first('address1') }}</p>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <p class="control">
              <input v-validate="'required'" class="input" type="text" placeholder="Sample street" v-model="userStore.address2" name="address2">
            </p>
            <p class="help is-danger" v-show="errors.has('address2')">{{ errors.first('address2') }}</p>
          </div>

          <div class="field">
            <label class="label">Postcode</label>
            <p class="control">
              <input v-validate="'required'" class="input" type="text" placeholder="N1 5DS" v-model="userStore.postcode" name="postcode">
            </p>
            <p class="help is-danger" v-show="errors.has('postcode')">{{ errors.first('postcode') }}</p>
          </div>

          <div class="field">
            <p class="control">
              <button :disabled="errors.any()" v-on:click="gpSubmit" class="button is-primary is-large">
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
      this.$router.push('step3')
      console.log('User: ', this.userStore);

    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(() => {
        // eslint-disable-next-line
        // this.$router.push('step3')
        alert('From Submitted!');
      }).catch(() => {
        // eslint-disable-next-line
        alert('Correct them errors!');
      });
    }

  }
}
</script>

<style lang="scss">

</style>
