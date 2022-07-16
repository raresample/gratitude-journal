<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar }
}
</script>

<style>
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  background: #f2f2f2;
  background: #555;
  background-image: url('./assets/flowers.jpg');
  /* background-repeat: no-repeat; */
  background-attachment: fixed;
  background-position: center;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  /* color: white; */
}
.container {
  max-width: 1200px;
  margin: 1rem;
}
form label, form input {
  display: block;
}
form input {
  padding: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
}
button {
  background: cornflowerblue;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
}

@media (min-width: 480px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
