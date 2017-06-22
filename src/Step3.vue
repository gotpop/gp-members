<template>
<section class="section">
  <div class="container">

    <div class="columns">
      <div class="column">
        <progress class="progress is-primary" value="100" max="100">30%</progress>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="columns">
      <div class="column">

        <form @submit.prevent id="formoid" method="post">

          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select v-model="userStore.list" name="select" autofocus>
                  <option v-for="type in contactTypes">{{ type.contactType }}</option>
                </select>
              </span>
            </p>
            <p class="help is-danger" v-show="errors.has('select')">{{ errors.first('select') }}</p>
          </div>

          <div class="field">
            <p class="control">
              <button disabled v-on:click="gpSubmit" class="button is-primary is-large">
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
  data() {
    return {
      contactTypes: [{
          contactType: 'Contact by email'
        },
        {
          contactType: 'Contact by post'
        },
        {
          contactType: 'Contact in person',
        }
      ]
    }
  },
  computed: {
    userStore() {
      return this.$store.state.userStore
    }
  },
  methods: {
    gpSubmit: function() {

      let sendObject = JSON.stringify(this.userStore)

      fetch("api/user", {
        method: "POST",
        body: sendObject
      }).then(function(response) {
        return response.text().then(function(text) {
          console.log(text);
        });
      });

      console.log('User object: ', this.userStore);
      this.$router.push('summary')
    }
  }
}
</script>
