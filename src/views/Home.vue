<template lang="pug">
  .home.get-title(data-title="David Mahbubi | Freelance Fullstack Web Developer")
    vue-headful(title="David Mahbubi | Freelance Fullstack Web Developer - Official Site")
    b-row
      b-col.main-bg-primary.left-card(:xl="6" :lg="5" :md="4")
        MainCard
      b-col.right-card(:xl="6" :lg="7" :md="8")
        h1.font-weight-bold.main-title Halo
        h5.mt-3.mb-5.font-weight-bold Ingin kepoin lebih banyak ?
        .custom-button-group
          a.btn.btn-custom-primary.mr-2.btn-primary-rounded.btn-dimension-primary Kontak Saya
          router-link.btn.btn-custom-outline-primary.mr-2.btn-primary-rounded.btn-dimension-primary(:to="{name: 'ProjectStorefront'}") Etalase Proyek
        .paragraph-content
          p Halo, Saya David Mahbubi. Seorang mahasiswa Program Studi D3 Teknik Informatika di Politeknik Negeri Banyuwangi.
          p Saya adalah seorang Freelance Fullstack Web Developer. Bidang ini telah saya tekuni selama kurang lebih 2 tahun.
    b-row.main-section.text-center
      b-col
        svg.flying-item(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="300" style="right: 100px; top: 21px")
            path(fill="#efbbcf" d="M37.6,-39.6C43.8,-31.4,40.5,-15.7,35.8,-4.8C31,6.2,24.8,12.4,18.6,26.1C12.4,39.7,6.2,60.9,2.8,58.1C-0.6,55.3,-1.1,28.5,-14.9,14.8C-28.7,1.1,-55.7,0.6,-58.5,-2.8C-61.2,-6.1,-39.7,-12.2,-26,-20.3C-12.2,-28.5,-6.1,-38.7,4.8,-43.5C15.7,-48.3,31.4,-47.7,37.6,-39.6Z" transform="translate(100 100)")
        svg.flying-item(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="250" style="left: 10px; top: 100px")
            path(fill="#efbbcf" d="M13.9,-23.7C15.2,-12.6,11.4,-6.3,17.8,6.4C24.2,19.1,40.8,38.3,39.6,45.9C38.3,53.4,19.1,49.4,7.6,41.8C-3.9,34.2,-7.8,23,-18.4,15.4C-29.1,7.8,-46.4,3.9,-48.6,-2.1C-50.7,-8.2,-37.6,-16.3,-27,-27.5C-16.3,-38.6,-8.2,-52.6,-0.9,-51.7C6.3,-50.8,12.6,-34.9,13.9,-23.7Z" transform="translate(100 100)")
        svg.flying-item(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="200" style="left: 180px; top: 53px")
            path(fill="#efbbcf" d="M19,-21.1C28.3,-9.8,41.8,-4.9,41.3,-0.5C40.8,3.9,26.2,7.8,17,21.4C7.8,34.9,3.9,58.2,-1,59.2C-5.9,60.2,-11.9,39,-14.5,25.4C-17.2,11.9,-16.6,5.9,-17.4,-0.7C-18.1,-7.4,-20.2,-14.8,-17.5,-26.1C-14.8,-37.3,-7.4,-52.5,-1.2,-51.2C4.9,-50,9.8,-32.3,19,-21.1Z" transform="translate(100 100)")
        svg.flying-item(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="250" style="right: 350px; top: 167px")
            path(fill="#efbbcf" d="M26.2,-22.4C35.7,-16.7,46.4,-8.3,51.9,5.5C57.3,19.3,57.6,38.6,48.1,44.9C38.6,51.2,19.3,44.5,0.2,44.3C-18.9,44.1,-37.8,50.3,-38.4,44C-39,37.8,-21.4,18.9,-12.8,8.7C-4.1,-1.6,-4.4,-3.1,-3.7,-8.8C-3.1,-14.5,-1.6,-24.3,3.4,-27.7C8.3,-31,16.7,-28,26.2,-22.4Z" transform="translate(100 100)")
        svg.flying-item(viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="250" style="left: 350px; top: 167px")
            path(fill="#efbbcf" d="M22.9,-26.7C26.7,-19.1,24.7,-9.6,24.3,-0.4C24,8.8,25.3,17.7,21.5,29.3C17.7,40.9,8.8,55.2,-0.2,55.4C-9.2,55.5,-18.4,41.5,-33.7,30C-49.1,18.4,-70.7,9.2,-68.7,1.9C-66.8,-5.3,-41.4,-10.6,-26,-18.2C-10.6,-25.8,-5.3,-35.6,2.1,-37.7C9.6,-39.9,19.1,-34.3,22.9,-26.7Z" transform="translate(100 100)")
        b-container
          b-tabs(content-class="mt-5" align="center" v-model="tabIndex" pills)
            b-tab(:title-link-class="tabClass(0)" active)
              template(v-slot:title)
                i.fas.fa-user
                span.d-inline-block.ml-2 Profil
              MainProfile
            b-tab(:title-link-class="tabClass(1)")
              template(v-slot:title)
                i.fas.fa-user-graduate
                span.d-inline-block.ml-2 Pendidikan
              MainEducation
            b-tab(title="Pengalaman" :title-link-class="tabClass(2)")
              template(v-slot:title)
                  i.fas.fa-file
                  span.d-inline-block.ml-2 Sertifikat
              MainCertificate
</template>

<script>
import MainCard from '@/components/MainCard.vue';
import MainProfile from '@/components/MainProfile.vue';
import MainEducation from '@/components/MainEducation.vue';
import MainCertificate from '@/components/MainCertificate.vue';

export default {
  name: 'Home',
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    tabClass(index) {
      if (index === this.tabIndex) {
        return [
          'custom-badge-pills-radius',
          'home-custom-badge-primary',
          'personal-tabs-pills-radius'
        ];
      } else {
        return ['text-dark'];
      }
    }
  },
  components: {
    MainCard,
    MainProfile,
    MainEducation,
    MainCertificate
  }
};
</script>

<style scoped>
.main-bg-primary {
  background-color: #efbbcf;
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
  background-color: #8675a9;
}

.btn-custom-primary:hover {
  background-color: #6c5e88;
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

.main-section {
  margin-top: 100px;
}

.flying-item {
  position: absolute;
  z-index: -1;
}

@media (max-width: 767px) {
  .right-card {
    padding: 70px 53px 70px 53px;
  }

  .paragraph-content {
    max-width: none;
  }

  .flying-item {
    display: none;
  }
}
</style>
