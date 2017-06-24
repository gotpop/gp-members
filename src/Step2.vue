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
              <input v-validate="'required|min:3'" class="input" type="text" placeholder="Sample street" v-model="userStore.address2" name="address2">
            </p>
            <p class="help is-danger" v-show="errors.has('address2')">{{ errors.first('address2') }}</p>
          </div>

          <div class="field">
            <label class="label">Postcode</label>
            <p class="control">
              <input v-validate="'required|min:3'" class="input" type="text" placeholder="N1 5DS" v-model="userStore.postcode" name="postcode">
            </p>
            <p class="help is-danger" v-show="errors.has('postcode')">{{ errors.first('postcode') }}</p>
          </div>

          <div class="field">
            <p class="control">
              <button v-on:click="validateBeforeSubmit" class="button is-success is-large">
                <span>Continue</span>
                <span class="icon">
                    <i class="fa fa-arrow-right"></i>
                </span>
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
  data() {
    return {
      buttonDisabled: true,
    }
  },
  computed: {
    userStore() {
      return this.$store.state.userStore
    },
    validPages() {
      return this.$store.state.validPages
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(() => {

        this.buttonDisabled = false
        this.validPages.step2 = true
        this.$router.push('step3')

      }).catch(() => {

        this.buttonDisabled = true
        this.validPages.step2 = false

      });
    }
  }
}
</script>
