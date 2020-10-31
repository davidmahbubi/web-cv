<template lang="pug">
#app
  Navbar
  router-view  
  .bottom-content.text-center.my-5
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
  src: url('/fonts/SourceSansPro-Regular.otf');
}

#app {
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-custom-primary {
  color: #8675a9;
}

.custom-dimension-badge {
  padding: 10px 20px !important;
  font-size: 15px !important;
}

.custom-badge-pills-radius {
  border-radius: 20px !important;
}

.home-custom-badge-primary {
  background-color: #8675a9 !important;
  color: white;
}

.custom-badge-primary {
  background-color: #efbbcf !important;
  color: black !important;
}
</style>
