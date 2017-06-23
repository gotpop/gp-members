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

        <form @submit.prevent id="formoid" method="post">


          <div class="field">
            <label class="label">Name</label>
            <p class="control">
              <input v-validate="'required|min:3'" class="input" type="text" v-model="userStore.name" name="name">
            </p>
            <p class="help is-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <p class="control">
              <input v-on:change="isValid" v-validate="'required|min:3'" class="input" type="text" placeholder="Doe" v-model="userStore.surname" name="surname">
            </p>
            <p class="help is-danger" v-show="errors.has('surname')">{{ errors.first('surname') }}</p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input v-on:change="isValid" v-validate="'required|email'" class="input" type="email" placeholder="janedoe@gmail.com" value="hello@" v-model="userStore.email" name="email">
              <p class="help is-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
            </p>
          </div>


          <div class="field">
            <p class="control">

              <button :disabled="buttonDisabled" v-on:click="gpSubmit" class="button is-primary is-large">
                <span>Continue</span>
                    <span class="icon">
                      <i class="fa fa-home"></i>
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
    }
  },
  methods: {
    gpSubmit: function() {
      // console.log('User: ', this.userStore);
      this.$router.push('step2')
      // console.log(this.emailValue);
    },
    isValid: function() {

      if (this.errors.any() == false) {
        this.buttonDisabled = false
      } else if (this.errors.any() == true) {
        this.buttonDisabled = true
      }


    }
  }
}
</script>
