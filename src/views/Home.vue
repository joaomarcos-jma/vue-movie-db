<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" class="mb-6">
          <h2 class="font-weight-bold">Os mais populares</h2>
          <div id="popular" class="container-scroll">
            <div class="display-scroll">
              <app-skeleton-loader v-if="!mostPopular.results" class="card-container ma-8" />
              <div class="card-container" v-for="(popular, p) in mostPopular.results" :key="p">
                <movie-card-component :movie="popular" />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="mb-2">
          <h2 class="font-weight-bold">Filmes bem avaliados</h2>
          <div id="rated" class="container-scroll">
            <div class="display-scroll">
              <app-skeleton-loader v-if="!topRated.results" class="card-container ma-8" />
              <div class="card-container" v-for="(rated, n) in topRated.results" :key="n">
                <movie-card-component :movie="rated" />
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="mb-2">
          <h2 class="font-weight-bold">Lançamentos</h2>
          <div id="upcoming" class="container-scroll">
            <div class="display-scroll">
              <app-skeleton-loader v-if="!upcomingMovies.results" class="card-container ma-8" />
              <div class="card-container" v-for="(upcoming, u) in upcomingMovies.results" :key="u">
                <movie-card-component :movie="upcoming" />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    popularPage: 1,
    upcomingPage: 1,
    ratedPage: 1,
  }),
  computed: {
    ...mapGetters(['topRated', 'mostPopular', 'upcomingMovies']),
  },
  created() {
    this.getAllHome();
  },
  mounted() {
    this.buildElementsOnScroll();
  },
  methods: {
    buildElementsOnScroll() {
      const p = document.getElementById('popular');
      const r = document.getElementById('rated');
      const u = document.getElementById('upcoming');

      p.addEventListener('scroll', () => {
        this.isEndScroll(p, 'popularPage', 'getMoviesMostPopular');
      });
      r.addEventListener('scroll', () => {
        this.isEndScroll(r, 'ratedPage', 'getMoviesTopRated');
      });
      u.addEventListener('scroll', () => {
        this.isEndScroll(r, 'upcomingPage', 'getMoviesUpcoming');
      });
    },
    isEndScroll(el, page, action) {
      const idElement = el;
      const remaining = idElement.scrollLeft + idElement.offsetWidth;
      const result = idElement.scrollWidth - remaining;
      if (result < 5 && idElement.scrollLeft > 100) {
        setTimeout(() => {
          this[page] += 1;
          idElement.scrollLeft = 10;
          this[action](this[page]);
        }, 800);
      } else if (idElement.scrollLeft === 0 && this[page] > 1) {
        setTimeout(() => {
          this[page] -= 1;
          idElement.scrollLeft = 10;
          this[action](this[page]);
        }, 800);
      }
    },
    getAllHome() {
      this.getMoviesMostPopular();
      this.getMoviesTopRated();
      this.getMoviesUpcoming();
    },
    getMoviesMostPopular(page = 1) {
      this.$store.dispatch('getMoviesMostPopular', { page });
    },
    getMoviesTopRated(page = 1) {
      this.$store.dispatch('getMoviesTopRated', { page });
    },
    getMoviesUpcoming(page = 1) {
      this.$store.dispatch('getMoviesUpcoming', { page });
    },
  },
};
</script>
<style scoped>
.container-scroll {
  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;
  text-align: left;
  white-space: nowrap;
  position: relative;
}
.display-scroll {
  display: flex;
  width: 100%;
  height: auto;
}

.card-container {
  display: flex;
  flex: 1;
  width: auto;
  height: 100%;
  padding: 0 20px;
  flex-flow: row nowrap;
  align-items: center;
}

.image {
  width: 200px;
  height: 250px;
}
</style>
