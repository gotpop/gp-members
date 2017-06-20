<template>
<section class="section">
  <div class="container">

    <div class="columns">
      <div class="column">
        <p class="notification is-info">First column</p>
      </div>
      <div class="column">
        <p class="notification is-success">Second column</p>
      </div>
      <div class="column">
        <p class="notification is-warning">Third column</p>
      </div>
      <div class="column">
        <p class="notification is-danger">Fourth column</p>
      </div>
    </div>
  </div>
  <app-input></app-input>
</section>

</template>

<script>
import Input from './Input.vue'
 export default {
   components: {
     'app-input': Input
   }
 }
</script>


<style lang="scss">

@import '~bulma';



</style>
