<template lang="pug">
    b-row.pt-4
        b-col.mb-3(:md="6" v-for="(certificate, idx) in certificates" :key="idx")
            .info.mb-4
                h3.font-weight-bold.certificate-title {{ certificate.title }}
                span Verifikasi 
                    a(:href="certificate.verificationLink" target="blank") disini 
            img.img-thumbnail(:src="certificate.path" style="object-fit: cover" height="200")
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          title: 'Sertifikat Dicoding',
          verificationLink:
            'https://www.dicoding.com/certificates/QGRX557M2X0M',
          path: '/img/certificates/dicoding.jpg'
        },
        {
          title: 'Sertifikat Udemy',
          verificationLink:
            'https://ude.my/UC-aa0e08ed-da6c-49dd-b91e-c2f0fbcfae6d',
          path: '/img/certificates/udemy.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
.certificate-title {
  text-transform: uppercase !important;
}
</style>
