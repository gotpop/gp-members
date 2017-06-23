<template>
<section class="section">
  <div class="container">

    <div class="columns">
      <div class="column">
        <div class="notification is-success" v-show="showNote">
          <button class="delete" v-on:click="showNote = false"></button> Form data has been to submitted to the server via an Express endpoint, and then returned to the summary page in the table below.
        </div>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="columns">
      <div class="column">


        <table class="table is-striped is-bordered">
          <thead>
            <th>Name</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Name</td><td>{{serverUserObject.name}}</td>
            </tr>
            <tr>
              <td>Surname</td><td>{{serverUserObject.surname}}</td>
            </tr>
            <tr>
              <td>Email</td><td>{{serverUserObject.email}}</td>
            </tr>
            <tr>
              <td>Address1</td><td>{{serverUserObject.address1}}</td>
            </tr>
            <tr>
              <td>Address1</td><td>{{serverUserObject.address2}}</td>
            </tr>
            <tr>
              <td>Postcode</td><td>{{serverUserObject.postcode}}</td>
            </tr>
            <tr>
              <td>List</td><td>{{serverUserObject.list}}</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>
  </div>
</section>
</template>


<script>
export default {
  data() {
    return {
      showNote: true
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
      console.log('User: ', this.$store.state.userStore.name);
    }
  }
}
</script>
