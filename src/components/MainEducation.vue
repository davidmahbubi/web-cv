<template lang="pug">
.main-education
  div(v-for="(education, idx) in educations" :key="idx")
    .d-inline-block.p-4.timeline-item.rounded(:class="{'timeline-next': idx > 0}")
        span.font-weight-bold {{ education.range }}
        h3.mt-2 {{ education.schoolName }}
        h5(v-if="education.major") {{ education.major }}
    hr.timeline-primary(v-if="idx < (educations.length - 1)")
</template>

<script>
export default {
  data() {
    return {
      educations: [
        {
          range: '2008 - 2014',
          schoolName: 'SDN 4 Yosomulyo',
          major: ''
        },
        {
          range: '2014 - 2017',
          schoolName: 'SMPN 1 Gambiran',
          major: ''
        },
        {
          range: '2017 - 2020',
          schoolName: 'SMK Muhammadiyah 1 Genteng',
          major: 'Teknik Komputer dan Jaringan'
        },
        {
          range: 'Sekarang',
          schoolName: 'Politeknik Negeri Banyuwangi',
          major: 'Teknik Informatika'
        }
      ]
    };
  }
};
</script>

<style scoped>
.timeline-primary {
  transform: rotate(90deg) translateX(30px);
  width: 70px;
  border-width: 3px;
  border-radius: 10px;
}

.timeline-next {
  margin-top: 57px;
}

.timeline-item {
  background-color: #efbbcf;
  border: none;
}
</style>
