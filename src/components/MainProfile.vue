<template lang="pug">
b-row
    b-col.mb-5(:md="8" )
        table.biodata.text-left(cellpadding="7")
            tr(v-for="(value, profile) in profiles" :key="profile")
                td {{ profile }}
                td :
                td {{ value }}
    b-col(:md="4")
        img.img-thumbnail(:src="sideImagePath" width="300")
</template>

<script>
export default {
  name: 'MainProfile',
  data() {
    return {
      profiles: {
        'Nama Lengkap': 'David Mahbubi',
        'Tempat / Tanggal Lahir': 'Banyuwangi, 03 Maret 2002',
        Alamat: 'Sidorejo Kulon, Yosomulyo, Gambiran, Banyuwangi 68486',
        Hobi: 'Ngoding'
      },
      sideImagePath: '/img/david-with-laptop.jpg'
    };
  }
};
</script>

<style scoped>
.biodata tr td {
  font-size: 18px;
}

.biodata tr td:first-child {
  font-weight: bold;
}
</style>
