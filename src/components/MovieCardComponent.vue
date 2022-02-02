<template>
  <v-card class="mx-auto ma-8 rounded-lg" height="330">
    <v-img class="image" :src="buildImage(movie.backdrop_path)">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-text class="pt-6" style="position: relative;">
      <span class="font-weight-bold">{{movie.title}}</span>
      <p
        class="font-weight-light grey--text text--darken-3 mb-2"
      >{{displayDate(movie.release_date)}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from 'moment';

moment.locale('pt-br');

export default {
  name: 'MovieCardComponent',
  props: ['movie'],
  methods: {
    buildImage(path) {
      const imageSrc = `${process.env.VUE_APP_IMAGE_API}/t/p/w500${path}`;
      return imageSrc;
    },
    displayDate(date) {
      return moment(date).format('LL');
    },
  },
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.image {
  width: 200px;
  height: 225px;
  cursor: pointer;
}
</style>
