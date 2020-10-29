<template lang="pug">
#app
  Navbar
  router-view  
  .bottom-content.text-center.mt-5
    BottomTag
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import BottomTag from '@/components/BottomTag.vue';

export default {
  components: {
    Navbar,
    BottomTag
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
</style>
