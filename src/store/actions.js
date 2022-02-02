import get from '../services/request.service';

const actions = {
  async getGenres({ commit }) {
    const res = await get('/genre/movie/list');
    if (res) {
      commit('GENDER_DATA', res.data.genres);
    }
  },
  async getMoviesMostPopular({ commit }, payload) {
    commit('STORAGE_MOVIES_INIT', 'popularMovies');
    const res = await get('/movie/popular', payload);
    if (res) {
      commit('MOVIES_MOST_POPULAR', res.data);
    }
  },
  async getMoviesLatest({ commit }) {
    const res = await get('/movie/latest');
    if (res) {
      commit('MOVIES_LATEST', res.data);
    }
  },
  async getMoviesUpcoming({ commit }, payload) {
    commit('STORAGE_MOVIES_INIT', 'upcomingMovies');
    const res = await get('/movie/upcoming', payload);
    if (res) {
      commit('MOVIES_UPCOMING', res.data);
    }
  },
  async getMoviesTopRated({ commit }, payload) {
    commit('STORAGE_MOVIES_INIT', 'topRatedMovies');
    const res = await get('/movie/top_rated', payload);
    if (res) {
      commit('MOVIES_TOP_RATED', res.data);
    }
  },
};

export default actions;
