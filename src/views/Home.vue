<template lang="pug">
  .home
    b-row
      b-col.main-bg-primary.left-card(:xl="6" :lg="5" :md="4")
        MainCard
      b-col.right-card(:xl="6" :lg="7" :md="8")
        h1.font-weight-bold.main-title Halo
        h5.mt-3.mb-5.font-weight-bold Ingin kepoin lebih banyak ?
        .custom-button-group
          a.btn.btn-custom-primary.mr-2.btn-primary-rounded.btn-dimension-primary Resume
          a.btn.btn-custom-outline-primary.mr-2.btn-primary-rounded.btn-dimension-primary Projects
        .paragraph-content
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
</template>

<script>
import MainCard from '@/components/MainCard.vue';

export default {
  name: 'Home',
  components: {
    MainCard
  }
};
</script>

<style scoped>
.main-bg-primary {
  background-color: #e6dace;
}

.main-title {
  font-size: 70px;
}

.btn-primary-rounded {
  border-radius: 20px;
}

.btn-dimension-primary {
  padding: 5px 30px;
  font-weight: bold;
}

.btn-custom-primary {
  border-width: 2.5px;
  color: white;
  background-color: #0050fd;
}

.btn-custom-primary:hover {
  background-color: #003dc2;
  color: white;
}

.btn-custom-outline-primary {
  border-color: black;
  color: black;
  border-width: 2.5px;
}

.btn-custom-outline-primary:hover {
  background-color: black;
  color: white;
  border-color: black;
}

.right-card {
  padding: 100px 0 100px 150px;
}

.left-card {
  text-align: right;
}

.custom-button-group {
  margin-bottom: 50px;
}

.paragraph-content {
  max-width: 350px;
}
</style>
