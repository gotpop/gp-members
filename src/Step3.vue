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

        <form  @submit.prevent id="formoid" method="post">

          <div class="field">
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select v-model="userStore.list">
                  <option v-for="person in persons">{{ person.name }}</option>
                </select>
              </span>
            </p>
          </div>

          <div class="field">
            <p class="control">
              <router-link v-on:click="gpSubmit" to="/summary"  class="button is-primary is-large">
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
  data() {
    return {
      persons: [
        {name: 'Max', age: 27},
        {name: 'Chris', age: 30},
        {name: 'Nora', age: 25}
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
      console.log('User: ', this.$store.state.userStore.list );
    }
  }
}
</script>
