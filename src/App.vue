<template lang="pug">
#app
  Navbar
  router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('./assets/fonts/SourceSansPro-Regular.otf');
}

#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
