<template>
  <div>
    <h1>Welcome</h1>

    <app-input></app-input>
  </div>
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
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
