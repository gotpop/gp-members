<template>
<div>



  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
        <a class="nav-item is-tab is-hidden-mobile">About</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a class="nav-item is-tab is-hidden-tablet">Features</a>
        <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
        <a class="nav-item is-tab is-hidden-tablet">About</a>
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          Profile
        </a>
        <a class="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>






  <div class="container">


    <div class="columns">
      <div class="column">



        <input type="text" v-model="message">
        <p>{{message}}</p>
      </div>
    </div>


  </div>


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
