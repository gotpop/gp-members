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
    },
    serverUserObject() {
      return this.$store.state.serverUserObject
    }
  },
  methods: {
    gpSubmit: function() {

      let sendObject = JSON.stringify(this.userStore)

      fetch("api/user", {
        method: "POST",
        body: sendObject
      }).then(doThis.bind(this))

      function doThis(response) {
        return response.text().then(thenThis.bind(this));
      }

      function thenThis(text) {
        let parseString = JSON.parse(text)
        this.serverUserObject.address1 = parseString.address1
        this.serverUserObject.address2 = parseString.address2
        this.serverUserObject.email = parseString.email
        this.serverUserObject.list = parseString.list
        this.serverUserObject.name = parseString.name
        this.serverUserObject.postcode = parseString.postcode
        this.serverUserObject.surname = parseString.surname
      }
      this.$router.push('summary')
    }
  }
}
</script>
