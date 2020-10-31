<template lang="pug">
b-row
    b-col.mb-5(:md="8" )
        table.biodata.text-left(cellpadding="7")
            tr
                td Nama Lengkap
                td :
                td David Mahbubi
            tr
                td Tempat / Tanggal Lahir
                td :
                td Banyuwangi, 03 Maret 2002
            tr
                td Alamat
                td :
                td Sidorejo Kulon, Yosomulyo, Gambiran, Banyuwangi 68486
            tr
                td Hobi
                td :
                td Ngoding
    b-col(:md="4")
        img.img-thumbnail(src="/img/david-with-laptop.jpg" width="300")
</template>

<style scoped>
.biodata tr td {
  font-size: 18px;
}

.biodata tr td:first-child {
  font-weight: bold;
}
</style>
