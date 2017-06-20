<template>
<section class="section">

<gp-hero></gp-hero>

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
