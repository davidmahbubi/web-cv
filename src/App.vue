<template lang="pug">
#app
  Navbar
  transition(name="fade" mode="out-in")
    keep-alive
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
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

@font-face {
  font-family: 'Source Sans Pro';
  src: url('/fonts/SourceSansPro-Regular.woff');
}

#app {
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-custom-primary {
  color: #e84855;
}

.text-custom-primary-alt {
  color: #3185fc;
}

.custom-dimension-badge {
  padding: 10px 20px !important;
  font-size: 15px !important;
}

.custom-badge-pills-radius {
  border-radius: 20px !important;
}

.home-custom-badge-primary {
  background-color: e84855 !important;
  color: white;
}

.custom-badge-primary {
  background-color: #3185fc !important;
  color: white !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn-custom-primary {
  border-width: 2.5px !important;
  color: white !important;
  background-color: #e84855 !important;
}

.btn-custom-primary:hover {
  background-color: #ad3842 !important;
  color: white !important;
}

.btn-primary-rounded {
  border-radius: 20px !important;
}

.btn-dimension-primary {
  padding: 5px 30px !important;
  font-weight: bold !important;
}

.btn-custom-outline-primary {
  border-color: black !important;
  color: black !important;
  border-width: 2.5px !important;
}

.btn-custom-outline-primary:hover {
  background-color: black !important;
  color: white !important;
  border-color: black !important;
}
</style>
