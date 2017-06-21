<template>
<section class="section">
  <div class="container">

    <div class="columns">
      <div class="column">
        <p class="notification is-info">Summary</p>
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
      console.log('User: ', this.$store.state.userStore.name );
    }
  }
}
</script>
