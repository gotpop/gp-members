<template>
<div>


  <div class="container">

    <div class="columns">
      <div class="column">

        <input type="text" v-model="message">
        <p>{{message}}</p>
      </div>
    </div>

  </div>



</div>
</template>


<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
