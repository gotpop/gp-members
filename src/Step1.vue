<template>
<section class="main main-form section">

  <div class="form-wrap container">
    <div class="columns">
      <div class="column">

        <form @submit.prevent id="formoid" method="post">


          <div class="field">
            <label class="label">Name</label>
            <p class="control">
              <input v-validate="'required|min:3'" class="input" type="text" v-model="userStore.name" name="name" placeholder="Jane" autofocus>
            </p>
            <p class="help is-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <p class="control">
              <input v-validate="'required|min:3'" class="input" type="text" placeholder="Doe" v-model="userStore.surname" name="surname">
            </p>
            <p class="help is-danger" v-show="errors.has('surname')">{{ errors.first('surname') }}</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input v-validate="'required|email|min:3'" class="input" type="email" placeholder="janedoe@gmail.com" value="hello@" v-model="userStore.email" name="email">
              <p class="help is-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
            </p>
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
        this.validPages.step1 = true
        this.$router.push('step2')

      }).catch(() => {

        this.buttonDisabled = true
        this.validPages.step1 = false

      });
    }
  }
}
</script>
