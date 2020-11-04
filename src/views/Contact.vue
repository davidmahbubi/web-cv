<template lang="pug">
    .contact
        vue-headful(title="Kontak | David Mahbubi")
        #map-here
            .map-overlay
        b-container
            b-row.contact-card-container.position-relative
                b-col.mb-3(:md="6")
                    ContactCard(:title="'WhatsApp'" :content="contactsInformation.WANumber" :link="`https://api.whatsapp.com/send?phone=${contactsInformation.WANumber}`" button-text="Kirim Pesan" icon="fab fa-whatsapp")
                b-col.mb-3(:md="6")
                    ContactCard(:title="'Email'" :content="contactsInformation.email" :link="`mailto:${contactsInformation.email}?subject=WebsiteContent`" button-text="Kirim Surat" icon="fas fa-envelope")
            b-row
                b-col
                    b-card.shadow.border-0
                        b-card-body
                            h2 
                                i.fas.fa-map-marked-alt.text-custom-primary
                                span.ml-3.font-weight-bold Alamat Rumah
                            .address-body.mt-4
                                h5 Dusun Sidorejo Kulon RT 03 / RW 03, Desa Yosomulyo, Kecamatan Gambiran, Kabupaten Banyuwangi, Provinsi Jawa Timur, 68486
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'mapbox-gl';
import { generateGeoJson, generateMapboxOption } from './../utils/mapbox-util';
import ContactCard from '@/components/ContactCard.vue';

export default {
  data() {
    return {
      mapBoxAccessToken:
        'pk.eyJ1IjoiZGF2aWRtaGIiLCJhIjoiY2toMjRyMnliMDBqYjJwcHplM2w1NGljdSJ9.NlOSpKUZiM_t8s2Vj0itiQ',
      mapBoxStyleURL: 'mapbox://styles/davidmhb/ckh3g4xbf0akx19nvqny028l7',
      mapCoordinates: ['114.16545130312443', '-8.41599786869935'],
      contactsInformation: {
        WANumber: '089681925152',
        email: 'ulrichdavid0370@gmail.com'
      }
    };
  },
  methods: {
    initMapbox() {
      this.GEOJSON = generateGeoJson([
        {
          long: this.mapCoordinates[0],
          lat: this.mapCoordinates[1]
        }
      ]);
      this.map = new Map(
        generateMapboxOption({
          mapStyle: this.mapBoxStyleURL,
          accessToken: this.mapBoxAccessToken,
          center: this.mapCoordinates,
          scrollZoom: false
        })
      );
      for (const marker of this.GEOJSON.features) {
        new Marker().setLngLat(marker.geometry.coordinates).addTo(this.map);
      }
    }
  },
  mounted() {
    this.initMapbox();
  },
  components: {
    ContactCard
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap');

#map-here {
  width: 100%;
  height: 600px;
  position: relative;
}

.contact-card-container {
  margin-top: -60px;
  z-index: 2;
  text-align: center;
  font-family: 'Hind Siliguri', sans-serif;
}

.address-body h5 {
  line-height: 35px;
}

.map-overlay {
  position: absolute;
  z-index: 1;
  background-color: #3185fc62;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
