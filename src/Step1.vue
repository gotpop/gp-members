<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <progress class="progress is-primary" value="33" max="100">30%</progress>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">

          <form  @submit.prevent id="formoid" method="post">

            <div class="field">
              <label class="label">Name</label>
              <p class="control">
                <input class="input" type="text" placeholder="Text input" v-model="user.name">
                <p>{{name}}</p>
              </p>
            </div>

            <div class="field">
              <label class="label">Username</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Text input" value="bulma" v-model="user.surname">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </p>
              <p class="help is-success">This username is available</p>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <p class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="text" placeholder="Email input" value="hello@" v-model="user.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-warning"></i>
                </span>
              </p>
              <p class="help is-danger">This email is invalid</p>
            </div>

            <div class="field is-grouped">
              <p class="control">
                <button  v-on:click="gpSubmit" class="button is-primary">Continue</button>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'hello',
      name: '',
      user: {

      }
    }
  },
  methods: {
    gpSubmit: function() {
      console.log('User: ', this.user);
    }
  }
}
</script>
