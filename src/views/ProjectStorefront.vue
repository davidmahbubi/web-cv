<template lang="pug">
.project-store-front
    vue-headful(title="Etalase Proyek | David Mahbubi")
    .storefront-hero
        .container
            h1.mb-0.font-weight-bold.have-done-project Proyek yang Telah 
              mark.typed-text
            p.my-4 Anda dapat mengunjungi profil GitHub saya untuk melihat lebih banyak lagi
            a.btn.btn-custom-primary.btn-primary-rounded.btn-dimension-primary(:href="myGithubLink" target="blank")
                i.fab.fa-github.mr-2
                | Kunjungi Github
    .container
      b-row.mt-5.d-flex.justify-content-center
        b-col.mb-4(:md="6" :lg="4" v-for="(project, index) in projects" :key="index")
          ProjectCard.h-100(:title="project.title" :content="project.description" :linkLeft="project.demo" :linkRight="project.github" :stacks="project.stacks" :image="project.image")
</template>

<script>
import Typed from 'typed.js';
import ProjectCard from './../components/ProjectCard';

export default {
  data() {
    return {
      wordsList: ['Saya Kembangkan', 'Saya Kerjakan', 'Saya Selesaikan'],
      sampleWord: 'Hello world !',
      wordIndex: 0,
      myGithubLink: 'https://github.com/davidmahbubi',
      projects: [
        {
          image: '/img/projects/florist.png',
          title: 'POS Toko Bunga',
          description: '',
          demo: '',
          github: '',
          stacks: ['PHP', 'JavaScript', 'Laravel', 'MySQL']
        },
        {
          image: '/img/projects/textile.png',
          title: 'POS Toko Kain',
          description: '',
          demo: '',
          github: '',
          stacks: ['PHP', 'JavaScript', 'Laravel', 'MySQL']
        },
        {
          image: '/img/projects/covid.png',
          title: 'Web Statistik Kasus COVID19',
          description: '',
          demo: 'https://covid19.mhbproject.com/',
          github: 'https://github.com/davidmahbubi/covid19',
          stacks: ['JavaScript', 'Vue']
        },
        {
          image: '/img/projects/kanji_quiz.jpg',
          title: 'Quiz Kanji',
          description: '',
          demo: '',
          github: 'https://github.com/davidmahbubi/kanji_quiz_frontend',
          stacks: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue']
        }
      ]
    };
  },
  mounted() {
    this.initTyped();
  },
  methods: {
    initTyped() {
      return new Typed('.typed-text', {
        strings: this.wordsList,
        loop: true,
        typeSpeed: 95
      });
    }
  },
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.storefront-hero {
  text-align: center;
  width: 100%;
  color: white;
  padding: 113px 0;
  background-image: linear-gradient(#3185fc94, #3185fc94),
    url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.typed-element * {
  text-align: center !important;
}

.have-done-project {
  line-height: 65px;
}
</style>
